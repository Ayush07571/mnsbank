'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export interface NewsEntry {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: 'announcement' | 'promotion' | 'service' | 'event';
  link: string;
  featured?: boolean;
}

const newsEntries: NewsEntry[] = [
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
  }
];

const categoryColors = {
  announcement: 'bg-blue-100 text-blue-800',
  promotion: 'bg-green-100 text-green-800',
  service: 'bg-purple-100 text-purple-800',
  event: 'bg-orange-100 text-orange-800'
};

const categoryLabels = {
  announcement: 'Announcement',
  promotion: 'Promotion',
  service: 'Service Update',
  event: 'Event'
};

export function WhatsNew() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState(3);

  const filteredEntries = selectedCategory === 'all' 
    ? newsEntries 
    : newsEntries.filter(entry => entry.category === selectedCategory);

  const displayedEntries = filteredEntries.slice(0, displayCount);
  const hasMore = filteredEntries.length > displayCount;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const featuredEntry = newsEntries.find(entry => entry.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What's New at MNS Bank
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Stay updated with our latest announcements, promotions, and service updates
          </p>
        </div>

        {/* Featured News */}
        {featuredEntry && (
          <Card className="mb-12 border-2 border-brand-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-brand-primary text-white">
                      Featured
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[featuredEntry.category]}`}>
                      {categoryLabels[featuredEntry.category]}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
                    {featuredEntry.title}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {featuredEntry.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">
                      {formatDate(featuredEntry.date)}
                    </span>
                    <Button variant="primary" size="sm" asChild>
                      <a href={featuredEntry.link}>
                        Read More
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-brand-primary text-white'
                : 'bg-white text-text-secondary border border-border hover:bg-gray-50'
            }`}
          >
            All News
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === key
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-text-secondary border border-border hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedEntries.map((entry, index) => (
            <Card key={entry.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[entry.category]}`}>
                    {categoryLabels[entry.category]}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {formatDate(entry.date)}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                  {entry.title}
                </h3>
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {entry.summary}
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={entry.link}>
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setDisplayCount(prev => prev + 3)}
            >
              Load More News
            </Button>
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-8">
          <Button variant="ghost" size="sm" asChild>
            <a href="/news">
              View All News & Announcements
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
