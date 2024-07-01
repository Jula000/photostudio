import AboutPage from "../../components/AboutPage";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <AboutPage />
      <Footer />
    </main>
  );
}
