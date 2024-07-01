import HeroSection from "../components/HomePage/Hero";
import Header from "../components/common/Header";
import PhotoGrid from "../components/HomePage/PhotoGrid";
import AboutSection from "../components/HomePage/About";
import ServiceSection from "../components/HomePage/Service";
import Portfolio from "../components/HomePage/Portfolio";
import FaqSection from "../components/HomePage/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
      <AboutSection />
      <ServiceSection />
      <Portfolio />
      <FaqSection />
    </main>
  );
}
