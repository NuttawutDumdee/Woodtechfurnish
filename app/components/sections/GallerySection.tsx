// components/GallerySection.tsx (Server Component, รองรับ SSG)

interface GallerySectionProps {
    image: string;
    alt?: string;
}

export default function GallerySection({ image, alt = "Gallery Image" }: GallerySectionProps) {
    return (
        <section className="relative w-full aspect-[16/9] mt-6 rounded-xl overflow-hidden shadow-lg border border-red-500">
            <img
                src={image}
                alt={alt}
                width={1200}
                height={675}
                className="object-cover w-full h-auto rounded-xl shadow-lg"
            />
        </section>
    );
}
