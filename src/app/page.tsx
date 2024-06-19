import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <HeroSection />
      <PhotoGrid />
    </main>
  );
}
