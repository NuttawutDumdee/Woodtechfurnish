'use client';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import HeroCompany from './HeroCompany';
import GallerySection from '../components/sections/GallerySection';

export default function CompanyProfilePage() {
    return (
        <div>
            <Navbar />
            <HeroCompany />
            <GallerySection />
            <Footer />
        </div>
    );
}
