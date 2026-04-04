'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  Smartphone,
  Lock,
  Info,
  ExternalLink,
} from 'lucide-react';

export default function CyberAwarenessPage() {
  const securityTips = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Never Share Credentials',
      description:
        'MNS Bank will NEVER ask for your PIN, OTP, Password, or CVV over phone, email, or SMS.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'UPI Safety',
      description:
        'You only need to enter your UPI PIN to SEND money, never to RECEIVE money.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Click with Caution',
      description:
        'Do not click on suspicious links in SMS or emails. Always verify the source before providing any information.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Browsing',
      description:
        'Ensure the website URL starts with https:// and check for the padlock icon in your browser.',
    },
  ];

  const commonScams = [
    {
      title: 'Phishing & Smishing',
      content:
        'Fraudulent emails or SMS messages designed to trick you into revealing sensitive information by clicking on malicious links.',
    },
    {
      title: 'Vishing (Voice Phishing)',
      content:
        'Cybercriminals calling you pretending to be bank officials to gain access to your OTP or personal details.',
    },
    {
      title: 'Screen Sharing Scams',
      content:
        'Fraudsters asking you to download screen-sharing apps (like AnyDesk or TeamViewer) to gain remote control of your device.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-primary text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="container-tight relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-brand-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Cyber Security & Fraud Awareness
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your security is our priority. Stay informed and protect your
              finances from digital fraud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-8 bg-red-50 border-y border-red-100">
        <div className="container-tight flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-red-900 mb-1">STAY ALERT!</h2>
            <p className="text-red-700">
              MNS Bank or its employees will{' '}
              <span className="font-bold underline">NEVER</span> ask for your
              PIN, OTP, Password, or personal details through calls, SMS, or
              emails.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Tips Grid */}
      <section className="py-20">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Golden Rules for Digital Safety
            </h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Scams Section */}
      <section className="py-20 bg-brand-primary/5">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Beware of Common Scams
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Cybercriminals use sophisticated techniques to gain access to
                your banking information. Understanding these methods is the
                first step towards protection.
              </p>

              <div className="space-y-6">
                {commonScams.map((scam, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center text-xs font-bold mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {scam.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {scam.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-brand-primary" />
                <h3 className="text-xl font-bold text-gray-900">
                  What to do if Scammed?
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">
                    Immediately report the transaction to MNS Bank via our Nodal
                    Officer or nearest branch.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">
                    Call the National Cyber Crime Helpline number{' '}
                    <span className="font-bold">1930</span> instantly.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">
                    Lodge a formal complaint on the National Cyber Crime
                    Reporting Portal at{' '}
                    <span className="font-bold underline">
                      cybercrime.gov.in
                    </span>
                    .
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">
                    Block your debit cards and change your Net Banking/Mobile
                    Banking passwords immediately.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="container-tight text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">
            Important Resources
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            <a
              href="https://www.rbi.org.in/commonman/English/Scripts/AgainstFraud.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 border border-gray-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center gap-2"
            >
              RBI - RBISay <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 border border-gray-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center gap-2"
            >
              Cyber Crime Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/grievance-redressal"
              className="px-6 py-4 border border-gray-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center gap-2"
            >
              Grievance Redressal <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
