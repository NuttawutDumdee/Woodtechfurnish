'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

const galleryData = {
    Design: [
        { src: '/images/design1.jpg', alt: 'Design image 1' },
        { src: '/images/design2.jpg', alt: 'Design image 2' },
        { src: '/images/design3.jpg', alt: 'Design image 3' },
        { src: '/images/design4.jpg', alt: 'Design image 3' },
        { src: '/images/design5.jpg', alt: 'Design image 3' },
        { src: '/images/design6.jpg', alt: 'Design image 3' },
    ],
    Production: [
        { src: '/images/production1.jpg', alt: 'Production image 1' },
        { src: '/images/production2.jpg', alt: 'Production image 2' },
        { src: '/images/production3.jpg', alt: 'Production image 3' },
        { src: '/images/production4.jpg', alt: 'Production image 3' },
        { src: '/images/production5.jpg', alt: 'Production image 3' },
        { src: '/images/production6.jpg', alt: 'Production image 3' },
    ],
    Warehouse: [
        { src: '/images/warehouse1.jpg', alt: 'Warehouse image 1' },
        { src: '/images/warehouse2.jpg', alt: 'Warehouse image 2' },
        { src: '/images/warehouse3.jpg', alt: 'Warehouse image 3' },
        { src: '/images/warehouse4.jpg', alt: 'Warehouse image 3' },
        { src: '/images/warehouse5.jpg', alt: 'Warehouse image 3' },
    ],
    Shipping: [
        { src: '/images/shipping1.jpg', alt: 'Shipping image 1' },
        { src: '/images/shipping2.jpg', alt: 'Shipping image 2' },
        { src: '/images/shipping3.jpg', alt: 'Shipping image 3' },
    ],
};

function GallerySlider({ images }: { images: { src: string; alt?: string }[] }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {images.map(({ src, alt }, idx) => (
                <SwiperSlide key={idx}>
                    <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg border border-gray-300">
                        <Image
                            src={src}
                            alt={alt ?? `Gallery image ${idx + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={idx === 0}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default function GallerySection() {
    return (
        <section className="max-w-7xl mx-auto py-12 px-4 space-y-16">
            {Object.entries(galleryData).map(([category, images]) => (
                <div key={category}>
                    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                        {category}
                    </h2>
                    <GallerySlider images={images} />
                </div>
            ))}
        </section>
    );
}
