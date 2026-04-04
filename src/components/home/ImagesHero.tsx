'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ImagesSlider } from '@/components/ui/images-slider';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Welcome to MNS Bank',
    subtitle: 'Your Trusted Banking Partner',
    description:
      'Experience banking excellence with our comprehensive range of financial products and services designed for your needs.',
    image: '/images/hero-banking.png',
    primaryCta: {
      text: 'Open Account',
      href: '/savings-account',
    },
    secondaryCta: {
      text: 'Explore Products',
      href: '/interest-rates',
    },
  },
  {
    id: '2',
    title: 'Home Loans at Lowest Rates',
    subtitle: 'Dream Home, Easy Reality',
    description:
      'Get home loans starting from 11.5% p.a. with flexible tenure options and quick approval process.',
    image: '/images/hero-home-loan.png',
    primaryCta: {
      text: 'Apply Now',
      href: '/home-loan',
    },
    secondaryCta: {
      text: 'Calculate EMI',
      href: '/emi-calculator',
    },
  },
  {
    id: '3',
    title: 'Business Banking Solutions',
    subtitle: 'Grow Your Business with Us',
    description:
      'Comprehensive banking solutions for businesses including current accounts, loans, and digital banking services.',
    image: '/images/hero-business.png',
    primaryCta: {
      text: 'Business Accounts',
      href: '/current-account',
    },
    secondaryCta: {
      text: 'Business Loans',
      href: '/working-capital-loan',
    },
  },
  {
    id: '4',
    title: 'Digital Banking Made Simple',
    subtitle: 'Bank Anytime, Anywhere',
    description:
      'Experience seamless digital banking with our mobile app and internet banking services available 24/7.',
    image: '/images/hero-digital.png',
    primaryCta: {
      text: 'Net Banking',
      href: '/net-banking',
    },
    secondaryCta: {
      text: 'Download App',
      href: '#',
    },
  },
];

export function ImagesHero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const images = heroSlides.map(slide => slide.image);
  const currentSlide = heroSlides[currentSlideIndex];

  // Sync slide index with ImagesSlider
  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      <ImagesSlider
        className="h-[650px] md:h-[800px]"
        images={images}
        autoplay={true}
        direction="up"
        onSlideChange={handleSlideChange}
      >
        <div className="z-50 container mx-auto px-4 flex flex-col items-start justify-center h-full">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass p-8 md:p-14 rounded-[3rem] max-w-2xl text-left relative overflow-hidden border-white/20 bg-white/5 backdrop-blur-md"
          >
            {/* Subtle light streak animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 mb-6"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-accent">
                {currentSlide.subtitle}
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tighter text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {currentSlide.title}
            </motion.h1>

            <motion.p
              className="text-lg text-white/90 mb-10 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {currentSlide.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href={currentSlide.primaryCta.href}>
                <Button
                  size="lg"
                  className="px-10 py-7 rounded-full text-base font-black uppercase tracking-widest bg-brand-accent hover:bg-brand-accent/90 text-white shadow-xl shadow-brand-accent/20 border-0 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {currentSlide.primaryCta.text}
                </Button>
              </Link>

              {currentSlide.secondaryCta && (
                <Link href={currentSlide.secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-10 py-7 rounded-full text-base font-black uppercase tracking-widest border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-md transition-all duration-300 active:scale-95"
                  >
                    {currentSlide.secondaryCta.text}
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </ImagesSlider>

      {/* Dots positioned outside the ImagesSlider */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
      >
        <motion.div
          className="w-2 h-2 bg-gray-300/80 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-300/80 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-300/80 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
