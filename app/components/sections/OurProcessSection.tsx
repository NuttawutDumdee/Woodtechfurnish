'use client';

import { Box, Typography, Paper } from '@mui/material';
import { DesignServices, Handshake, Build, LocalShipping } from '@mui/icons-material';
import { motion } from 'framer-motion';
import React from 'react';

// กำหนด props icon แค่ครั้งเดียว
const iconProps = { sx: { fontSize: 48, color: 'primary.main' } };

// Array เก็บ icon เป็น Component เฉย ๆ
const steps = [
    {
        icon: DesignServices,
        title: 'นัดหมายพูดคุย & ขอใบเสนอราคา',
        description: 'แจ้งความต้องการ ประเมินพื้นที่ ออกแบบเพื่อคำนวณราคา นำเสนอราคา',
    },
    {
        icon: Handshake,
        title: 'ทำสัญญา & นัดส่งมอบ',
        description: 'สรุปราคา ทำสัญญาซื้อขาย นัดส่งมอบงาน',
    },
    {
        icon: Build,
        title: 'ผลิต & ติดตั้ง',
        description: 'ผลิตตามแบบ และส่งติดตั้งที่หน้างาน',
    },
    {
        icon: LocalShipping,
        title: 'ส่งมอบงาน',
        description: 'ตรวจสอบงานก่อนส่งมอบ เซ็นต์ รับ-มอบงาน',
    },
];

// Component แยก StepCard ช่วยลด re-render
const StepCard = React.memo(function StepCard({ Icon, title, description, index }: {
    Icon: typeof DesignServices;
    title: string;
    description: string;
    index: number;
}) {
    return (
        <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            elevation={3}
            sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 4,
                width: { xs: '100%', sm: '45%', md: '22%' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}
        >
            <Icon {...iconProps} />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Paper>
    );
});

export default function OurProcessSection() {
    return (
        <Box
            sx={{
                py: 10,
                px: { xs: 2, md: 6 },
                backgroundColor: '#f9f9f9',
                fontFamily: 'Kanit, sans-serif',
            }}
        >
            <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                ขั้นตอนการให้บริการ Built-in Furniture
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
                เราดูแลตั้งแต่เริ่มต้นจนจบ ครบวงจร
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 4,
                }}
            >
                {steps.map((step, index) => (
                    <StepCard
                        key={index}
                        Icon={step.icon}
                        title={step.title}
                        description={step.description}
                        index={index}
                    />
                ))}
            </Box>
        </Box>
    );
}
