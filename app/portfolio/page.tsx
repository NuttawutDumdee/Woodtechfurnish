import Link from 'next/link';
import { query } from '../lib/db';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import clsx from 'clsx';
import { ComicText } from "@/components/magicui/comic-text";

interface PortfolioItem {
    id: number;
    slug: string;
    title: string;
    description: string;
    image_url?: string | null;
}

const containImageIds = [223]; // ← ใส่ id ที่ต้องการให้แสดงภาพขนาดจริง

export default async function PortfolioPage() {
    const sql = `
    SELECT p.id, p.slug, p.title, p.description,
      (SELECT pi.imageUrl FROM portfolio_image pi WHERE pi.portfolioId = p.id LIMIT 1) AS image_url
    FROM portfolio p
    ORDER BY p.id DESC
  `;

    const portfolios: PortfolioItem[] = await query(sql);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-100">
            <Navbar />
            <main className="max-w-7xl mx-auto flex-grow px-6 sm:px-10 py-20">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-16 text-gray-900 tracking-wide drop-shadow-md">
                    <ComicText>Portfolio</ComicText>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                    {portfolios.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/portfolio/${item.slug}`}
                            className="group block rounded-3xl bg-white shadow-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-300 overflow-hidden"
                            aria-label={`ดูรายละเอียดผลงาน ${item.title}`}
                            tabIndex={0}
                        >
                            <div className="relative w-full aspect-auto overflow-hidden rounded-t-3xl shadow-inner flex items-center justify-center bg-white">
                                {item.image_url ? (
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className={clsx(
                                            'transition-transform duration-700 ease-in-out',
                                            {
                                                'object-contain max-h-80 w-auto h-auto': containImageIds.includes(item.id),
                                                'object-cover w-full h-full group-hover:scale-110 group-hover:brightness-90': !containImageIds.includes(item.id),
                                            }
                                        )}
                                    />
                                ) : (
                                    <div className="w-full h-80 bg-gray-100 flex items-center justify-center text-gray-400 italic font-semibold select-none">
                                        ไม่มีรูปภาพ
                                    </div>
                                )}
                            </div>

                            <div className="p-8">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-gray-700 text-sm sm:text-base line-clamp-5 leading-relaxed">
                                    {item.description}
                                </p>
                                <button
                                    className="mt-6 inline-block px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold text-sm shadow-lg hover:bg-indigo-700 transition-colors duration-300"
                                    aria-label={`ดูรายละเอียดเพิ่มเติมของผลงาน ${item.title}`}
                                >
                                    ดูรายละเอียด
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
