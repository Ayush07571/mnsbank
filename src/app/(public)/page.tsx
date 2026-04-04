import { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata, SEO_CONFIGS } from '@/lib/page-metadata';
import { ImagesHero } from '@/components/home/ImagesHero';
import { WhatsNew } from '@/components/home/WhatsNew';
import { FeaturedRates } from '@/components/home/FeaturedRates';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = createPageMetadata(SEO_CONFIGS.HOME);

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImagesHero />

      {/* Quick Actions */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-tight relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tighter">
                Quick Banking Services
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
                Access our most popular banking services with a single click.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Open Account',
                desc: 'Start your journey',
                icon: 'M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z',
                icon2: 'M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z',
                href: '/savings-account',
                cta: 'Apply Now',
              },
              {
                title: 'Apply for Loan',
                desc: 'Quick approvals',
                icon: 'M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z',
                href: '/personal-loan',
                cta: 'Apply Now',
              },
              {
                title: 'Net Banking',
                desc: 'Secure access',
                icon: 'M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z',
                href: '/net-banking',
                cta: 'Login',
              },
              {
                title: 'Calculate EMI',
                desc: 'Plan your loans',
                icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z',
                href: '/emi-calculator',
                cta: 'Calculate',
              },
            ].map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.2 + idx * 0.1}
                className="h-full"
              >
                <Card className="group relative overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-surface/50 backdrop-blur-sm border border-brand-primary/10 hover:border-brand-primary/30 hover:-translate-y-2">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d={item.icon} />
                        {item.icon2 && <path d={item.icon2} />}
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl font-black text-text-primary group-hover:text-brand-primary transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-8 font-medium">
                      {item.desc}
                    </p>
                    <Link href={item.href} className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full rounded-full border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all duration-300"
                      >
                        {item.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deposit Rates */}
      <FeaturedRates />

      {/* What's New Section */}
      <WhatsNew />

      {/* Services Overview */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-brand-primary/5 blur-[120px] -translate-y-1/2 -z-10" />

        <div className="container-tight relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tighter">
                Our Banking Services
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
                Comprehensive financial solutions tailored for your ambitious
                goals.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Personal Banking',
                features: [
                  'Savings & Current Accounts',
                  'Personal & Home Loans',
                  'Digital Banking',
                  'Investment Products',
                ],
                delay: 0.1,
              },
              {
                title: 'Business Banking',
                features: [
                  'Current Accounts',
                  'Business Loans',
                  'Trade Finance',
                  'Cash Management',
                ],
                delay: 0.2,
              },
              {
                title: 'Digital Services',
                features: [
                  'Mobile Banking',
                  'UPI & Payments',
                  'Bill Payments',
                  'e-Services',
                ],
                delay: 0.3,
              },
            ].map((service, idx) => (
              <ScrollReveal key={idx} direction="up" delay={service.delay}>
                <Card className="group h-full border-0 shadow-none hover:shadow-2xl transition-all duration-500 rounded-[3rem] bg-surface hover:bg-white overflow-hidden p-2">
                  <CardHeader className="pt-10 pb-6 px-10 text-center">
                    <CardTitle className="font-heading text-2xl font-black text-text-primary group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-12">
                    <ul className="space-y-4">
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center space-x-3 text-text-secondary group-hover:text-text-primary transition-colors"
                        >
                          <div className="w-5 h-5 rounded-full bg-brand-primary/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                            <svg
                              className="w-3 h-3 text-brand-primary group-hover:text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="font-bold text-sm tracking-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="text-center mt-16">
              <Link href="/sitemap">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-12 py-7 rounded-full text-sm font-black uppercase tracking-widest shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all"
                >
                  Explore Ecosystem
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-white blur-[120px] rounded-full rotate-45" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-brand-accent blur-[120px] rounded-full -rotate-45" />
        </div>

        <div className="container-tight relative z-10 text-center">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter leading-tight">
              Start Your Banking <br className="hidden md:block" /> Journey with
              MNS Bank
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-white/80 font-medium leading-relaxed">
              Join thousands of satisfied customers who trust MNS Bank for their
              financial growth and security.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/savings-account">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-12 py-8 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-black/20 hover:scale-105 transition-all bg-white text-brand-primary border-0"
                >
                  Open Account Now
                </Button>
              </Link>
              <Link href="/branch-locator">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-12 py-8 rounded-full text-sm font-black uppercase tracking-widest border-white/30 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all"
                >
                  Visit Branch
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
