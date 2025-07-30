'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';

export default function FacebookPage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!document.getElementById('facebook-jssdk')) {
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v17.0';
            script.onload = () => setLoaded(true);
            document.body.appendChild(script);
        } else {
            setLoaded(true);
        }
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <Navbar />
            {/* Back Button */}
            <div className="mb-6 mt-10">
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Content
                </Link>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-800">Facebook Page</h1>

            {/* Plugin Container */}
            <div className="flex justify-center items-center min-h-[620px]">
                {!loaded ? (
                    <div className="animate-pulse text-gray-500 text-sm">Loading Facebook Page...</div>
                ) : (
                     <div className="bg-gray-100 rounded-xl shadow-lg border border-gray-300 p-6 flex justify-center items-center min-h-[620px]">
                        <div
                            className="fb-page w-full max-w-screen-xl rounded-xl overflow-hidden shadow-xl border border-blue-100"
                            data-href="https://www.facebook.com/ExclusiveFurnitureCOLLECTION/"
                            data-tabs="timeline"
                            data-width="1000"
                            data-height="800"
                            data-small-header="false"
                            data-adapt-container-width="false"
                            data-hide-cover="false"
                            data-show-facepile="true"
                        ></div>
                    </div>

                )}
            </div>
        </div>
    );
}
