'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // ปิด dropdown เมื่อคลิกนอก
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Portfolios', href: '/portfolio' },
        { label: 'Contact', href: '/contact' },
    ];

    // รายการเมนูใน Dropdown Content
    const contentDropdownLinks = [
        { label: 'Facebook', href: '/content/facebook' },
        { label: 'TikTok', href: '/content/tiktok' },
        { label: 'YouTube', href: '/content/youtube' },
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-zinc-200 fixed top-0 left-0 w-full z-50 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-serif">
                <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900"
                    onClick={() => setIsOpen(false)}
                >
                    Woodtechfurnish
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10 items-center text-base font-light">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Dropdown Menu */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-zinc-700 hover:text-zinc-900 transition-colors duration-200 font-light"
                            aria-expanded={isDropdownOpen}
                        >
                            Content
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-zinc-200 z-50">
                                {contentDropdownLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-10 py-3 text-zinc-700 hover:bg-zinc-50"
                                        onClick={() => {
                                            setIsDropdownOpen(false);
                                            setTimeout(() => setIsOpen(false), 100);
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
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
                    {[...navLinks, { label: 'Content', href: '#' }].map((link) =>
                        link.label !== 'Content' ? (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-6 py-4 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            // Mobile Dropdown for Content
                            <div key="mobile-content-dropdown" className="border-b border-zinc-100">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center text-zinc-700 hover:bg-zinc-50"
                                >
                                    Content
                                    <ChevronDown
                                        className={`ml-2 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {isDropdownOpen && (
                                    <div className="bg-white border-t border-zinc-100">
                                        {contentDropdownLinks.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block px-10 py-3 text-zinc-700 hover:bg-zinc-50"
                                                onClick={() => {
                                                    setIsDropdownOpen(false);
                                                    setTimeout(() => setIsOpen(false), 100);
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    )}
                </div>
            )}
        </nav>
    );
}
