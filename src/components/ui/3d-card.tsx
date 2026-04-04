'use client';
import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Card3DProps {
  cardType: 'credit' | 'debit';
  bankName: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cardColor: string;
  logo?: string;
  className?: string;
}

export function Card3D({
  cardType,
  bankName,
  cardNumber,
  cardHolder,
  expiryDate,
  cardColor,
  logo,
  className,
}: Card3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]));
  const scale = useSpring(useTransform(mouseX, [-300, 300], [1, 1.05]));

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={cn('perspective-1000', className)}>
      <motion.div
        className="relative w-80 h-48 cursor-pointer preserve-3d transition-transform duration-700"
        style={{
          rotateX: isFlipped ? 180 : rotateX,
          rotateY: rotateY,
          scale: scale,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 rounded-2xl p-6 backface-hidden shadow-2xl"
          style={{
            backgroundColor: cardColor,
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Card Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="text-white">
              <div className="text-xs opacity-80 mb-1">
                {cardType.toUpperCase()}
              </div>
              <div className="font-bold text-lg">{bankName}</div>
            </div>
            {logo && (
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">MNS</span>
              </div>
            )}
          </div>

          {/* Chip */}
          <div className="w-12 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg mb-6 shadow-lg"></div>

          {/* Card Number */}
          <div className="text-white font-mono text-xl tracking-wider mb-6">
            {cardNumber}
          </div>

          {/* Card Footer */}
          <div className="flex justify-between items-end">
            <div className="text-white">
              <div className="text-xs opacity-80 mb-1">CARD HOLDER</div>
              <div className="font-semibold text-sm">{cardHolder}</div>
            </div>
            <div className="text-white text-right">
              <div className="text-xs opacity-80 mb-1">EXPIRES</div>
              <div className="font-semibold text-sm">{expiryDate}</div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 rounded-2xl p-6 shadow-2xl"
          style={{
            backgroundColor: cardColor,
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Magnetic Strip */}
          <div className="w-full h-12 bg-black opacity-80 rounded mb-4"></div>

          {/* CVV */}
          <div className="bg-white rounded-lg p-2 w-16 h-10 flex items-center justify-center mb-4 ml-auto">
            <span className="font-mono text-sm text-gray-800">123</span>
          </div>

          {/* Signature Area */}
          <div className="bg-white bg-opacity-20 rounded h-12 mb-4"></div>

          {/* Bank Info */}
          <div className="text-white text-xs opacity-80 text-center">
            <div>For customer service call: 1800-123-4567</div>
            <div className="mt-1">www.mnsbankbhopal.com</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// 3D Card Stack Component
export function Card3DStack() {
  const cards = [
    {
      cardType: 'credit' as const,
      bankName: 'MNS Bank',
      cardNumber: '4532 •••• •••• 8765',
      cardHolder: 'JOHN DOE',
      expiryDate: '12/25',
      cardColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      cardType: 'debit' as const,
      bankName: 'MNS Bank',
      cardNumber: '5412 •••• •••• 3456',
      cardHolder: 'JOHN DOE',
      expiryDate: '09/24',
      cardColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      cardType: 'credit' as const,
      bankName: 'MNS Bank',
      cardNumber: '3782 •••• •••• 2345',
      cardHolder: 'JOHN DOE',
      expiryDate: '06/26',
      cardColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-[400px]">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: index * 20 - 20,
            y: index * 15,
            rotateZ: index * 5 - 10,
            scale: 1 - index * 0.1,
            opacity: 1 - index * 0.2,
          }}
          whileHover={{
            x: index * 30 - 30,
            y: index * 20 - 10,
            rotateZ: index * 8 - 15,
            scale: 1.05 - index * 0.05,
            transition: { type: 'spring', stiffness: 300, damping: 30 },
          }}
        >
          <Card3D {...card} />
        </motion.div>
      ))}
    </div>
  );
}

// Floating 3D Card Component
export function FloatingCard3D({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="fixed top-20 right-10 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      <Card3D
        cardType="credit"
        bankName="MNS Bank"
        cardNumber="4532 •••• •••• 8765"
        cardHolder="YOUR NAME"
        expiryDate="12/25"
        cardColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        className="transform hover:scale-110 transition-transform"
      />
    </motion.div>
  );
}
