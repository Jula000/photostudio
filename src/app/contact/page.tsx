import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/HomePage/Testimonials";
import Contact from "@/components/ContactPage/ContactSection";
import ContactForm from "@/components/ContactPage/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <Contact />
      <ContactForm />
      <Testimonials />
      <Footer />
    </main>
  );
}
