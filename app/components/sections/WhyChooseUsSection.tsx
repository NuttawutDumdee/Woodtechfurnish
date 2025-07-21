'use client';

import { Box, Typography, Paper } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HandshakeIcon from '@mui/icons-material/Handshake';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import GallerySection from './GallerySection';


const reasons = [
  {
    icon: <WorkspacePremiumIcon fontSize="large" color="primary" />,
    title: 'Our Research & Development',
    description:
      'วู้ดเทคฯ ให้ความสำคัญกับการผลิตและพัฒนาสินค้า ตั้งแต่การออกแบบ คัดสรรวัตถุดิบที่ได้คุณภาพและมีมาตรฐาน จนส่งขั้นตอนการส่งมอบและติดตั้ง',
  },
  {
    icon: <DesignServicesIcon fontSize="large" color="primary" />,
    title: 'ออกแบบเฉพาะคุณ',
    description: 'ออกแบบ Built-in เฟอร์นิเจอร์ตามพื้นที่และความต้องการของคุณโดยเฉพาะ',
  },
  {
    icon: <QueryBuilderIcon fontSize="large" color="primary" />,
    title: 'ตรงเวลาและมีมาตรฐาน',
    description: 'ส่งมอบงานได้ทันหรือก่อนกำหนดเวลาลูกค้าไม่ต้องลุ้น หมดปัญหาเรื่องนัดส่งมอบงานและมาพร้อมกับคุณภาพที่ควบคุมได้ในทุกขั้นตอนการผลิต',
  },
  {
    icon: <HandshakeIcon fontSize="large" color="primary" />,
    title: 'บริการหลังการขาย',
    description: 'เรามีทีมดูแลหลังการขายและติดตั้งที่พร้อมให้คำปรึกษาและแนะนำหากพบปัญหาในการใช้งานหรือไม่ได้รับความสะดวกในการใช้งาน',
  },
];


export default function WhyChooseUsSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, backgroundColor: '#FAFAFA' }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="text.primary"
        gutterBottom
      >
        ทำไมต้องเลือกใช้บริการกับเรา?
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        maxWidth={600}
        mx="auto"
        mb={6}
        sx={{ wordWrap: 'break-word' }}
      >
        เหตุผลที่ลูกค้าไว้วางใจใช้บริการกับเราในการตกแต่งบ้านและคอนโดให้สมบูรณ์แบบ
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {reasons.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              flex: '1 1 260px', // กำหนดขั้นต่ำและขยายได้
              maxWidth: 320,
              p: 3,
              textAlign: 'center',
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6,
              },
              boxSizing: 'border-box',
              minHeight: 280,
            }}
          >
            <Box sx={{ mb: 2 }}>{item.icon}</Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ minHeight: 48 }} // กำหนดสูงขั้นต่ำให้ title เท่ากัน
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ wordBreak: 'break-word', flexGrow: 1 }}
            >
              {item.description}
            </Typography>
          </Paper>
        ))}
      </Box>

      <GallerySection image={'/Images/Gallery2.jpg'} />
    </Box>
  );
}