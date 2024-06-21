import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import About from "./components/AboutPage.jsx";
<<<<<<< Updated upstream:src/app/page.tsx
=======
import ServicePage from "./components/ServicePage.jsx";
import Portfolio from "./components/Portfolio.jsx";
>>>>>>> Stashed changes:src/app/page.jsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
      <About />
<<<<<<< Updated upstream:src/app/page.tsx
=======
      <ServicePage />
      <Portfolio />
>>>>>>> Stashed changes:src/app/page.jsx
    </main>
  );
}
