'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [  
        { label: 'Home', href: '/' },
        { label: 'Portfolios', href: '/portfolio' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-zinc-200 fixed top-0 left-0 w-full z-50 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-serif">
                <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900"
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
                        >
                            {link.label}
                        </Link>
                    ))}
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block px-6 py-4 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
