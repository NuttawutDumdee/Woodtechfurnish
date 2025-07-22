'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const tiktokVideoIds = [
    '7498186558047145234',
    '7277406360814374149',
    '7423292186348801288',
    // เพิ่มได้ตามต้องการ
];

export default function TikTokPage() {
    useEffect(() => {
        if (!document.querySelector('script[src*="tiktok.com/embed.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
            {/* Back Button */}
            <div className="mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Content
                </Link>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-8 text-center text-pink-600">
                TikTok Videos Gallery
            </h1>

            {/* TikTok Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                {tiktokVideoIds.map((videoId) => (
                    <blockquote
                        key={videoId}
                        className="tiktok-embed rounded-xl overflow-hidden shadow-lg border border-pink-200"
                        cite={`https://www.tiktok.com/@exclusivefurniture__/video/${videoId}`}
                        data-video-id={videoId}
                        style={{ width: '100%', minWidth: 300 }}
                    >
                        <section></section>
                    </blockquote>
                ))}
            </div>
        </div>
    );
}
