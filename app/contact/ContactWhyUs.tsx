'use client';

import { Box, Typography, Grid, Paper } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ConstructionIcon from '@mui/icons-material/Construction';
import ScheduleIcon from '@mui/icons-material/Schedule';

const reasons = [
    {
        icon: <VerifiedUserIcon sx={{ fontSize: 56, color: '#1976d2' }} />,
        title: 'ทีมงานมืออาชีพ',
        description: 'ชำนาญงาน พร้อมให้คำปรึกษา และบริการอย่างจริงใจ',
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 56, color: '#388e3c' }} />,
        title: 'บริการรวดเร็ว',
        description: 'ตอบกลับไว ทำงานตรงเวลา พร้อมดูแลหลังการขาย',
    },
    {
        icon: <ConstructionIcon sx={{ fontSize: 56, color: '#f57c00' }} />,
        title: 'วัสดุคุณภาพ',
        description: 'ใช้วัสดุเกรดพรีเมียม แข็งแรง ทนทาน และสวยงาม',
    },
    {
        icon: <ScheduleIcon sx={{ fontSize: 56, color: '#d32f2f' }} />,
        title: 'ออกแบบเฉพาะคุณ',
        description: 'งานออกแบบเฉพาะตัว ตรงตามสเปคและความต้องการของคุณ',
    },
];

export default function ContactWhyUs() {
    return (
        <Box sx={{ py: 8, px: 2, background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', borderRadius: 3 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                gutterBottom
                sx={{ mb: 6, fontFamily: "'Poppins', sans-serif", color: '#0d47a1' }}
            >
                ทำไมต้องเลือกเรา?
            </Typography>

            <Grid container spacing={4} justifyContent="center" maxWidth="lg" margin="0 auto">
                {reasons.map(({ icon, title, description }, idx) => (
                    <Grid container sx={{display: 'flex', justifyContent:'center', gap: 4, mt: 0}} key={idx}>
                        <Paper
                            elevation={8}
                            sx={{
                                p: 4,
                                textAlign: 'center',
                                borderRadius: 3,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                backgroundColor: 'white',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 12px 24px rgba(25, 118, 210, 0.3)',
                                },
                            }}
                        >
                            <Box sx={{ mb: 3 }}>{icon}</Box>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ color: '#0d47a1', fontFamily: "'Poppins', sans-serif" }}
                            >
                                {title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                {description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
