'use client';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { ImagesSlider } from '@/components/ui/images-slider';
import { Button } from '@/components/ui/Button';
import { Text3D, Button3D, FloatingIcon3D } from '@/components/ui/3d-elements';
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
    <div className="relative">
      <ImagesSlider
        className="h-[600px]"
        images={images}
        autoplay={true}
        direction="up"
        onSlideChange={handleSlideChange}
      >
        <motion.div
          key={currentSlideIndex} // Key to trigger re-animation on slide change
          initial={{
            opacity: 0,
            y: -80,
            rotateX: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 0.6,
            type: 'spring',
            stiffness: 100,
          }}
          className="z-50 flex flex-col justify-center items-center text-center px-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h1
            className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <Text3D depth={6}>
              <span
                className="text-gray-100 drop-shadow-2xl"
                style={{
                  textShadow:
                    '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0px 2px 0 #000, 0px -2px 0 #000, 2px 0px 0 #000, -2px 0px 0 #000',
                }}
              >
                {currentSlide.title}
              </span>
            </Text3D>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl mb-4"
            initial={{ opacity: 0, y: 20, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gray-200 drop-shadow-lg">
              {currentSlide.subtitle}
            </span>
          </motion.h2>

          <motion.p
            className="text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
          >
            <span className="text-gray-300 drop-shadow-md">
              {currentSlide.description}
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 20, rotateX: 5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Link href={currentSlide.primaryCta.href}>
              <Button3D
                depth={4}
                className="px-8 py-3 text-lg font-semibold bg-brand-accent hover:bg-brand-accent/80 text-white border-0 shadow-lg hover:shadow-xl transition-all"
              >
                {currentSlide.primaryCta.text}
              </Button3D>
            </Link>

            {currentSlide.secondaryCta && (
              <Link href={currentSlide.secondaryCta.href}>
                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-lg font-semibold border-white text-white hover:bg-white/20 hover:text-white transition-all"
                  >
                    {currentSlide.secondaryCta.text}
                  </Button>
                </motion.div>
              </Link>
            )}
          </motion.div>
        </motion.div>
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
