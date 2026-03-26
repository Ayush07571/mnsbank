import { NextRequest, NextResponse } from 'next/server';
import { DEAFRecordSchema, DEAFRecord } from '@/lib/validations/deaf';
import { promises as fs } from 'fs';
import path from 'path';

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting: 5 uploads per hour per IP
function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
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

// Parse CSV file
function parseCSV(csvContent: string): any[] {
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  const records = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values = line.split(',').map(v => v.trim());
    const record: any = {};
    
    headers.forEach((header, index) => {
      const value = values[index] || '';
      
      // Map CSV headers to DEAFRecord schema
      switch (header.toLowerCase()) {
        case 's.no.':
        case 'sno':
          record.sno = parseInt(value) || 0;
          break;
        case 'customer id':
        case 'customerid':
          record.customerId = value;
          break;
        case 'gl code':
        case 'glcode':
          record.glCode = value;
          break;
        case 'new ac number':
        case 'newaccountnumber':
          record.newAccountNumber = value;
          break;
        case 'deaf new ac no.':
        case 'deafaccountnumber':
          record.deafAccountNumber = value;
          break;
        case 'account name':
        case 'accountname':
          record.accountName = value;
          break;
        case 'address':
          record.address = value;
          break;
        case 'state':
          record.state = value;
          break;
        case 'district':
          record.district = value;
          break;
        case 'transaction date':
        case 'transactiondate':
          record.transactionDate = value;
          break;
        case 'deaf amount':
        case 'deafamount':
          record.deafAmount = parseFloat(value) || 0;
          break;
        default:
          record[header] = value;
      }
    });
    
    records.push(record);
  }
  
  return records;
}

// Validate DEAF records
function validateDEAFRecords(records: any[]): { valid: DEAFRecord[]; errors: string[] } {
  const valid: DEAFRecord[] = [];
  const errors: string[] = [];
  
  records.forEach((record, index) => {
    try {
      const validated = DEAFRecordSchema.parse(record);
      valid.push(validated);
    } catch (error) {
      errors.push(`Row ${index + 1}: Invalid data format`);
    }
  });
  
  return { valid, errors };
}

// Save DEAF records to data file
async function saveDEAFRecords(records: DEAFRecord[]): Promise<void> {
  const dataDir = path.join(process.cwd(), 'src/data');
  const deafDir = path.join(dataDir, 'deaf');
  
  // Ensure directory exists
  await fs.mkdir(deafDir, { recursive: true });
  
  // Save to JSON file with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `deaf-${timestamp}.json`;
  const filepath = path.join(deafDir, filename);
  
  await fs.writeFile(filepath, JSON.stringify(records, null, 2), 'utf8');
  
  // Also update the latest file
  const latestFilepath = path.join(deafDir, 'latest.json');
  await fs.writeFile(latestFilepath, JSON.stringify(records, null, 2), 'utf8');
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
          recordsProcessed: 0,
          recordsFailed: 0,
          message: 'Rate limit exceeded. Please try again later.',
        },
        { status: 429 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const file = formData.get('csvFile') as File;
    
    if (!file) {
      return NextResponse.json(
        {
          success: false,
          recordsProcessed: 0,
          recordsFailed: 0,
          message: 'No file uploaded',
        },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.name.endsWith('.csv')) {
      return NextResponse.json(
        {
          success: false,
          recordsProcessed: 0,
          recordsFailed: 0,
          message: 'Only CSV files are allowed',
        },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          recordsProcessed: 0,
          recordsFailed: 0,
          message: 'File size exceeds 10MB limit',
        },
        { status: 400 }
      );
    }

    // Read file content
    const csvContent = await file.text();
    
    // Parse CSV
    const parsedRecords = parseCSV(csvContent);
    
    if (parsedRecords.length === 0) {
      return NextResponse.json(
        {
          success: false,
          recordsProcessed: 0,
          recordsFailed: 0,
          message: 'CSV file is empty or invalid',
        },
        { status: 400 }
      );
    }

    // Validate records
    const { valid, errors } = validateDEAFRecords(parsedRecords);
    
    if (valid.length === 0) {
      return NextResponse.json(
        {
          success: false,
          recordsProcessed: 0,
          recordsFailed: parsedRecords.length,
          errors,
          message: 'No valid records found in CSV',
        },
        { status: 400 }
      );
    }

    // Save valid records
    await saveDEAFRecords(valid);

    return NextResponse.json(
      {
        success: true,
        recordsProcessed: valid.length,
        recordsFailed: parsedRecords.length - valid.length,
        errors: errors.length > 0 ? errors : undefined,
        message: `Successfully processed ${valid.length} records`,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('DEAF upload error:', error);
    
    return NextResponse.json(
      {
        success: false,
        recordsProcessed: 0,
        recordsFailed: 0,
        message: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      recordsProcessed: 0,
      recordsFailed: 0,
      message: 'Only POST requests are allowed',
    },
    { status: 405 }
  );
}
