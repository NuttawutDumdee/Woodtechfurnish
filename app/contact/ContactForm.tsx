'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  useTheme,
  CircularProgress,
} from '@mui/material';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        setError(false);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      action="https://formsubmit.co/nuttawutdumdee@gmail.com" // 🔁 เปลี่ยนเป็นอีเมลของคุณ
      method="POST"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {/* ป้องกันสแปม (recommended โดย formsubmit) */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />

      <TextField
        name="name"
        label="ชื่อของคุณ"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        name="email"
        type="email"
        label="อีเมลของคุณ"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        name="message"
        label="ข้อความของคุณ"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
      />

      {submitted && <Alert severity="success">ส่งข้อความเรียบร้อยแล้ว!</Alert>}
      {error && <Alert severity="error">เกิดข้อผิดพลาด กรุณาลองใหม่</Alert>}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        disabled={loading}
        sx={{
          py: 1.5,
          fontWeight: 'bold',
          fontSize: '1rem',
          borderRadius: 2,
          background: theme.palette.primary.main,
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'ส่งข้อความ'}
      </Button>
    </Box>
  );
}
