'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
    { src: '/images/Woodtech Hero.jpg', alt: 'Gallery Image 1' },
    { src: '/images/Gallery4.jpg', alt: 'Gallery Image 2' },
    { src: '/images/Gallery1.jpg', alt: 'Gallery Image 3' },
    { src: '/images/Gallery5.jpg', alt: 'Gallery Image 4' },
    { src: '/images/Gallery2.jpg', alt: 'Gallery Image 5' },
];

export default function FullscreenGallery() {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#ddddddff', // สีพื้นหลัง
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={false}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                style={{ width: '90%', height: '100%' }}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
