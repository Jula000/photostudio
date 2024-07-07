import AboutSection from "@/components/AboutPage/AboutSection";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Journey from "@/components/AboutPage/Journey";
import Testimonials from "@/components/HomePage/Testimonials";

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-main-color">
      <Header />
      <AboutSection />
      <Journey />
      <Testimonials />
      <Footer />
    </main>
  );
}
