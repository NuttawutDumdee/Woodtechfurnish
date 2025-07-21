import { Typography, Box, Link, Stack, IconButton, Divider, useTheme } from "@mui/material";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import WorkHistorySharpIcon from '@mui/icons-material/WorkHistorySharp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SiLine, SiTiktok } from "react-icons/si";
import { KanitFont } from "../components/Fonts";

export default function ContactInfo() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
                borderRadius: 4,
                p: { xs: 3, sm: 5 },
                maxWidth: 700,
                mx: 'auto',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                mt: 4,
            }}
        >
            <Typography variant="h5" fontWeight={700} gutterBottom>
                Woodtech Furnish
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Stack spacing={3}>
                <KanitFont>
                    <Box display="flex" alignItems="flex-start">
                        <LocationOnSharpIcon sx={{ mr: 1, color: theme.palette.error.main }} />
                        <Typography variant="body1" color="text.secondary">
                            <strong>ที่อยู่</strong><br />
                            99/9 หมู่ 2 ถนนพระราม 2<br />
                            ต.พันท้ายนรสิงห์ อ.เมืองสมุทรสาคร<br />
                            จ.สมุทรสาคร 74000
                        </Typography>
                    </Box>
                </KanitFont>

                <KanitFont>
                    <Box display="flex" alignItems="flex-start">
                        <WorkHistorySharpIcon sx={{ mr: 1, color: theme.palette.error.main }} />
                        <Typography variant="body1" color="text.secondary">
                            <strong>วันและเวลาให้บริการ</strong><br />
                            วันจันทร์ - เสาร์ | เวลา 08:00 - 17:00 น.
                        </Typography>
                    </Box>
                </KanitFont>

                <KanitFont>
                    <Box display="flex" alignItems="flex-start">
                        <LocalPhoneIcon sx={{ mr: 1, color: theme.palette.error.main }} />
                        <Typography variant="body1" color="text.secondary">
                            <strong>เบอร์โทรศัพท์</strong><br />
                            (034) 871-661
                        </Typography>
                    </Box>
                </KanitFont>
            </Stack>

            {/* Social Icons */}
            <Box mt={4}>
                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                    ช่องทางติดตาม
                </Typography>

                <Stack direction="row" spacing={2}>
                    <IconButton
                        component={Link}
                        href="https://www.facebook.com/ExclusiveFurnitureCOLLECTION/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Facebook"
                        sx={{ color: '#1877F2' }}
                    >
                        <FacebookIcon fontSize="large" />
                    </IconButton>

                    <IconButton
                        component={Link}
                        href="https://instagram.com/exclusivefurniture___"
                        target="_blank"
                        rel="noopener"
                        aria-label="Instagram"
                        sx={{ color: '#E4405F' }}
                    >
                        <InstagramIcon fontSize="large" />
                    </IconButton>

                    <IconButton
                        component={Link}
                        href="https://line.me/ti/p/6ruaUhje6S"
                        target="_blank"
                        rel="noopener"
                        aria-label="LINE"
                        sx={{ color: '#00C300', fontSize: 32 }}
                    >
                        <SiLine />
                    </IconButton>

                    <IconButton
                        component={Link}
                        href="https://www.tiktok.com/@exclusivefurniture__"
                        target="_blank"
                        rel="noopener"
                        aria-label="TikTok"
                        sx={{ color: '#000', fontSize: 32 }}
                    >
                        <SiTiktok />
                    </IconButton>

                    <IconButton
                        component={Link}
                        href="https://www.youtube.com/channel/UC5zdKyTUstRkBPEA66Y6k5g"
                        target="_blank"
                        rel="noopener"
                        aria-label="YouTube"
                        sx={{ color: '#FF0000' }}
                    >
                        <YouTubeIcon fontSize="large" />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    );
}
