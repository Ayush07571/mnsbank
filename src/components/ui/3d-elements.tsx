'use client';
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

// 3D Floating Icon Component
export function FloatingIcon3D({
  icon,
  delay = 0,
  duration = 3,
  size = 'md',
}: {
  icon: React.ReactNode;
  delay?: number;
  duration?: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <motion.div
      className={cn('absolute pointer-events-none', sizeClasses[size])}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        y: [0, -30, -60, -30],
        x: [0, 20, -20, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      <div className="w-full h-full bg-brand-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-brand-primary/30 shadow-lg">
        {icon}
      </div>
    </motion.div>
  );
}

// 3D Text Effect Component
export function Text3D({
  children,
  className = '',
  depth = 8,
}: {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}) {
  return (
    <div className={cn('relative', className)}>
      {/* Main text layer */}
      <div className="relative z-10 text-text-primary">{children}</div>
      {/* Shadow layers for 3D effect */}
      {Array.from({ length: depth }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 left-0 text-brand-primary/20"
          style={{
            transform: `translate(${i + 1}px, ${i + 1}px)`,
            zIndex: depth - i,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

// 3D Service Card Component
export function ServiceCard3D({
  title,
  description,
  icon,
  gradient,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        y: -10,
        rotateX: -5,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300 },
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="relative rounded-2xl p-6 shadow-xl overflow-hidden"
        style={{
          background: gradient,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D depth effect */}
        <div className="absolute inset-0 bg-black/10 transform translate-z-[-20px]"></div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {icon}
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
}

// 3D Stats Counter Component
export function StatsCounter3D({
  value,
  label,
  suffix = '',
  delay = 0,
}: {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}) {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
          {displayValue.toLocaleString()}
          {suffix}
        </div>
        <div className="absolute inset-0 text-brand-primary/20 blur-xl transform translate-z-[-10px]">
          {displayValue.toLocaleString()}
          {suffix}
        </div>
      </div>
      <div className="text-text-secondary text-lg">{label}</div>
    </motion.div>
  );
}

// 3D Parallax Background Component
export function ParallaxBackground3D() {
  const { scrollYProgress } = useScroll();

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]));
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]));
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]));
  const rotate1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]));
  const rotate2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -360]));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Layer 1 */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl"
      />

      {/* Layer 2 */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-40 right-20 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl"
      />

      {/* Layer 3 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-40 left-1/4 w-64 h-64 bg-brand-primary/3 rounded-full blur-3xl"
      />

      {/* Floating elements */}
      <FloatingIcon3D
        icon={<span className="text-brand-primary text-2xl">💰</span>}
        delay={0}
        duration={4}
        size="lg"
      />
      <FloatingIcon3D
        icon={<span className="text-brand-accent text-xl">🏦</span>}
        delay={1}
        duration={3}
        size="md"
      />
      <FloatingIcon3D
        icon={<span className="text-brand-primary text-2xl">💳</span>}
        delay={2}
        duration={5}
        size="lg"
      />
    </div>
  );
}

// 3D Button Component
export function Button3D({
  children,
  className = '',
  depth = 4,
}: {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}) {
  return (
    <motion.button
      className={cn(
        'relative px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold transition-all',
        className
      )}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Shadow layers */}
      {Array.from({ length: depth }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-black/20 rounded-lg"
          style={{
            transform: `translate(${i + 1}px, ${i + 1}px)`,
            zIndex: -i - 1,
          }}
        />
      ))}
      {children}
    </motion.button>
  );
}
