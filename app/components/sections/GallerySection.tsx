// components/GallerySection.tsx (Server Component, รองรับ SSG)
import Image from "next/image";

interface GallerySectionProps {
    image: string;
    alt?: string;
}

export default function GallerySection({ image, alt = "Gallery Image" }: GallerySectionProps) {
    return (
        <section className="relative w-full aspect-[16/9] mt-6 rounded-xl overflow-hidden shadow-lg">
            <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                priority
            />
        </section>
    );
}
