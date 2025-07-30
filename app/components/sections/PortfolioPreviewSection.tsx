// app/components/sections/PortfolioPreviewSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { query } from '@/app/lib/db';

const containImageIds = [223, 208, 190, 120, 107, 145, 247, 287, 274];

interface Portfolio {
    id: number;
    title: string;
    slug: string;
    description: string;
    imageId?: number;
    imageUrl?: string;
}

export default async function PortfolioPreviewSection() {
    const sql = `
        SELECT p.id, p.title, p.slug, p.description, pi.id AS imageId, pi.imageUrl
        FROM portfolio p
        LEFT JOIN portfolio_image pi ON pi.portfolioId = p.id
        GROUP BY p.id
        ORDER BY p.id DESC
        LIMIT 7
    `;
    const portfolios: Portfolio[] = await query(sql);

    return (
        <section className="bg-gray-100 py-12 px-6 md:px-12">
            <div className="w-full flex justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                    ผลงานของเรา (Portfolio Preview)
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {portfolios.map((p) => (
                    <Link
                        key={p.id}
                        href={`/portfolio/${p.slug}`}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        {p.imageUrl ? (
                            <div className="relative w-full h-48 bg-white">
                                <Image
                                    src={p.imageUrl}
                                    alt={p.title}
                                    fill
                                    style={{
                                        objectFit: containImageIds.includes(p.imageId ?? -1) ? 'contain' : 'cover',
                                    }}
                                    sizes="(max-width: 600px) 100vw, 280px"
                                    priority
                                />
                            </div>
                        ) : (
                            <div className="w-full h-48 bg-gray-200 flex justify-center items-center text-gray-600 italic">
                                ไม่มีรูปภาพ
                            </div>
                        )}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1 text-gray-800">{p.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
