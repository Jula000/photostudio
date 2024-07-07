import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PortfolioSection from "@/components/PortfolioPage/PortfolioSection";
import PhotographySection from "@/components/PortfolioPage/PhotographySection";
import FaqSection from "@/components/HomePage/FaqSection";
import Testimonials from "@/components/HomePage/Testimonials";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <PortfolioSection />
      <PhotographySection />
      <FaqSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
