'use client'

import { Box, Button, Container, Typography } from '@mui/material'

const image = '/images/Anntonia1-GC-2401RB.png'

export default function BuiltinHeroSection() {
  return (
    <Box
      sx={{
        mt: 16,
        position: 'relative',
        height: { xs: '60vh', md: '75vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        px: 2,
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          borderRadius: '24px',
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
          borderRadius: '24px',
        }}
      />

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontFamily: 'Kanit, sans-serif',
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          เฟอร์นิเจอร์ OEM & BUILT IN
        </Typography>

        <Typography
          variant="h6"
          color="rgba(255,255,255,0.85)"
          maxWidth="600px"
          mx="auto"
          mb={4}
        >
          เราเป็นผู้ผลิตและจำหน่ายเฟอร์นิเจอร์ภายในประเทศ
          ผ่านตัวแทนร้านค้า 2,000 แห่งทั่วประเทศและส่งออกไปยังหลายประเทศ
          รับผลิตเฟอร์นิเจอร์ ด้วยแบบที่ลูกค้าจัดหามาให้
          และด้วยแบบของทางโรงงานเราเอง พร้อมทั้งบริการขนส่งและติดตั้งหน้างาน
          แบบเบ็ดเสร็จจบในที่เดียว
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="/contact"
          sx={{
            backgroundColor: '#ffffff',
            color: '#000',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            borderRadius: '999px',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          ติดต่อสอบถามรายละเอียด
        </Button>
      </Container>
    </Box>
  )
}
