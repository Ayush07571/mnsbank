'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CreditCard from '@/components/ui/credit-card-1';
import {
  ServiceCard3D,
  StatsCounter3D,
  ParallaxBackground3D,
} from '@/components/ui/3d-elements';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Card3DShowcase() {
  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* 3D Parallax Background */}
      <ParallaxBackground3D />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">
            Premium Banking Cards
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Experience the future of banking with our premium credit and debit
            cards featuring advanced security and exclusive benefits
          </p>
        </motion.div>

        {/* Premium Credit Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="transform scale-75">
              <CreditCard
                cardNumber="4532 1234 5678 8765"
                cardHolder="JOHN DOE"
                expiryDate="12/25"
                cvv="123"
                variant="gradient"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="transform scale-75">
              <CreditCard
                cardNumber="5412 9876 5432 3456"
                cardHolder="JANE SMITH"
                expiryDate="09/24"
                cvv="456"
                variant="dark"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="transform scale-75">
              <CreditCard
                cardNumber="3782 1111 2222 2345"
                cardHolder="PREMIUM USER"
                expiryDate="06/26"
                cvv="789"
                variant="glass"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <StatsCounter3D
            value={1000000}
            label="Happy Customers"
            suffix="+"
            delay={0}
          />
          <StatsCounter3D value={50} label="Branches Nationwide" delay={0.2} />
          <StatsCounter3D
            value={24}
            label="Hour Support"
            suffix="/7"
            delay={0.4}
          />
          <StatsCounter3D
            value={99}
            label="Security Score"
            suffix="%"
            delay={0.6}
          />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <ServiceCard3D
            title="Digital Banking"
            description="Access your accounts anytime, anywhere with our secure mobile and online banking platform"
            icon={<span className="text-2xl">📱</span>}
            gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            delay={0}
          />
          <ServiceCard3D
            title="Instant Loans"
            description="Quick approval process with competitive interest rates for all your financial needs"
            icon={<span className="text-2xl">💸</span>}
            gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            delay={0.2}
          />
          <ServiceCard3D
            title="Wealth Management"
            description="Expert financial advice and investment solutions to grow your wealth securely"
            icon={<span className="text-2xl">📈</span>}
            gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            delay={0.4}
          />
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-heading text-3xl text-text-primary mb-4">
            Ready to Experience Premium Banking?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Apply for your premium credit or debit card today and unlock
            exclusive benefits, rewards, and world-class banking services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/credit-card">
              <Button variant="primary" size="lg" className="px-8">
                Apply for Credit Card
              </Button>
            </Link>
            <Link href="/debit-card">
              <Button variant="outline" size="lg" className="px-8">
                Get Debit Card
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
