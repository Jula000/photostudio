import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FaqSection from "@/components/HomePage/FaqSection";
import ServicesSection from "@/components/ServicesPage/ServicesSection";
import Prices from "@/components/ServicesPage/Prices";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <ServicesSection />
      <Prices />
      <FaqSection />
      <Footer />
    </main>
  );
}
