'use client'

import { useState } from 'react'
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack,
    useTheme,
    Paper,
    Fade,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded'

const faqData = [
    {
        question: 'สอบถามราคาและวิธีการชำระเงินอย่างไร?',
        answer:
            'ท่านสามารถติดต่อสอบถามราคาผ่านฟอร์มติดต่อของเรา หรือโทรเข้ามาที่เบอร์ที่แจ้งไว้บนเว็บไซต์ ทางเรามีวิธีการชำระเงินหลากหลาย ทั้งโอนผ่านธนาคารและบัตรเครดิต',
    },
    {
        question: 'ใช้เวลาติดตั้งนานเท่าไร?',
        answer:
            'ระยะเวลาการติดตั้งขึ้นอยู่กับขนาดและความซับซ้อนของงาน โดยปกติจะใช้เวลาประมาณ 7-14 วันทำการ หลังจากตกลงแบบและวางแผนงานเรียบร้อย',
    },
    {
        question: 'รับประกันงานอย่างไรบ้าง?',
        answer:
            'เรารับประกันงาน Built-in ทุกชิ้นเป็นระยะเวลา 1 ปีครอบคลุมการซ่อมแซมจากข้อบกพร่องของวัสดุและงานติดตั้ง',
    },
    {
        question: 'มีบริการออกแบบให้หรือไม่?',
        answer:
            'มีบริการออกแบบโดยทีมงานมืออาชีพพร้อมให้คำปรึกษาฟรี เพื่อให้ได้เฟอร์นิเจอร์ที่ตอบโจทย์และเหมาะสมกับพื้นที่ของคุณ',
    },
]

export default function ContactFAQ() {
    const theme = useTheme()
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box
            component="section"
            sx={{
                maxWidth: 960,
                mx: 'auto',
                py: { xs: 8, md: 12 },
                px: 3,
                mt: 8,
                borderRadius: 6,
                background: 'linear-gradient(135deg, #f7f9fc, #ffffff)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            }}
        >
            <Typography
                variant="h3"
                fontWeight={600}
                textAlign="center"
                gutterBottom
                sx={{
                    color: theme.palette.primary.main,
                    mb: 6,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    letterSpacing: 0.5,
                }}
            >
                คำถามที่พบบ่อย
            </Typography>

            <Stack spacing={3}>
                {faqData.map((item, index) => (
                    <Fade in timeout={500 + index * 100} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                borderRadius: 4,
                                overflow: 'hidden',
                                bgcolor: expanded === `panel${index}` ? '#f0f7ff' : '#ffffff',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <Accordion
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    '&:before': { display: 'none' },
                                    boxShadow: 'none',
                                    borderRadius: 4,
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        gap: 1.5,
                                        '& .MuiAccordionSummary-content': {
                                            alignItems: 'center',
                                            my: 1,
                                        },
                                    }}
                                >
                                    <HelpOutlineRoundedIcon
                                        sx={{ fontSize: 28, color: theme.palette.primary.main, mr: 1 }}
                                    />
                                    <Typography variant="h6" fontWeight={500}>
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ px: 4, pb: 3, pt: 0 }}>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.8, fontSize: '1rem' }}
                                    >
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>
                    </Fade>
                ))}
            </Stack>
        </Box>
    )
}
