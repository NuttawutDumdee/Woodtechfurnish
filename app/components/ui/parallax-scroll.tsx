'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { cn } from '@/lib/utils';

interface ParallaxImage {
    src: string;
    contain?: boolean;
}

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: ParallaxImage[];
    className?: string;
}) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const gridRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ['start start', 'end start'],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    const allImages = [...firstPart, ...secondPart, ...thirdPart];

    const handleOpen = (index: number) => {
        setSelectedIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className={cn('h-[40rem] items-start overflow-y-auto w-full', className)} ref={gridRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
                {[firstPart, secondPart, thirdPart].map((part, colIdx) => {
                    const translate = [translateFirst, translateSecond, translateThird][colIdx];
                    const startIndex = [0, firstPart.length, firstPart.length + secondPart.length][colIdx];

                    return (
                        <div className="grid gap-10" key={`col-${colIdx}`}>
                            {part.map((el, idx) => {
                                const globalIndex = startIndex + idx;
                                return (
                                    <motion.div
                                        style={{ y: translate }}
                                        key={`img-${globalIndex}`}
                                        onClick={() => handleOpen(globalIndex)}
                                        className="cursor-zoom-in"
                                    >
                                        <img
                                            src={el.src}
                                            className={cn(
                                                'h-80 w-full object-cover rounded-lg',
                                                el.contain ? 'object-contain bg-white' : 'object-cover'
                                            )}
                                            height={400}
                                            width={400}
                                            alt="portfolio image"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            {/* Lightbox */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={allImages.map((img) => ({ src: img.src }))}
                index={selectedIndex}
            />
        </div>
    );
};
