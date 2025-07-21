import './globals.css'; // ไฟล์ global styles (ถ้ามี)
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Website Title',
  description: 'Your website description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
