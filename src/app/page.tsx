import HeroSection from "../components/HomePage/Hero/HeroSection";
import Header from "../components/common/Header";
import PhotoGrid from "../components/HomePage/PhotoGrid/PhotoGrid";
import AboutComponent from "../components/HomePage/About/AboutComponent";
import ServiceComponent from "../components/HomePage/Service/ServiceComponent";
import Portfolio from "../components/HomePage/Portfolio/Portfolio";
import FaqComponent from "../components/HomePage/FAQ/FaqComponent";

export default function home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
      <AboutComponent />
      <ServiceComponent />
      <Portfolio />
      <FaqComponent />
    </main>
  );
}
