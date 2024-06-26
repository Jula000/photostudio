import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import AboutComponent from "./components/AboutComponent";
import ServiceComponent from "./components/ServiceComponent";
import Portfolio from "./components/Portfolio";
import FaqComponent from "./components/FaqComponent";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
      <AboutComponent />
      <ServiceComponent />
      <Portfolio />
      <FaqComponent />
      <Testimonials />
    </main>
  );
}
