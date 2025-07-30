'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// ประเภทของลิงก์เมนูหลัก
type NavLink = {
  label: string;
  href?: string;
  dropdown?: boolean;
  children?: { label: string; href: string }[];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: 'HOME', href: '/' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'COMPANYPROFILE', href: '/company-profile' },
    {
      label: 'CONTENT',
      dropdown: true,
      children: [
        { label: 'FACEBOOK', href: '/facebook' },
        { label: 'TIKTOK', href: '/tiktok' },
        { label: 'YOUTUBE', href: '/youtube' },
      ],
    },
    { label: 'SERVICES', href: '/services' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-zinc-200 fixed top-0 left-0 w-full z-50 shadow-sm transition-all">
      <div className="w-full px-10 py-4 flex justify-between items-center font-serif">
        <Link
          href="/"
          className="flex items-center space-x-10 text-2xl md:text-2xl font-bold tracking-tight text-zinc-900 mr-auto"
          onClick={() => {
            setIsOpen(false);
            setDropdownOpen(false);
          }}
        >
          <img
            src="/images/logo-woodtech-02.jpg"
            alt="Logo"
            width={80}
            height={40}
          />
          <span>WOOD TECHFUINUSH</span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center text-base font-light relative">
          {navLinks.map((link) =>
            link.dropdown && link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center text-zinc-700 hover:text-zinc-900 transition-colors duration-200"
                >
                  {link.label}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-zinc-200 rounded-md shadow-lg z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
                        onClick={() => {
                          setIsOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="text-zinc-700 hover:text-zinc-900 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="text-zinc-700 hover:text-zinc-900 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 shadow-sm font-serif transition-all">
          {navLinks.map((link) =>
            link.dropdown && link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex justify-between items-center w-full px-6 py-4 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 transition"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdownOpen &&
                  link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block pl-10 pr-6 py-3 text-zinc-600 border-b border-zinc-100 hover:bg-zinc-50 text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="block px-6 py-4 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
