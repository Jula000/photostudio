import AboutPage from "../../components/aboutPage/AboutPage";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function about() {
  return (
    <main className="flex min-h-screen flex-col bg-main-color">
      <Header />
      <AboutPage />
      <Footer />
    </main>
  );
}
