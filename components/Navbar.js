"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteContent } from '@/data/content';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const BrandText = () => {
    const name = siteContent.site.name;
    if (name?.trim().toLowerCase() === 'little otters') {
      return (
        <span
          className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide"
          style={{ textShadow: '0 1px 0 #ffffff, 0 1px 8px rgba(0,0,0,.08), 0 0 1px rgba(0,0,0,.20)' }}
        >
          <span style={{ color: '#dc6755' }}>L</span>
          <span style={{ color: '#edaa52' }}>i</span>
          <span style={{ color: '#edaa52' }}>t</span>
          <span style={{ color: '#eeb3a9' }}>t</span>
          <span style={{ color: '#eeb3a9' }}>l</span>
          <span style={{ color: '#8aa6b2' }}>e</span>
          <span className="text-primary">{' '}</span>
          <span style={{ color: '#8aa6b2' }}>O</span>
          <span style={{ color: '#8aa6b2' }}>t</span>
          <span style={{ color: '#edaa52' }}>t</span>
          <span style={{ color: '#edaa52' }}>e</span>
          <span style={{ color: '#dc6755' }}>r</span>
          <span style={{ color: '#dc6755' }}>s</span>
        </span>
      );
    }
    return <span className="text-2xl md:text-3xl font-extrabold text-primary" style={{ textShadow: '0 1px 0 #ffffff, 0 1px 8px rgba(0,0,0,.08)' }}>{name}</span>;
  };

  return (
    <nav className="bg-[#f5f6f5] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label={siteContent.site.name}>
            {siteContent.site.logo ? (
              <Image
                src={siteContent.site.logo}
                alt=""
                width={120}
                height={40}
                className="h-10 md:h-12 w-auto"
                aria-hidden="true"
                priority
              />
            ) : null}
            <BrandText />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {siteContent.navigation.map((item) => {
                const isActive = pathname === item.href;
                let colorClasses = '';
                if (item.href === '/') {
                  colorClasses = isActive
                    ? 'text-[#dc6755] bg-[#dc6755]/10'
                    : 'text-gray-700 hover:text-[#dc6755] hover:bg-[#dc6755]/10';
                } else if (item.href === '/programs') {
                  colorClasses = isActive
                    ? 'text-[#eeb3a9] bg-[#eeb3a9]/10'
                    : 'text-gray-700 hover:text-[#eeb3a9] hover:bg-[#eeb3a9]/10';
                } else if (item.href === '/about') {
                  colorClasses = isActive
                    ? 'text-[#edaa52] bg-[#edaa52]/10'
                    : 'text-gray-700 hover:text-[#edaa52] hover:bg-[#edaa52]/10';
                } else if (item.href === '/location') {
                  colorClasses = isActive
                    ? 'text-[#8aa6b2] bg-[#8aa6b2]/10'
                    : 'text-gray-700 hover:text-[#8aa6b2] hover:bg-[#8aa6b2]/10';
                } else if (item.href === '/contact') {
                  colorClasses = isActive
                    ? 'text-[#dc6755] bg-[#dc6755]/10'
                    : 'text-gray-700 hover:text-[#dc6755] hover:bg-[#dc6755]/10';
                } else {
                  colorClasses = isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-primary/10';
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${colorClasses}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div id="mobile-menu" className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {siteContent.navigation.map((item) => {
                const isActive = pathname === item.href;
                let colorClasses = '';
                if (item.href === '/') {
                  colorClasses = isActive
                    ? 'text-[#dc6755] bg-[#dc6755]/10'
                    : 'text-gray-700 hover:text-[#dc6755] hover:bg-[#dc6755]/10';
                } else if (item.href === '/programs') {
                  colorClasses = isActive
                    ? 'text-[#eeb3a9] bg-[#eeb3a9]/10'
                    : 'text-gray-700 hover:text-[#eeb3a9] hover:bg-[#eeb3a9]/10';
                } else if (item.href === '/about') {
                  colorClasses = isActive
                    ? 'text-[#edaa52] bg-[#edaa52]/10'
                    : 'text-gray-700 hover:text-[#edaa52] hover:bg-[#edaa52]/10';
                } else if (item.href === '/location') {
                  colorClasses = isActive
                    ? 'text-[#8aa6b2] bg-[#8aa6b2]/10'
                    : 'text-gray-700 hover:text-[#8aa6b2] hover:bg-[#8aa6b2]/10';
                } else if (item.href === '/contact') {
                  colorClasses = isActive
                    ? 'text-[#dc6755] bg-[#dc6755]/10'
                    : 'text-gray-700 hover:text-[#dc6755] hover:bg-[#dc6755]/10';
                } else {
                  colorClasses = isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-primary/10';
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${colorClasses}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}