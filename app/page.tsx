// app/page.tsx
import HeroSection from "./components/sections/HeroSection";
import GallerySection from "./components/sections/GallerySection";
import CustomerReviewsSection from "./components/review1/CustomerReviewsSection";
import Navbar from "./components/Navbar/Navbar";
import PortfolioPreviewSection from "./components/sections/PortfolioPreviewSection";
import Footer from "./components/Footer";
import SocialButtons from "./components/sections/Menu";
import { TimelineDemo } from "./components/TimelineDemo";

export default function HomePage() {
  return (
    <main className="space-y-20">
      <Navbar />

      <HeroSection />

      <GallerySection />

      <TimelineDemo />

      <PortfolioPreviewSection />

      <CustomerReviewsSection />

      <SocialButtons />

      <Footer />
    </main>
  );
}
