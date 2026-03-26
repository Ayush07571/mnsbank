'use client';

import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface EscalationLevel {
  level: number;
  title: string;
  authority: string;
  contact: {
    email?: string;
    phone?: string;
    address?: string;
  };
  timeline: string;
  description: string;
  whenToEscalate: string[];
}

interface EscalationMatrixProps {
  className?: string;
  compact?: boolean;
}

export function EscalationMatrix({ className, compact = false }: EscalationMatrixProps) {
  const { t } = useTranslation('compliance');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const escalationLevels: EscalationLevel[] = [
    {
      level: 1,
      title: 'Branch Manager',
      authority: 'Branch Level',
      contact: {
        email: 'branch.manager@mnsbankbhopal.com',
        phone: '0755-1234567',
        address: 'Head Office - Bairagarh, Bhopal',
      },
      timeline: 'Within 7 working days',
      description: 'First point of contact for all customer grievances. Branch Manager handles most routine complaints and service issues.',
      whenToEscalate: [
        'If no response within 7 working days',
        'If unsatisfied with resolution',
        'If grievance involves serious misconduct',
      ],
    },
    {
      level: 2,
      title: 'Regional Manager',
      authority: 'Regional Level',
      contact: {
        email: 'regional.manager@mnsbankbhopal.com',
        phone: '0755-2345678',
        address: 'Regional Office, TT Nagar, Bhopal',
      },
      timeline: 'Within 15 working days',
      description: 'Escalates unresolved branch-level issues and handles complex complaints requiring regional oversight.',
      whenToEscalate: [
        'If Branch Manager fails to resolve',
        'If grievance affects multiple branches',
        'If involves policy interpretation issues',
      ],
    },
    {
      level: 3,
      title: 'Chief Operating Officer',
      authority: 'Head Office Level',
      contact: {
        email: 'coo@mnsbankbhopal.com',
        phone: '0755-3456789',
        address: 'Corporate Office, Bhopal',
      },
      timeline: 'Within 30 working days',
      description: 'Handles high-level operational issues and systemic problems affecting bank operations.',
      whenToEscalate: [
        'If Regional Manager resolution unsatisfactory',
        'If grievance involves bank-wide policies',
        'If requires operational changes',
      ],
    },
    {
      level: 4,
      title: 'Banking Ombudsman',
      authority: 'RBI Appointed',
      contact: {
        email: 'ombudsman@rbi.org.in',
        phone: '1800-103-0006',
        address: 'Reserve Bank of India, Bhopal',
      },
      timeline: 'Within 30 working days',
      description: 'External dispute resolution mechanism appointed by RBI for impartial grievance redressal.',
      whenToEscalate: [
        'If bank fails to resolve within 30 days',
        'If unsatisfied with bank\'s final response',
        'If grievance involves regulatory violations',
      ],
    },
  ];

  const formatTimeline = (timeline: string) => {
    return timeline;
  };

  if (compact) {
    return (
      <div className={cn('space-y-4', className)}>
        <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
          {t('grievance.escalation.title', 'Grievance Escalation Matrix')}
        </h3>
        <div className="space-y-3">
          {escalationLevels.map((level) => (
            <div
              key={level.level}
              className="bg-surface border border-border rounded-lg p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {level.level}
                    </span>
                    <h4 className="font-semibold text-text-primary">{level.title}</h4>
                    <span className="text-xs text-text-secondary bg-brand-accent/10 px-2 py-1 rounded">
                      {level.authority}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">{level.description}</p>
                  <div className="text-xs text-text-secondary space-y-1">
                    <p><strong>Contact:</strong> {level.contact.phone}</p>
                    <p><strong>Timeline:</strong> {level.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* Header */}
      <div className="text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
          {t('grievance.escalation.title', 'Grievance Escalation Matrix')}
        </h2>
        <p className="text-text-secondary max-w-3xl mx-auto">
          {t('grievance.escalation.subtitle', 'Step-by-step process for escalating grievances when not resolved at the current level')}
        </p>
      </div>

      {/* Escalation Levels */}
      <div className="grid md:grid-cols-2 gap-6">
        {escalationLevels.map((level) => (
          <Card
            key={level.level}
            className={cn(
              'cursor-pointer transition-all duration-200 hover:shadow-lg',
              selectedLevel === level.level && 'ring-2 ring-brand-accent'
            )}
            onClick={() => setSelectedLevel(selectedLevel === level.level ? null : level.level)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center text-white font-bold',
                    level.level === 1 ? 'bg-success' :
                    level.level === 2 ? 'bg-warning' :
                    level.level === 3 ? 'bg-brand-primary' :
                    'bg-error'
                  )}>
                    {level.level}
                  </div>
                  <div>
                    <CardTitle className="text-text-primary">{level.title}</CardTitle>
                    <p className="text-sm text-text-secondary">{level.authority}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-brand-primary">{level.timeline}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-sm mb-4">{level.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-text-primary text-sm mb-2">
                    {t('grievance.escalation.contact', 'Contact Information')}
                  </h4>
                  <div className="space-y-1 text-sm">
                    {level.contact.email && (
                      <p className="text-text-secondary">
                        <strong>{t('grievance.escalation.email', 'Email')}:</strong> {level.contact.email}
                      </p>
                    )}
                    {level.contact.phone && (
                      <p className="text-text-secondary">
                        <strong>{t('grievance.escalation.phone', 'Phone')}:</strong> {level.contact.phone}
                      </p>
                    )}
                    {level.contact.address && (
                      <p className="text-text-secondary">
                        <strong>{t('grievance.escalation.address', 'Address')}:</strong> {level.contact.address}
                      </p>
                    )}
                  </div>
                </div>

                {selectedLevel === level.level && (
                  <div className="border-t border-border pt-3">
                    <h4 className="font-medium text-text-primary text-sm mb-2">
                      {t('grievance.escalation.whenToEscalate', 'When to Escalate')}
                    </h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {level.whenToEscalate.map((reason, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-brand-accent mt-1">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLevel(selectedLevel === level.level ? null : level.level);
                  }}
                >
                  {selectedLevel === level.level 
                    ? t('grievance.escalation.hideDetails', 'Hide Details')
                    : t('grievance.escalation.showDetails', 'Show Details')
                  }
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Process Flow */}
      <Card>
        <CardHeader>
          <CardTitle className="text-text-primary">
            {t('grievance.escalation.processFlow', 'Process Flow')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {escalationLevels.map((level, index) => (
              <div key={level.level} className="flex items-center space-x-4">
                <div className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0',
                  level.level === 1 ? 'bg-success' :
                  level.level === 2 ? 'bg-warning' :
                  level.level === 3 ? 'bg-brand-primary' :
                  'bg-error'
                )}>
                  {level.level}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-text-primary">{level.title}</h4>
                    <span className="text-sm text-text-secondary">({level.timeline})</span>
                  </div>
                  <p className="text-sm text-text-secondary">{level.description}</p>
                </div>
                {index < escalationLevels.length - 1 && (
                  <svg className="w-6 h-6 text-text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-text-primary">
            {t('grievance.escalation.importantNotes', 'Important Notes')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-text-secondary">
            <div className="flex items-start space-x-2">
              <span className="text-brand-accent mt-1">•</span>
              <span>
                {t('grievance.escalation.note1', 'Always maintain a record of your grievance reference number and all communications')}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-brand-accent mt-1">•</span>
              <span>
                {t('grievance.escalation.note2', 'Escalate only if the current level fails to resolve within the specified timeline')}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-brand-accent mt-1">•</span>
              <span>
                {t('grievance.escalation.note3', 'Banking Ombudsman is the final authority for dispute resolution')}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-brand-accent mt-1">•</span>
              <span>
                {t('grievance.escalation.note4', 'All services are free of charge as per RBI guidelines')}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
