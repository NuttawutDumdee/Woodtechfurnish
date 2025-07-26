"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

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
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
            >
                {[firstPart, secondPart, thirdPart].map((group, groupIdx) => {
                    const motionStyle =
                        groupIdx === 0
                            ? { y: translateFirst }
                            : groupIdx === 1
                                ? { y: translateSecond }
                                : { y: translateThird };

                    return (
                        <div className="grid gap-10" key={groupIdx}>
                            {group.map((img, idx) => (
                                <motion.div style={motionStyle} key={`img-${groupIdx}-${idx}`}>
                                    <img
                                        src={img.src}
                                        className={cn(
                                            "w-full rounded-lg gap-10 !m-0 !p-0",
                                            img.contain
                                                ? "object-contain max-h-[400px] h-auto"
                                                : "object-cover h-80"
                                        )}
                                        alt="thumbnail"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
