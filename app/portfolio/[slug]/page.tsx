import { query } from '@/app/lib/db';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Portfolio {
  id: number;
  slug: string;
  title: string;
  description: string;
  images: { id: number; imageUrl: string }[];
}

// ระบุ ID ของรูปภาพที่ต้องการแสดงขนาดจริง (objectFit: contain)
const containImageIds = [223, 208, 190, 120, 107, 145, 247, 287, 274];

// กำหนดชนิดคืนค่าชัดเจนว่าเป็น Promise อาร์เรย์ของ obj ที่มี slug string
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const portfolios = await query('SELECT slug FROM portfolio');
  return portfolios.map((p: { slug: string }) => ({
    slug: p.slug,
  }));
}

// กำหนดชนิด props ให้ตรงกับที่ Next.js คาดหวัง
type PageProps = {
  params: {
    slug: string;
  };
};

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // await เพื่อดึง slug จริง

  // ดึงข้อมูล portfolio ตาม slug
  const portfolios = await query('SELECT * FROM portfolio WHERE slug = ?', [slug]);

  // ถ้าไม่เจอข้อมูลให้เรียก notFound() เพื่อแสดง 404
  if (!portfolios || portfolios.length === 0) {
    notFound();
  }

  const portfolio = portfolios[0];

  // ดึงรูปภาพทั้งหมดของ portfolio นี้
  const images = await query(
    'SELECT id, imageUrl FROM portfolio_image WHERE portfolioId = ?',
    [portfolio.id]
  );

  const portfolioData: Portfolio = {
    ...portfolio,
    images,
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        fontWeight="bold"
        color="primary.main"
        sx={{ mb: 3 }}
      >
        {portfolioData.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 6,
          whiteSpace: 'pre-line',
          color: '#555',
          fontSize: { xs: '1rem', md: '1.125rem' },
          lineHeight: 1.7,
          fontWeight: 400,
        }}
      >
        {portfolioData.description}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
        }}
      >
        {portfolioData.images.length > 0 ? (
          portfolioData.images.map((img) => {
            const isContain = containImageIds.includes(img.id);
            return (
              <Paper
                key={img.id}
                elevation={4}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  flex: '1 1 calc(33.333% - 16px)',
                  maxWidth: 360,
                  minWidth: 280,
                  boxShadow: '0 8px 16px rgb(0 0 0 / 0.1)',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 12px 24px rgb(0 0 0 / 0.2)',
                  },
                  '& img': {
                    width: isContain ? 'auto' : '100%',
                    height: isContain ? 'auto' : 260,
                    maxHeight: isContain ? 400 : 'none',
                    objectFit: isContain ? 'contain' : 'cover',
                    display: 'block',
                    margin: '0 auto',
                    transition: 'transform 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.07)',
                    },
                  },
                }}
              >
                <img src={img.imageUrl} alt={portfolioData.title} />
              </Paper>
            );
          })
        ) : (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            ไม่มีรูปภาพสำหรับผลงานนี้
          </Typography>
        )}
      </Box>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button component={Link} href="/portfolio" variant="outlined" color="primary" size="large">
          กลับไปหน้าผลงาน
        </Button>
      </Box>
    </Container>
  );
}
