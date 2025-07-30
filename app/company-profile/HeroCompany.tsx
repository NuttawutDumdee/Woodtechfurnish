'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function HeroCompany() {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '60vh', md: '80vh' },
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                overflow: 'hidden',
                mt: 14,
            }}
        >
            <Image
                src="/images/Monica-company.png"
                alt="Company Background"
                fill
                style={{
                    objectFit: 'cover',
                    zIndex: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />

            {/* Layer มืดบางๆ ซ้อนทับพื้นหลัง */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 0.5,
                }}
            />

            {/* ข้อความ */}
            <Box
                sx={{
                    px: 3,
                    zIndex: 1,
                    color: '#ffffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', // กรอบโปร่งใส
                    backdropFilter: 'blur(6px)', // ทำให้พื้นหลังเบลอเล็กน้อย
                    borderRadius: 2,
                    boxShadow: 3,
                    maxWidth: 700,
                    mx: 'auto',
                    py: { xs: 2, md: 4 },
                }}
            >
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    เกี่ยวกับเรา
                </Typography>
                <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto', mb: 1 }}>
                    บริษัทของเรามุ่งมั่นในการสร้างสรรค์ผลงานเฟอร์นิเจอร์บิวท์อินที่มีคุณภาพ
                    และตอบโจทย์ทุกความต้องการของลูกค้า
                </Typography>
            </Box>
        </Box>
    );
}
