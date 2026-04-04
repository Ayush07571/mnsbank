import React from 'react';
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Users,
  Building,
  Briefcase,
  CreditCard,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-32 pb-12 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
          <div className="group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Brain className="h-6 w-6" />
              </div>
              <span className="ml-3 text-xl font-bold tracking-tight bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
                MNS Bank
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Your trusted banking partner providing comprehensive financial
              solutions for individuals and businesses with cutting-edge
              technology.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: MessageCircle, href: '#' },
                { icon: Users, href: '#' },
                { icon: Building, href: '#' },
                { icon: Briefcase, href: '#' },
                { icon: CreditCard, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/90 border border-black/10 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-brand-primary hover:to-brand-accent hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                'Savings Accounts',
                'Home Loans',
                'Personal Loans',
                'Business Banking',
                'Digital Banking',
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                'About Us',
                'Board of Directors',
                'Branch Locator',
                'Careers',
                'Contact Us',
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-600 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                Bhopal, Madhya Pradesh
              </li>
              <li>
                <a
                  href="mailto:info@mnsbankbhopal.com"
                  className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group"
                >
                  <Mail className="w-5 h-5 mr-2 text-gray-400" />
                  info@mnsbankbhopal.com
                </a>
              </li>
              <li>
                <a
                  href="tel:18001234567"
                  className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group"
                >
                  <Phone className="w-5 h-5 mr-2 text-gray-400" />
                  1800-123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-black/10 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} MNS Bank Bhopal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
