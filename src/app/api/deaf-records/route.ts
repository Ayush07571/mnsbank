import { NextRequest, NextResponse } from 'next/server';
import { DEAFRecord } from '@/lib/validations/deaf';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Load DEAF records from data file
    const dataDir = path.join(process.cwd(), 'src/data/deaf');
    const latestFile = path.join(dataDir, 'latest.json');
    
    let records: DEAFRecord[] = [];
    
    try {
      const fileContent = await fs.readFile(latestFile, 'utf8');
      records = JSON.parse(fileContent);
    } catch (error) {
      // Fallback to sample data if no file exists
      records = [
        {
          sno: 1,
          customerId: 'CUS001',
          glCode: '410101',
          newAccountNumber: 'SB001234',
          deafAccountNumber: 'DEAF001',
          accountName: 'RAJESH KUMAR',
          address: '123 MAIN STREET BHOAPL',
          state: 'MADHYA PRADESH',
          district: 'BHOPAL',
          transactionDate: '2023-03-15',
          deafAmount: 2500.50,
        },
        {
          sno: 2,
          customerId: 'CUS002',
          glCode: '410101',
          newAccountNumber: 'SB005678',
          deafAccountNumber: 'DEAF002',
          accountName: 'SMT. ANITA DEVI',
          address: '45 COLONY AREA',
          state: 'MADHYA PRADESH',
          district: 'BHOPAL',
          transactionDate: '2023-03-15',
          deafAmount: 1800.75,
        },
        {
          sno: 3,
          customerId: 'CUS003',
          glCode: '410102',
          newAccountNumber: 'CA009012',
          deafAccountNumber: 'DEAF003',
          accountName: 'MAHESH SHARMA',
          address: '789 NAGAR',
          state: 'MADHYA PRADESH',
          district: 'BHOPAL',
          transactionDate: '2023-03-15',
          deafAmount: 5200.00,
        },
      ];
    }
    
    return NextResponse.json(records);
  } catch (error) {
    console.error('Failed to load DEAF records:', error);
    return NextResponse.json(
      { error: 'Failed to load DEAF records' },
      { status: 500 }
    );
  }
}
