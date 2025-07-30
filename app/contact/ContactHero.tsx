'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function ContactHero() {
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                height: { xs: '90vh', md: '100vh' },
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                userSelect: 'none',
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            {/* Background Image */}
            <Image
                src="/images/Woodtech AboutHero.jpg"
                alt="Contact Background"
                fill
                priority
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    zIndex: 0,
                }}
            />

            {/* Top Overlay Gradient */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
                    zIndex: 1,
                }}
            />

            {/* Glowing Decorative Circles */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-30%',
                    left: '-20%',
                    width: 400,
                    height: 400,
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    animation: 'pulseGlow 5s ease-in-out infinite',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '-15%',
                    width: 300,
                    height: 300,
                    bgcolor: 'rgba(255, 255, 255, 0.06)',
                    filter: 'blur(80px)',
                    borderRadius: '50%',
                    animation: 'pulseGlow 7s ease-in-out infinite alternate',
                    zIndex: 1,
                }}
            />

            {/* Content Glass Box */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(18px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 6,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                    px: { xs: 4, md: 8 },
                    py: { xs: 6, md: 10 },
                    maxWidth: 720,
                    mx: 'auto',
                    animation: 'fadeSlideUp 1.2s ease forwards',
                    opacity: 0,
                    transform: 'translateY(40px)',
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    fontWeight={800}
                    gutterBottom
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        color: '#fff',
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.18)',
                        letterSpacing: 1.5,
                    }}
                >
                    ติดต่อเราเพื่อรับคำปรึกษาฟรี
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        color: 'rgba(255,255,255,0.85)',
                        mt: 3,
                        fontWeight: 400,
                        lineHeight: 1.7,
                        maxWidth: 520,
                        mx: 'auto',
                    }}
                >
                    ทีมงานของเราพร้อมให้คำแนะนำ ด้านการออกแบบ ติดตั้ง และผลิต Built-in Furniture
                    ที่ตอบโจทย์ไลฟ์สไตล์ของคุณอย่างแท้จริง
                </Typography>
            </Box>

            {/* Bottom SVG Wave */}
            <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 140"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 140,
                    fill: 'url(#contactWave)',
                    zIndex: 3,
                }}
            >
                <defs>
                    <linearGradient id="contactWave" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity={0.1} />
                        <stop offset="100%" stopColor="#000000" stopOpacity={0.2} />
                    </linearGradient>
                </defs>
                <path d="M0 50C360 120 1080 0 1440 50V140H0V50Z" />
            </Box>

            {/* Keyframe Animations */}
            <style>{`
                @keyframes fadeSlideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes pulseGlow {
                    0%, 100% {
                        opacity: 0.1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.2;
                        transform: scale(1.1);
                    }
                }
            `}</style>
        </Box>
    );
}
