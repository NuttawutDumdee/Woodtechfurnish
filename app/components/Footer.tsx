'use client';

import Image from 'next/image';
import {
  Box,
  Typography,
  Link as MuiLink,
  Stack,
  Divider,
  useTheme,
} from '@mui/material';
import { FiFacebook, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SiLine } from 'react-icons/si';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)', // พื้นหลังสีขาว-เทาอ่อน
        color: '#333', // ตัวอักษรสีเข้มอ่านง่าย
        px: { xs: 6, md: 12 },
        py: { xs: 10, md: 14 },
        fontFamily: "'Kanit', sans-serif",
        borderTop: `2px solid ${theme.palette.primary.main}`,
        boxShadow: '0 -6px 24px rgba(0,0,0,0.1)', // เงานุ่มๆ ไม่เข้มเกินไป
        userSelect: 'none',
      }}
    >
      {/* Main Footer Layout */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: { xs: 8, md: 12 },
          maxWidth: 1400,
          mx: 'auto',
        }}
      >
        {/* Logo & Description */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 25%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Image
            src="/Images/logo-woodtech-02.jpg"
            alt="WoodTech Furnish"
            width={180}
            height={68}
            priority
          />
          <Typography
            sx={{
              lineHeight: 1.9,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: '#555', // สีเทาเข้มสำหรับข้อความ
              maxWidth: 380,
              userSelect: 'text',
            }}
          >
            เราคือผู้เชี่ยวชาญด้านเฟอร์นิเจอร์ Built-in ที่ออกแบบอย่างประณีต
            ผสมผสานความเรียบง่ายและความทันสมัยในทุกชิ้นงาน
          </Typography>
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            flex: { xs: '1 1 45%', md: '1 1 18%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              color: theme.palette.primary.main,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              pb: 1,
              mb: 1,
              letterSpacing: 1.2,
            }}
          >
            เมนู
          </Typography>
          <Stack spacing={2}>
            {[
              { label: 'หน้าแรก', href: '/' },
              // { label: 'เกี่ยวกับเรา', href: '/about' },
              // { label: 'บริการ', href: '/services' },
              { label: 'ผลงาน', href: '/portfolio' },
              { label: 'ติดต่อ', href: '/contact' },
            ].map(({ label, href }) => (
              <MuiLink
                key={href}
                href={href}
                underline="none"
                sx={{
                  color: '#333',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    textDecoration: 'underline',
                  },
                  userSelect: 'text',
                }}
              >
                {label}
              </MuiLink>
            ))}
          </Stack>
        </Box>

        {/* Contact Info */}
        <Box
          sx={{
            flex: { xs: '1 1 45%', md: '1 1 23%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              color: theme.palette.primary.main,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              pb: 1,
              mb: 1,
              letterSpacing: 1.2,
            }}
          >
            ติดต่อเรา
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FiPhone size={24} color={theme.palette.primary.main} />
              <Typography sx={{ fontSize: '1.1rem', userSelect: 'text', color: '#444' }}>
                082-726-5238
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FiMail size={24} color={theme.palette.primary.main} />
              <Typography sx={{ fontSize: '1.1rem', userSelect: 'text', color: '#444' }}>
                project@woodtechfurnish.com
              </Typography>
            </Box>
          </Stack>

          {/* Social Icons */}
          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            {[
              {
                href: 'https://www.facebook.com/ExclusiveFurnitureCOLLECTION/',
                icon: <FiFacebook size={22} color="#3b5998" />,
                bgcolor: '#e6f0ff',
                hoverBg: '#c1d4ff',
                color: '#3b5998',
              },
              {
                href: 'https://www.instagram.com/exclusivefurniture___/',
                icon: <FiInstagram size={22} color="#e4405f" />,
                bgcolor: '#ffe6ec',
                hoverBg: '#ffcade',
                color: '#e4405f',
              },
              {
                href: 'https://line.me/ti/p/6ruaUhje6S',
                icon: <SiLine size={22} color="#00c300" />,
                bgcolor: '#e6f7e6',
                hoverBg: '#b9e7b9',
                color: '#00c300',
              },
            ].map(({ href, icon, bgcolor, hoverBg, color }) => (
              <MuiLink
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: bgcolor,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: color,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: hoverBg,
                    transform: 'scale(1.15)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  },
                }}
              >
                {icon}
              </MuiLink>
            ))}
          </Stack>
        </Box>

        {/* Address */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 28%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              color: theme.palette.primary.main,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              pb: 1,
              mb: 1,
              letterSpacing: 1.2,
            }}
          >
            ที่ตั้งสำนักงาน
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
            <FiMapPin size={26} color={theme.palette.primary.main} />
            <Typography
              sx={{
                lineHeight: 1.75,
                fontSize: '1rem',
                color: '#444',
                whiteSpace: 'pre-line',
                userSelect: 'text',
              }}
            >
              99/9 หมู่ 2 ถนน พระราม 2{'\n'}
              ตำบลพันท้ายนรสิงห์ อำเภอเมืองสมุทรสาคร{'\n'}
              จังหวัดสมุทรสาคร 74000{'\n'}
              โทร. (034)-871-661{'\n'}
              E-mail : project@woodtechfurnish.com{'\n'}
              เปิดบริการ จันทร์ - เสาร์ เวลา 8.00 - 17.00 น.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Divider sx={{ mt: 12, borderColor: 'rgba(0,0,0,0.1)' }} />
      <Box
        sx={{
          textAlign: 'center',
          pt: 6,
          fontSize: 14,
          color: '#666',
          letterSpacing: 0.6,
          fontWeight: 500,
          userSelect: 'text',
        }}
      >
        © {new Date().getFullYear()} WoodTech Furnish. All rights reserved.
      </Box>
    </Box>
  );
}
