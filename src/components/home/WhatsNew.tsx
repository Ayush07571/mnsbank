'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { newsEntries, categoryLabels } from '@/data/news';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function WhatsNew() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState(3);

  const filteredEntries =
    selectedCategory === 'all'
      ? newsEntries
      : newsEntries.filter(entry => entry.category === selectedCategory);

  const displayedEntries = filteredEntries.slice(0, displayCount);
  const hasMore = filteredEntries.length > displayCount;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const featuredEntry = newsEntries.find(entry => entry.featured);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-y-1/2" />

      <div className="container-tight relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tighter">
              What&apos;s New at MNS Bank
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
              The latest stories, updates, and innovations from our banking
              community.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured News */}
        {featuredEntry && (
          <ScrollReveal direction="up" delay={0.2}>
            <Card className="mb-16 overflow-hidden rounded-[3rem] border-0 shadow-soft hover:shadow-2xl transition-all duration-700 bg-surface group">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[450px]">
                  <div className="p-10 md:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-brand-primary text-white shadow-lg shadow-brand-primary/20">
                        Featured
                      </span>
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white border border-black/5 shadow-sm`}
                      >
                        {categoryLabels[featuredEntry.category]}
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl md:text-4xl text-text-primary mb-6 font-black leading-tight tracking-tighter group-hover:text-brand-primary transition-colors">
                      {featuredEntry.title}
                    </h3>
                    <p className="text-lg text-text-secondary mb-10 leading-relaxed font-medium line-clamp-3">
                      {featuredEntry.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-black/5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                        <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                          {formatDate(featuredEntry.date)}
                        </span>
                      </div>
                      <Link href={featuredEntry.link}>
                        <Button
                          variant="outline"
                          className="rounded-full px-8 py-6 font-black uppercase tracking-widest text-[11px] hover:bg-brand-primary hover:text-white transition-all"
                        >
                          Read Case Study
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative overflow-hidden min-h-[300px]">
                    <Image
                      src="/images/news-featured.png"
                      alt="Featured News"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        )}

        {/* Category Filter */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                  : 'bg-surface text-text-secondary border border-border border-black/5 hover:bg-white'
              }`}
            >
              All News
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                    : 'bg-surface text-text-secondary border border-black/5 hover:bg-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedEntries.map((entry, idx) => (
            <ScrollReveal key={entry.id} direction="up" delay={0.1 + idx * 0.1}>
              <Card className="h-full border-0 shadow-soft hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-surface group overflow-hidden hover:-translate-y-2">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-black/5">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-white border border-black/5 shadow-sm`}
                    >
                      {categoryLabels[entry.category]}
                    </span>
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                      {formatDate(entry.date)}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-black text-text-primary mb-6 leading-tight group-hover:text-brand-primary transition-colors">
                    {entry.title}
                  </h3>
                  <p className="text-text-secondary mb-10 leading-relaxed font-medium line-clamp-3">
                    {entry.summary}
                  </p>
                  <div className="mt-auto">
                    <Link href={entry.link} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full rounded-full py-6 font-black uppercase tracking-widest text-[11px] group-hover:bg-brand-primary group-hover:text-white transition-all"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-12 py-7 font-black uppercase tracking-widest text-[12px] border-black/10 hover:border-brand-primary transition-colors"
                onClick={() => setDisplayCount(prev => prev + 3)}
              >
                Load More News
              </Button>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/news"
              className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary hover:text-brand-accent transition-colors"
            >
              Explore News Archive →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
