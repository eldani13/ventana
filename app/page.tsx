import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import WindowConfigurator from "@/components/WindowConfigurator";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <WindowConfigurator />
      {/* <TestimonialsSection /> */}
      <QuoteForm />
      <Footer />
    </main>
  );
}
