'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { newsEntries, categoryColors, categoryLabels } from '@/data/news';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredEntries = selectedCategory === 'all' 
    ? newsEntries 
    : newsEntries.filter(entry => entry.category === selectedCategory);

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              News & Announcements
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Stay up to date with the latest news, service updates, and special promotions from MNS Bank.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Featured News Section */}
        {featuredEntry && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center">
              <span className="w-8 h-1 bg-brand-accent mr-3 rounded-full" />
              Featured Story
            </h2>
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto min-h-[300px]">
                    <Image
                      src="/images/news-featured.png"
                      alt={featuredEntry.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                    <div className="flex items-center space-x-3 mb-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${categoryColors[featuredEntry.category]}`}>
                        {categoryLabels[featuredEntry.category]}
                      </span>
                      <span className="text-sm text-text-secondary font-medium">
                        {formatDate(featuredEntry.date)}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl text-text-primary mb-6 font-bold leading-tight">
                      {featuredEntry.title}
                    </h3>
                    <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                      {featuredEntry.summary}
                    </p>
                    <Button variant="primary" size="lg" className="w-fit px-8 font-semibold shadow-lg shadow-brand-primary/20" asChild>
                      <a href={featuredEntry.link}>Read Full Article</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
            <h2 className="text-2xl font-bold text-text-primary">All News</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-white text-text-secondary border border-border hover:bg-gray-50'
                }`}
              >
                All News
              </button>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === key
                      ? 'bg-brand-primary text-white shadow-md'
                      : 'bg-white text-text-secondary border border-border hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEntries.map((entry) => (
            <Card key={entry.id} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${categoryColors[entry.category]}`}>
                      {categoryLabels[entry.category]}
                    </span>
                    <span className="text-xs text-text-secondary font-medium">
                      {formatDate(entry.date)}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-text-primary mb-4 font-bold group-hover:text-brand-primary transition-colors line-clamp-2">
                    {entry.title}
                  </h3>
                  <p className="text-text-secondary mb-6 line-clamp-3 leading-relaxed">
                    {entry.summary}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-bold text-brand-primary hover:bg-transparent hover:text-brand-accent group/btn" asChild>
                    <a href={entry.link} className="flex items-center">
                      Read More
                      <svg className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup (Bonus UX) */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 font-heading">Never Miss an Update</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive the latest banking news and exclusive offers directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent w-full"
            />
            <Button variant="accent" size="lg" className="whitespace-nowrap px-8 font-bold">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
