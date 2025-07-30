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

  // ดึงข้อมูล portfolio ปัจจุบัน
  const portfolios = await query('SELECT * FROM portfolio WHERE slug = ?', [slug]);
  if (!portfolios || portfolios.length === 0) notFound();
  const portfolio = portfolios[0];

  // ดึงรูปภาพ
  const images = await query(
    'SELECT id, imageUrl FROM portfolio_image WHERE portfolioId = ?',
    [portfolio.id]
  );
  const portfolioData: Portfolio = {
    ...portfolio,
    images,
  };

  // ดึง slug ทั้งหมดเพื่อหาตำแหน่ง index
  const allSlugs = await query('SELECT slug FROM portfolio ORDER BY id DESC');
  const slugList = allSlugs.map((p: { slug: string }) => p.slug);
  const currentIndex = slugList.findIndex((s: string) => s === slug);
  const prevSlug = currentIndex > 0 ? slugList[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugList.length - 1 ? slugList[currentIndex + 1] : null;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* กลุ่มปุ่มทั้งหมดบนบรรทัดเดียวกัน */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
        {/* ปุ่มกลับไปหน้าผลงาน ด้านซ้าย */}
        <Button
          component={Link}
          href="/portfolio"
          variant="outlined"
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
          ← กลับไปหน้าผลงาน
        </Button>

        {/* กลุ่มปุ่มถัดไป/กลับ ด้านขวา */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {prevSlug && (
            <Button
              component={Link}
              href={`/portfolio/${prevSlug}`}
              variant="outlined"
              sx={{
                borderRadius: 8,
                px: 3,
                py: 1.5,
                fontWeight: 'bold',
              }}
            >
              ← กลับ
            </Button>
          )}

          {nextSlug && (
            <Button
              component={Link}
              href={`/portfolio/${nextSlug}`}
              variant="contained"
              sx={{
                borderRadius: 8,
                px: 3,
                py: 1.5,
                fontWeight: 'bold',
              }}
            >
              ถัดไป →
            </Button>
          )}
        </Box>
      </Box>

      {/* หัวข้อผลงาน */}
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

      {/* คำอธิบาย */}
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

      {/* รูปภาพ */}
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
