'use client'

import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { keyframes } from '@emotion/react'

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export default function GoogleMapEmbed() {
  const theme = useTheme()

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.41956290821892!2d100.367372!3d13.553189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2ba78299f0e6d%3A0x6bfcd5d513eee17a!2z4Lin4Li54LmJ4LiU4LmA4LiX4LiEIOC5gOC4n-C4reC4o-C5jOC4meC4tOC4iiDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sus!4v1750649943786!5m2!1sth!2sus"

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        px: 2,
        minHeight: { xs: '400px', md: '600px' },
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fefefe',
        animation: `${fadeInScale} 0.8s ease forwards`,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1000,
          height: { xs: 300, md: 600 },
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0 0 20px 3px rgba(255,255,255,0.1)'
              : '0 8px 30px rgba(0,0,0,0.15)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 0 30px 6px rgba(255,255,255,0.2)'
                : '0 12px 40px rgba(0,0,0,0.3)',
          },
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : '#ddd'
            }`,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        />
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 2, maxWidth: 1000, textAlign: 'center', fontStyle: 'italic' }}
      >
        ที่ตั้งสำนักงานของเรา — ดูตำแหน่งและเส้นทางเพื่อความสะดวกในการเข้าชม
      </Typography>
    </Box>
  )
}
