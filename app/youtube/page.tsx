'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';

const videoIds = [
    'KNBRGhGnlSY',
    'hH78yn-kHWE',
    'dHSp-jPxz-o',
    'DyTX4I7nXoI',
    'wNM3A7DVQes',
    '0kpMBgUSE7Q',
    '8JQvYuYKf8s',
    'cBvnCF5_MvY',
];

const shortIds = [
    'rfVbZNSqTJs',
    'qZenODm6WTY',
    'sNd5g_qvV9Y',
    'KDLAS9ULxmk',
    'HB9cpTObdug',
    'v7OE1E9zLfo',
    '4bO8_c9AF6s',
    'EW3reDlSjgc',
    'JTGFqiS34V4',
];

export default function YouTubeVideosGallery() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
            <Navbar />
            <div className="mb-6 mt-10">
                <Link
                    href="/"
                    className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Content
                </Link>
            </div>

            <h1 className="text-3xl font-bold mb-8 text-center text-red-600">
                YouTube Videos Gallery
            </h1>

            <section>
                <h2 className="text-2xl font-semibold mb-6 text-center text-red-700">
                    Videos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {videoIds.map((id) => (
                        <div
                            key={id}
                            className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-red-200"
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                title={`YouTube video ${id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-6 text-center text-pink-600">
                    Shorts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {shortIds.map((id) => (
                        <div
                            key={id}
                            className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow-lg border border-pink-200"
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                title={`YouTube Shorts ${id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
