import { Metadata } from 'next';
import KYCCKYCContent from './KYCCKYCContent';

export const metadata: Metadata = {
  title: 'KYC & CKYC | MNS Bank',
  description: 'Know Your Customer and Central KYC services at MNS Bank - Check CKYC status and complete KYC verification',
};

export default function KYCCKYCPage() {
  return <KYCCKYCContent />;
}


