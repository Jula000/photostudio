import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import AboutSection from "./components/AboutSection";
import ServiceComponent from "./components/ServiceComponent";
import Portfolio from "./components/Portfolio";
import FaqComponent from "./components/FaqComponent";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
      <AboutSection />
      <ServiceComponent />
      <Portfolio />
      <FaqComponent />
      <Testimonials />
      <Footer />
    </main>
  );
}
