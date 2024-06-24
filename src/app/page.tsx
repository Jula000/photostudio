import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import AboutComponent from "./components/AboutComponent";
import ServiceComponent from "./components/ServiceComponent";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
      <AboutComponent />
      <ServiceComponent />
      <Portfolio />
    </main>
  );
}
