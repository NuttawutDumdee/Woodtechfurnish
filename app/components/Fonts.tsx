'use client';

import { Kanit, Sarabun } from 'next/font/google';

export const kanit = Kanit({
  subsets: ['thai'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-kanit',
});

export const sarabun = Sarabun({
  subsets: ['thai'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-sarabun',
});

// Component wrapper เพื่อใช้ครอบส่วนที่ต้องการฟอนต์ Kanit
export function KanitFont({ children }: { children: React.ReactNode }) {
  return <div className={kanit.className}>{children}</div>;
}

// Component wrapper เพื่อใช้ครอบส่วนที่ต้องการฟอนต์ Sarabun
export function SarabunFont({ children }: { children: React.ReactNode }) {
  return <div className={sarabun.className}>{children}</div>;
}
