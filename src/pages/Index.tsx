import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TariffComparison from "@/components/TariffComparison";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TariffComparison />
      <Benefits />
      <HowItWorks />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
