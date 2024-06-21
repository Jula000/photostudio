import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
<<<<<<< Updated upstream
=======
import About from "./components/AboutPage.jsx";
import ServicePage from "./components/ServicePage.jsx";
>>>>>>> Stashed changes

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
<<<<<<< Updated upstream
=======
      <About />
      <ServicePage />
>>>>>>> Stashed changes
    </main>
  );
}
