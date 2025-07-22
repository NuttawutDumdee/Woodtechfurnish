// app/page.tsx
import HeroSection from "./components/sections/HeroSection";
import GallerySection from "./components/sections/GallerySection";
import CustomerReviewsSection from "./components/review1/CustomerReviewsSection";
import Navbar from "./components/Navbar/Navbar";
import PortfolioPreviewSection from "./components/sections/PortfolioPreviewSection";
import Footer from "./components/Footer";
import OurProcessSection from "./components/sections/OurProcessSection";
import SocialButtons from "./components/sections/Menu";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";

export default function HomePage() {
  return (
    <main className="space-y-20">
      <Navbar />

      <HeroSection />

      <GallerySection image={'/images/Gallery4.jpg'} />

      <GallerySection image={'/images/Gallery1.jpg'} />

      <GallerySection image={'/images/Gallery5.jpg'} />

      <PortfolioPreviewSection />

      <WhyChooseUsSection />

      <OurProcessSection />

      <CustomerReviewsSection />

      <SocialButtons />

      <Footer />
    </main>
  );
}
