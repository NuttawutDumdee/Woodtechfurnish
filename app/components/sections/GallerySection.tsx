'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GallerySectionProps {
    image: string;
    alt?: string;
}

export default function GallerySection({ image, alt = "Gallery Image" }: GallerySectionProps) {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative w-full aspect-[16/9] mt-6 rounded-xl overflow-hidden shadow-lg border border-red-500">
            <img
                src={image}
                alt={alt}
                width={1200}
                height={675}
                className="object-cover w-full h-auto rounded-xl shadow-lg cursor-zoom-in"
                onClick={() => setOpen(true)}
            />

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: image, alt }]}
                carousel={{ finite: true, preload: 0 }} // ปิดการวน loop และ preload
                animation={{ swipe: 0 }} // ปิด swipe animation
            />
        </section>
    );
}
