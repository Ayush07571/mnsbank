'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface Branch {
  name: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
}

const branches: Branch[] = [
  {
    name: 'Head Office — Bairagarh',
    phone: '+917554000111',
    whatsapp: '917554000111',
    address: 'Bairagarh, Bhopal, Madhya Pradesh 462030',
    hours: 'Mon–Sat: 10:00 AM – 4:00 PM',
  },
  {
    name: 'TT Nagar Branch',
    phone: '+917554000222',
    whatsapp: '917554000222',
    address: 'TT Nagar, Bhopal, Madhya Pradesh 462003',
    hours: 'Mon–Sat: 10:00 AM – 4:00 PM',
  },
  {
    name: 'Karond Branch',
    phone: '+917554000333',
    whatsapp: '917554000333',
    address: 'Karond, Bhopal, Madhya Pradesh 462038',
    hours: 'Mon–Sat: 10:00 AM – 4:00 PM',
  },
];

interface ContactWidgetProps {
  productName?: string;
  compact?: boolean;
  className?: string;
}

export default function ContactWidget({ productName, compact = false, className }: ContactWidgetProps) {
  const [selectedBranch, setSelectedBranch] = useState(0);
  const branch = branches[selectedBranch];

  const whatsappMessage = productName
    ? `Hello, I would like to know more about ${productName}. Please contact me.`
    : 'Hello, I need assistance with banking services. Please contact me.';

  const whatsappUrl = `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  if (compact) {
    return (
      <div className={cn('flex flex-col sm:flex-row gap-3', className)}>
        <a href={`tel:${branch.phone}`} className="flex-1">
          <Button variant="primary" size="lg" className="w-full gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Branch
          </Button>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="lg" className="w-full gap-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 2C6.478 2 2 6.478 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34C8.46 21.5 10.19 22 12 22c5.522 0 10-4.478 10-10S17.521 2 11.999 2zm.001 18c-1.617 0-3.13-.44-4.43-1.2l-.32-.19-3.02.8.81-2.96-.2-.34A7.969 7.969 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            WhatsApp Us
          </Button>
        </a>
      </div>
    );
  }

  return (
    <div className={cn('space-y-4', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold text-text-primary flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            Contact Us Instantly
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Branch Selector */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wide">
              Select Branch
            </label>
            <div className="flex flex-wrap gap-2">
              {branches.map((b, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedBranch(i)}
                  className={cn(
                    'text-xs px-3 py-1.5 rounded-full border transition-colors',
                    selectedBranch === i
                      ? 'bg-brand-primary text-white border-brand-primary'
                      : 'border-border text-text-secondary hover:border-brand-primary hover:text-brand-primary'
                  )}
                >
                  {i === 0 ? 'Head Office' : i === 1 ? 'TT Nagar' : 'Karond'}
                </button>
              ))}
            </div>
          </div>

          {/* Branch info */}
          <div className="bg-surface rounded-card p-3 mb-4 text-sm text-text-secondary space-y-1">
            <p className="font-medium text-text-primary">{branch.name}</p>
            <p>{branch.address}</p>
            <p className="text-xs text-brand-primary">{branch.hours}</p>
          </div>

          {/* Action buttons */}
          <div className="space-y-2">
            <a href={`tel:${branch.phone}`} className="block">
              <Button variant="primary" size="lg" className="w-full gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now ({branch.phone.replace('+91', '0')})
              </Button>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" size="lg" className="w-full gap-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 2C6.478 2 2 6.478 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34C8.46 21.5 10.19 22 12 22c5.522 0 10-4.478 10-10S17.521 2 11.999 2zm.001 18c-1.617 0-3.13-.44-4.43-1.2l-.32-.19-3.02.8.81-2.96-.2-.34A7.969 7.969 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
                WhatsApp {productName ? `about ${productName}` : 'Us'}
              </Button>
            </a>

            <a href="/branch-locator" className="block">
              <Button variant="outline" size="sm" className="w-full gap-2 text-text-secondary border-border hover:border-brand-primary hover:text-brand-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find Nearest Branch on Map
              </Button>
            </a>
          </div>

          <p className="text-xs text-text-secondary text-center mt-3">
            Our team typically responds within minutes during branch hours.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
