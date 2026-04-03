'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface CarouselSlide {
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

const carouselSlides: CarouselSlide[] = [
  {
    id: '1',
    title: 'Welcome to MNS Bank',
    subtitle: 'Your Trusted Banking Partner',
    description: 'Experience banking excellence with our comprehensive range of financial products and services designed for your needs.',
    image: '/images/hero-banking.png',
    primaryCta: {
      text: 'Open Account',
      href: '/savings-account'
    },
    secondaryCta: {
      text: 'Explore Products',
      href: '/interest-rates'
    }
  },
  {
    id: '2',
    title: 'Home Loans at Lowest Rates',
    subtitle: 'Dream Home, Easy Reality',
    description: 'Get home loans starting from 11.5% p.a. with flexible tenure options and quick approval process.',
    image: '/images/hero-home-loan.png',
    primaryCta: {
      text: 'Apply Now',
      href: '/home-loan'
    },
    secondaryCta: {
      text: 'Calculate EMI',
      href: '/emi-calculator'
    }
  },
  {
    id: '3',
    title: 'Business Banking Solutions',
    subtitle: 'Grow Your Business with Us',
    description: 'Comprehensive banking solutions for businesses including current accounts, loans, and digital banking services.',
    image: '/images/hero-business.png',
    primaryCta: {
      text: 'Business Accounts',
      href: '/current-account'
    },
    secondaryCta: {
      text: 'Business Loans',
      href: '/working-capital-loan'
    }
  },
  {
    id: '4',
    title: 'Digital Banking Made Simple',
    subtitle: 'Bank Anytime, Anywhere',
    description: 'Experience seamless digital banking with our mobile app and internet banking services available 24/7.',
    image: '/images/hero-digital.png',
    primaryCta: {
      text: 'Net Banking',
      href: '/net-banking'
    },
    secondaryCta: {
      text: 'Download App',
      href: '#'
    }
  }
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlaying(false);
  };

  const currentSlideData = carouselSlides[currentSlide];

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-r from-brand-primary to-brand-accent">
      {/* Slide Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src={currentSlideData.image} 
          alt="" 
          fill
          className="object-cover transition-opacity duration-1000"
          aria-hidden="true"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/40 to-transparent" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4 max-w-6xl h-full">
          <div className="flex items-center h-full max-w-2xl">
            <div className="text-white">
              <h1 className="font-heading text-4xl md:text-6xl mb-4 animate-fade-in">
                {currentSlideData.title}
              </h1>
              <h2 className="font-heading text-2xl md:text-3xl mb-6 text-white/90 animate-fade-in-delay">
                {currentSlideData.subtitle}
              </h2>
              <p className="text-xl mb-8 text-white/80 animate-fade-in-delay-2">
                {currentSlideData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
                <Button variant="secondary" size="lg" className="px-8" asChild>
                  <a href={currentSlideData.primaryCta.href}>
                    {currentSlideData.primaryCta.text}
                  </a>
                </Button>
                {currentSlideData.secondaryCta && (
                  <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                    <a href={currentSlideData.secondaryCta.href}>
                      {currentSlideData.secondaryCta.text}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 text-white hover:bg-white/30 transition-colors"
        aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
      >
        {isAutoPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay-2 {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay-3 {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.6s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 0.6s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in-delay-3 0.6s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
}
