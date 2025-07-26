import { query } from '@/app/lib/db';
import { Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ParallaxScroll } from '@/app/components/ui/parallax-scroll';

interface Portfolio {
  id: number;
  slug: string;
  title: string;
  description: string;
  images: { id: number; imageUrl: string }[];
}

const containImageIds = [223, 208, 190, 120, 107, 145, 247, 287, 274];

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const portfolios = await query('SELECT slug FROM portfolio');
  return portfolios.map((p: { slug: string }) => ({
    slug: p.slug,
  }));
}

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const portfolios = await query('SELECT * FROM portfolio WHERE slug = ?', [slug]);

  if (!portfolios || portfolios.length === 0) {
    notFound();
  }

  const portfolio = portfolios[0];

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
          <Box sx={{ mt: 2, mb: 6, textAlign: 'left' }}>
      <Button
        component={Link}
        href="/portfolio"
        variant="outlined"
        // startIcon={<ArrowBackIcon />}
        size="large"
        sx={{
          borderRadius: 8,
          px: 3,
          py: 1.5,
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          borderColor: 'primary.main',
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.main',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderColor: 'primary.main',
          },
        }}
      >
        กลับไปหน้าผลงาน
      </Button>
    </Box>
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

      {portfolioData.images.length > 0 ? (
        <ParallaxScroll
          images={portfolioData.images.map((img) => ({
            src: img.imageUrl,
            contain: containImageIds.includes(img.id),
          }))}
        />
      ) : (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          ไม่มีรูปภาพสำหรับผลงานนี้
        </Typography>
      )}


    </Container>
  );
}
