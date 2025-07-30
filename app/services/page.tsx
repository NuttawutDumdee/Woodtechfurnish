'use client';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import OurProcessSection from '../components/sections/OurProcessSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import BuiltinHeroSection from './BuiltinHeroSection';
import CallToActionSection from './CallToActionSection';

export default function ServicesPage() {
    return (
        <div>
            <Navbar />

            <BuiltinHeroSection />

            <WhyChooseUsSection />

            <CallToActionSection />

            <OurProcessSection />

            <Footer />
        </div>
    )
}
