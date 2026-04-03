import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'node:fs/promises';
import path from 'node:path';

// ─── Schema ────────────────────────────────────────────────────────────────────

const SaveInquirySchema = z.object({
  fullName: z.string().min(2).max(100),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  product: z.string().optional(),
  branch: z.enum(['BAIRAGARHI_HO', 'TT_NAGAR', 'KAROND']).optional(),
  message: z.string().max(500).optional(),
});

// ─── File path ─────────────────────────────────────────────────────────────────

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'inquiries.json');

// ─── Rate limiter (in-memory, resets on server restart) ────────────────────────

const ipStore = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const rec = ipStore.get(ip);
  if (!rec || now > rec.resetAt) {
    ipStore.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (rec.count >= 3) return false;
  rec.count++;
  return true;
}

// ─── Handlers ──────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0] ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'RATE_LIMIT_EXCEEDED', message: 'Too many requests. Try again in a minute.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const parsed = SaveInquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED', details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { fullName, mobile, product, branch, message } = parsed.data;

    // Generate reference number
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.random().toString(36).toUpperCase().slice(2, 6);
    const referenceNumber = `MNS-${dateStr}-${rand}`;

    const record = {
      referenceNumber,
      fullName,
      mobile,
      product: product ?? 'general',
      branch: branch ?? 'BAIRAGARHI_HO',
      message: message ?? '',
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };

    // Read existing records and append
    let records: typeof record[] = [];
    try {
      const raw = await fs.readFile(DATA_FILE, 'utf-8');
      records = JSON.parse(raw);
    } catch {
      // file missing or empty — start fresh
    }
    records.push(record);
    await fs.writeFile(DATA_FILE, JSON.stringify(records, null, 2), 'utf-8');

    return NextResponse.json({ success: true, referenceNumber }, { status: 200 });
  } catch (err) {
    console.error('[save-inquiry]', err);
    return NextResponse.json(
      { success: false, error: 'INTERNAL_ERROR', message: 'Something went wrong.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, error: 'METHOD_NOT_ALLOWED' },
    { status: 405 }
  );
}
