import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ContentShowcase from "@/components/landing/ContentShowcase";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ReasonsSection from "@/components/landing/ReasonsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ContentShowcase />
        <FeaturesSection />
        <TestimonialsSection />
        <ReasonsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
