// app/components/sections/PortfolioPreviewSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { query } from '@/app/lib/db';

interface Portfolio {
    id: number;
    title: string;
    slug: string;
    description: string;
    imageUrl?: string; // รูปภาพแรก (ถ้ามี)
}

export default async function PortfolioPreviewSection() {
    // ดึง portfolio พร้อมรูปภาพแรก (LEFT JOIN)
    const sql = `
    SELECT p.id, p.title, p.slug, p.description, pi.imageUrl
    FROM portfolio p
    LEFT JOIN portfolio_image pi ON pi.portfolioId = p.id
    GROUP BY p.id
    ORDER BY p.id DESC
    LIMIT 7
  `;
    const portfolios: Portfolio[] = await query(sql);

    return (
        <section style={{ padding: '2rem' }}>
            <h2>ผลงานของเรา (Portfolio Preview)</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '1rem',
                }}
            >
                {portfolios.map((p) => (
                    <Link
                        key={p.id}
                        href={`/portfolio/${p.slug}`}
                        style={{
                            display: 'block',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        {p.imageUrl ? (
                            <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                                <Image
                                    src={p.imageUrl}
                                    alt={p.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 600px) 100vw, 280px"
                                    priority
                                />
                            </div>
                        ) : (
                            <div
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    backgroundColor: '#ddd',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#666',
                                    fontStyle: 'italic',
                                }}
                            >
                                ไม่มีรูปภาพ
                            </div>
                        )}
                        <div style={{ padding: '0.8rem 1rem' }}>
                            <h3 style={{ margin: '0 0 0.5rem 0' }}>{p.title}</h3>
                            <p
                                style={{
                                    margin: 0,
                                    color: '#555',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {p.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
