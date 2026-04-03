import { NextRequest, NextResponse } from 'next/server';
import { InquirySubmissionSchema, InquiryResponseSchema } from '@/lib/validations/inquiry';
import { sendInquiryEmail } from '@/lib/email';

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting: 5 requests per minute per IP
function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Generate reference number
function generateReferenceNumber(): string {
  const date = new Date();
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).substr(2, 4).toUpperCase();
  return `MNS-${dateStr}-${random}`;
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const result = await response.json();
    
    return result.success && result.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = (request.headers.get('x-forwarded-for') as string)?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Apply rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'RATE_LIMIT_EXCEEDED',
          message: 'Too many requests. Please try again later.',
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate request body
    const validationResult = InquirySubmissionSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_FAILED',
          message: 'Invalid request data',
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // reCAPTCHA temporarily disabled for testing
    // const recaptchaValid = await verifyRecaptcha(data.recaptchaToken);
    // 
    // if (!recaptchaValid) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       error: 'VERIFICATION_FAILED',
    //       message: 'Verification unavailable, please try again shortly.',
    //     },
    //     { status: 400 }
    //   );
    // }

    // Generate reference number
    const referenceNumber = generateReferenceNumber();

    // Send inquiry email
    const emailSent = await sendInquiryEmail(data, referenceNumber);
    
    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          error: 'DISPATCH_FAILED',
          message: 'We could not process your request at this time. Please contact the branch directly.',
        },
        { status: 500 }
      );
    }

    // Return success response
    const response = {
      success: true,
      referenceNumber,
    };

    // Validate response schema
    const validatedResponse = InquiryResponseSchema.parse(response);

    return NextResponse.json(validatedResponse, { status: 200 });

  } catch (error) {
    console.error('Inquiry submission error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'INTERNAL_ERROR',
        message: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: 'METHOD_NOT_ALLOWED',
      message: 'Only POST requests are allowed',
    },
    { status: 405 }
  );
}
