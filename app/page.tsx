import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import WindowConfigurator from "@/components/WindowConfigurator";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <WindowConfigurator />
      {/* <TestimonialsSection /> */}
      <QuoteForm />
    </div>
  );
}
