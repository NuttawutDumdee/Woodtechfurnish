'use client';

import { Box, Typography, Card, CardContent, Rating, Avatar, Stack, useTheme } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { reviewData } from './reviewData';

export default function CustomerReviewsSection() {
    const theme = useTheme();

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [{ breakpoint: 960, settings: { slidesToShow: 1 } }],
    };

    return (
        <Box sx={{ py: 12, maxWidth: 1100, mx: 'auto', px: 2 }}>
            <Typography
                variant="h4"
                align="center"
                fontWeight={800}
                mb={2}
                sx={{ color: theme.palette.primary.dark, letterSpacing: 1.5 }}
            >
                รีวิวจากลูกค้า
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                mb={6}
                sx={{ fontStyle: 'italic', letterSpacing: 0.5 }}
            >
                ความประทับใจจากผู้ใช้บริการของเรา
            </Typography>

            <Slider {...settings}>
                {reviewData.map(({ id, name, rating, comment }) => (
                    <Box key={id} mx={2} sx={{ outline: 'none' }}>
                        <Card
                            sx={{
                                height: '100%',
                                p: 4,
                                borderRadius: 4,
                                boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                bgcolor: '#fafafa',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                '&:hover': {
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                                    transform: 'translateY(-8px)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <Stack direction="row" spacing={3} alignItems="center" mb={3}>
                                    <Avatar
                                        sx={{
                                            bgcolor: theme.palette.primary.main,
                                            width: 56,
                                            height: 56,
                                            fontWeight: 'bold',
                                            fontSize: 24,
                                            boxShadow: `0 0 0 3px ${theme.palette.primary.light}`,
                                        }}
                                    >
                                        {name.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6" fontWeight={700} sx={{ color: theme.palette.primary.dark }}>
                                            {name}
                                        </Typography>
                                        <Rating
                                            value={rating}
                                            readOnly
                                            size="medium"
                                            sx={{
                                                color: theme.palette.primary.main,
                                                mt: 0.5,
                                            }}
                                        />
                                    </Box>
                                </Stack>
                                <Typography
                                    variant="body1"
                                    color="text.primary"
                                    sx={{
                                        fontStyle: 'italic',
                                        lineHeight: 1.7,
                                        position: 'relative',
                                        '&::before': {
                                            content: '"“"',
                                            position: 'absolute',
                                            top: -10,
                                            left: -10,
                                            fontSize: 48,
                                            color: theme.palette.primary.light,
                                            opacity: 0.2,
                                            fontWeight: 'bold',
                                        },
                                        '&::after': {
                                            content: '"”"',
                                            position: 'absolute',
                                            bottom: -10,
                                            right: -10,
                                            fontSize: 48,
                                            color: theme.palette.primary.light,
                                            opacity: 0.2,
                                            fontWeight: 'bold',
                                        },
                                    }}
                                >
                                    {comment}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
