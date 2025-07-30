'use client';

import { Box, Container, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import GoogleMapEmbed from "../components/GoogleMapEmbed";
import ContactWhyUs from "./ContactWhyUs";
import Footer from "../components/Footer";
import ContactHero from "./ContactHero";
import theme from "../src/theme";

export default function ContactPage() {
    return (
        <h1>Contact Us
            <div>
                <Navbar />
                <div style={{ padding: "2rem" }}>
                    <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(180deg, #ffffff, #f4f6f8)' }}>
                        <ContactHero />
                        <Container maxWidth="lg">
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    gap: { xs: 6, md: 10 },
                                    mt: 6,
                                    alignItems: 'flex-start',
                                }}
                            >
                                {/* Contact Info */}
                                <Box sx={{ flex: 1 }}>
                                    <ContactInfo />
                                </Box>

                                {/* Contact Form */}
                                <Box
                                    sx={{
                                        flex: 2,
                                        p: { xs: 3, md: 4 },
                                        borderRadius: 4,
                                        background: 'rgba(255, 255, 255, 0.75)',
                                        boxShadow: theme.shadows[4],
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)',
                                    }}
                                >
                                    <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                        ติดต่อทีมงานของเรา
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align="center" mb={4}>
                                        เรายินดีให้คำแนะนำเรื่องการออกแบบและติดตั้งเฟอร์นิเจอร์ Built-in
                                    </Typography>
                                    <ContactForm />
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </div>

                <ContactWhyUs />

                <GoogleMapEmbed />

                <Footer />
            </div>
        </h1>
    );

}
