'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';

const tiktokVideoIds = [
    '7498186558047145234',
    '7277406360814374149',
    '7423292186348801288',
    '7513767695645478151',
    '7246594833001794822',
    '7310451817643625733',
    '7212460958592159002',
    '7437819980923653394',
    '7320440670462790917',
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
            <Navbar />

            {/* Back Button */}
            <div className="mb-6 mt-10">
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

            {/* Card ครอบวิดีโอทั้งหมด */}
            <div className="bg-gray-100 rounded-xl shadow-lg border border-gray-300 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {tiktokVideoIds.map((videoId) => (
                        <blockquote
                            key={videoId}
                            className="tiktok-embed rounded-lg overflow-hidden shadow-md border border-gray-200"
                            cite={`https://www.tiktok.com/@exclusivefurniture__/video/${videoId}`}
                            data-video-id={videoId}
                            style={{ width: '100%', minWidth: 280 }}
                        >
                            <section></section>
                        </blockquote>
                    ))}
                </div>
            </div>
        </div>
    );
}
