import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { useEffect } from "react";

const Index = () => {
  // useEffect(() => {
  //   document.documentElement.classList.remove("dark");
  //   document.documentElement.classList.add("light");
  // }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default Index;
