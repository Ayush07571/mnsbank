import { Metadata } from 'next';
import GrievanceRedressalContent from './GrievanceRedressalContent';

export const metadata: Metadata = {
  title: 'Grievance Redressal | MNS Bank',
  description: 'Customer grievance redressal mechanism at MNS Bank Bhopal with RBI compliance and escalation matrix',
};

export default function GrievanceRedressalPage() {
  return <GrievanceRedressalContent />;
}


export const unstable_instant = {
  prefetch: 'static',
};