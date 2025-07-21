'use client';

import Image from "next/image";
import { useState } from 'react';

interface GallerySectionProps {
    image: string;
    alt?: string;
}

export default function GallerySection({ image, alt = "Gallery Image" }: GallerySectionProps) {
    const [hasError, setHasError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
        <section className="relative w-full aspect-[16/9] mt-6 rounded-xl overflow-hidden shadow-lg">
            {!hasError ? (
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className={`object-cover transition-opacity duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    priority
                    onLoad={() => setLoaded(true)}
                    onError={() => setHasError(true)}
                />
            ) : (
                <div className="flex items-center justify-center w-full h-full backdrop-blur-sm bg-white/30 text-gray-700 text-sm font-medium rounded-xl">
                    ไม่สามารถโหลดรูปภาพได้
                </div>
            )}
        </section>
    );
}
