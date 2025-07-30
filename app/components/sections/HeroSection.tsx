'use client';

import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function HeroSection() {
    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "80vh", md: "80vh" },
                width: "100%",
                mt: 14.5,
                overflow: "hidden",
                borderRadius: "24px",
            }}
        >
            {/* Background Image */}
            <Image
                src="/images/Camila.png"
                alt="Hero Background"
                fill
                style={{ objectFit: "cover" }}
                priority
            />

            {/* Gradient Mask */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0.6) 80%)",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    textAlign: "center",
                    color: "#fff",
                    maxWidth: "90%",
                    px: 3,
                }}
            >
                <SparklesText>Furniture OEM & Built-in</SparklesText>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 4,
                        maxWidth: "600px",
                        mx: "auto",
                        color: "rgba(255,255,255,0.9)",
                        textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                        fontWeight: 300,
                    }}
                >
                    ออกแบบ / ผลิต / ติดตั้ง เฟอร์นิเจอร์โดยทีมงานมืออาชีพ
                    ด้วยเครื่องจักรที่ทันสมัยและประสบการณ์กว่า 35 ปี
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="center"
                >
                    <Button
                        variant="contained"
                        sx={{
                            px: 5,
                            py: 1.8,
                            fontWeight: "bold",
                            borderRadius: "999px",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            color: "#fff",
                            textTransform: "none",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                                borderColor: "rgba(255, 255, 255, 0.6)",
                            },
                        }}
                        href="/portfolio"
                    >
                        ผลงานของเรา
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            px: 5,
                            py: 1.8,
                            fontWeight: "bold",
                            borderRadius: "999px",
                            color: "#fff",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            textTransform: "none",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(8px)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                                borderColor: "rgba(255, 255, 255, 0.6)",
                            },
                        }}
                        href="/contact"
                    >
                        ติดต่อเรา
                    </Button>
                </Stack>
            </Box>

            {/* Scroll Indicator */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "white",
                    fontSize: "2rem",
                    opacity: 0.7,
                    zIndex: 3,
                    animation: "bounce 2s infinite",
                }}
            >
                ▼
            </Box>
        </Box>
    );
}
