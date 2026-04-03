import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Working Capital Loan | MNS Bank',
  description: 'Get working capital loans at competitive interest rates with flexible repayment options from MNS Bank Bhopal',
};

export default function WorkingCapitalLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
