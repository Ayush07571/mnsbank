export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface HeaderProps {
  className?: string;
}

export interface Language {
  code: 'en' | 'hi';
  name: string;
  nativeName: string;
}

export interface MobileMenuState {
  isOpen: boolean;
  activeTab: 'personal' | 'business';
}
