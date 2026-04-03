// Demo mode utilities for safe testing and development

export const isDemoMode = () => {
  return process.env.NEXT_PUBLIC_DEMO_MODE === 'true';
};

export const getDemoConfig = () => {
  return {
    bankName: process.env.NEXT_PUBLIC_BANK_NAME || 'MNS Bank Bhopal',
    bankPhone: process.env.NEXT_PUBLIC_BANK_PHONE || '+91-0755-1234567',
    bankEmail: process.env.NEXT_PUBLIC_BANK_EMAIL || 'info@mnsbankbhopal.com',
    isDemo: isDemoMode(),
  };
};

export const showDemoBadge = () => {
  return isDemoMode();
};

export const getDemoMessage = (type: 'form' | 'email' | 'analytics') => {
  const messages = {
    form: 'This is a demo submission. No real data was sent.',
    email: 'Email sent to demo inbox (Mailtrap). No real customer contacted.',
    analytics: 'Analytics tracking disabled in demo mode.',
  };
  return messages[type] || 'Demo mode active.';
};
