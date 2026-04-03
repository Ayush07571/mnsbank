export interface NewsEntry {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: 'announcement' | 'promotion' | 'service' | 'event';
  link: string;
  featured?: boolean;
}

export const newsEntries: NewsEntry[] = [
  {
    id: '1',
    title: 'New Digital Banking Features Launched',
    summary: 'Experience enhanced digital banking with improved security features and faster transactions.',
    date: '2024-03-15',
    category: 'service',
    link: '/net-banking',
    featured: true
  },
  {
    id: '2',
    title: 'Special Home Loan Festival Offer',
    summary: 'Get reduced processing fees and exclusive rates on home loans this festive season.',
    date: '2024-03-12',
    category: 'promotion',
    link: '/home-loan',
    featured: true
  },
  {
    id: '3',
    title: 'MNS Bank Wins Digital Excellence Award',
    summary: 'Recognized for outstanding digital banking solutions and customer service excellence.',
    date: '2024-03-10',
    category: 'announcement',
    link: '#',
    featured: false
  },
  {
    id: '4',
    title: 'Business Banking Workshop - Bhopal',
    summary: 'Join us for a free workshop on business banking solutions and financial management.',
    date: '2024-03-08',
    category: 'event',
    link: '#',
    featured: false
  },
  {
    id: '5',
    title: 'Updated Mobile Banking App Released',
    summary: 'New features include UPI 2.0, enhanced security, and improved user experience.',
    date: '2024-03-05',
    category: 'service',
    link: '#',
    featured: false
  },
  {
    id: '6',
    title: 'Senior Citizens Special Deposit Scheme',
    summary: 'Exclusive higher interest rates for senior citizens on time deposits.',
    date: '2024-03-01',
    category: 'promotion',
    link: '/time-deposit',
    featured: false
  },
  {
    id: '7',
    title: 'Scheduled System Maintenance',
    summary: 'Our digital banking services will be temporarily unavailable for scheduled maintenance on Sunday from 2 AM to 4 AM.',
    date: '2024-02-28',
    category: 'announcement',
    link: '#',
    featured: false
  },
  {
    id: '8',
    title: 'New Branch Opening - Arera Colony',
    summary: 'We are pleased to announce the opening of our new branch in Arera Colony, Bhopal, offering full banking services.',
    date: '2024-02-25',
    category: 'event',
    link: '#',
    featured: false
  }
];

export const categoryColors = {
  announcement: 'bg-blue-100 text-blue-800',
  promotion: 'bg-green-100 text-green-800',
  service: 'bg-purple-100 text-purple-800',
  event: 'bg-orange-100 text-orange-800'
};

export const categoryLabels = {
  announcement: 'Announcement',
  promotion: 'Promotion',
  service: 'Service Update',
  event: 'Event'
};
