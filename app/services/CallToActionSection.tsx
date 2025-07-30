'use client'

import { Box, Button, Container, Typography } from '@mui/material'

export default function CallToActionSection() {
  return (
    <Box sx={{ bgcolor: '#1976d2', py: 8, textAlign: 'center', color: '#fff' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          สนใจบริการ Built-in?
        </Typography>
        <Typography variant="body1" mb={4}>
          ส่งภาพห้องหรือแปลนบ้านให้เรา เพื่อรับคำปรึกษาและใบเสนอราคาฟรี
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: '#fff',
            color: '#1976d2',
            fontWeight: 'bold',
            '&:hover': { bgcolor: '#e3f2fd' },
          }}
          href="/contact"
        >
          ติดต่อเรา
        </Button>
      </Container>
    </Box>
  )
}