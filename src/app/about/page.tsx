import AboutPage from "@/components/AboutPage/About";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Journey from "@/components/AboutPage/Journey";
import Testimonials from "@/components/HomePage/Testimonials";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <AboutPage />
      <Journey />
      <Testimonials />
      <Footer />
    </main>
  );
}
