import { Metadata } from 'next';
import DownloadFormsContent from './DownloadFormsContent';

export const metadata: Metadata = {
  title: 'Download Forms | MNS Bank',
  description: 'Download all banking forms - account opening, loan applications, KYC, and other services from MNS Bank Bhopal',
};

export default function DownloadFormsPage() {
  return <DownloadFormsContent />;
}


export const unstable_instant = {
  prefetch: 'static',
};