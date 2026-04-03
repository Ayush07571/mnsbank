'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { newsEntries, categoryColors, categoryLabels, NewsEntry } from '@/data/news';

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
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-4">
            What&apos;s New at MNS Bank
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
                  <h3 className="font-heading text-2xl text-text-primary mb-4">
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
                <div className="relative h-64 overflow-hidden rounded-lg shadow-inner">
                  <Image 
                    src="/images/news-featured.png" 
                    alt="Featured News" 
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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
          {displayedEntries.map((entry) => (
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
                <h3 className="font-heading text-lg text-text-primary mb-3">
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
