import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import About from "./components/AboutPage.jsx";
import ServicePage from "./components/ServicePage.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
      <About />
      <ServicePage />
    </main>
  );
}
