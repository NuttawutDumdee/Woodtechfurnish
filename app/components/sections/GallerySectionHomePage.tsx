'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/gallery/gallery1.jpg',
    '/images/gallery/gallery2.jpg',
    '/images/gallery/gallery3.jpg',
    '/images/gallery/gallery4.jpg',
    '/images/gallery/gallery5.jpg',
];

const GallerySectionHomePage = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000); // เปลี่ยนรูปทุก 4 วินาที

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-background py-16 px-4 md:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-textPrimary mb-8 font-kanit">
                    ผลงานของเรา
                </h2>

                <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={index}
                            className="absolute w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={images[index]}
                                alt={`Gallery ${index + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-primary' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySectionHomePage;
