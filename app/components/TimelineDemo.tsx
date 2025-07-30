'use client';

import React, { useState } from "react";
import { Timeline } from "./ui/timeline";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const containImageIds = [223, 208, 190, 120, 107, 145, 247, 287, 274]; // ตัวอย่าง ID

export function TimelineDemo() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [slides, setSlides] = useState<any[]>([]);

    const allImages: { src: string, alt: string }[] = [];

    const data = [
        {
            title: "Design",
            images: ["design1", "design2", "design3", "design4", "design5", "design6"],
        },
        {
            title: "Production",
            images: ["production1", "production2", "production3", "production4", "production5", "production6"],
        },
        {
            title: "WareHouse",
            images: ["warehouse1", "warehouse2", "warehouse3", "warehouse4", "warehouse5"],
        },
        {
            title: "Shipping",
            images: ["shipping1", "shipping2", "shipping3"],
        },
    ];

    // สร้าง slides จากทั้งหมด พร้อม contain เฉพาะบางภาพ
    const generateSlides = () => {
        return allImages.map((img, index) => {
            const id = parseInt(img.src.match(/\d+/)?.[0] || "-1");
            return {
                src: img.src,
                alt: img.alt,
                mode: containImageIds.includes(id) ? "contain" : "cover",
            };
        });
    };

    // สร้างเนื้อหา Timeline
    const timelineData = data.map(section => {
        const content = (
            <div className="grid grid-cols-3 gap-4">
                {section.images.map(name => {
                    const imgPath = `/images/${name}.jpg`;
                    const altText = name;
                    const index = allImages.length;

                    // เพิ่มลงใน allImages สำหรับ Lightbox
                    allImages.push({ src: imgPath, alt: altText });

                    return (
                        <img
                            key={imgPath}
                            src={imgPath}
                            alt={altText}
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover cursor-zoom-in shadow-md md:h-44 lg:h-60"
                            onClick={() => {
                                setSlides(generateSlides());
                                setLightboxIndex(index);
                                setLightboxOpen(true);
                            }}
                        />
                    );
                })}
            </div>
        );
        return { title: section.title, content };
    });

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={timelineData} />
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides}
                index={lightboxIndex}
            />
        </div>
    );
}
