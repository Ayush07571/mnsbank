import { Metadata } from 'next';
import PolicyCentreContent from './PolicyCentreContent';

export const metadata: Metadata = {
  title: 'Policy Centre | MNS Bank',
  description: 'Download bank policies, fair practices code, and citizens charter from MNS Bank Bhopal',
};

export default function PolicyCentrePage() {
  return <PolicyCentreContent />;
}


export const unstable_instant = {
  prefetch: 'static',
};