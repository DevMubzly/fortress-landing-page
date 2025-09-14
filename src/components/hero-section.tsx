import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 relative overflow-hidden net-pattern">
      <div className="max-w-6xl mx-auto text-center relative z-10 pt-24">
        {/* Subheading */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
          <Shield className="h-5 w-5 text-fortress-accent" />
          <span className="text-sm font-medium text-fortress-muted uppercase tracking-wider">
            Enterprise Grade AI Security
          </span>
        </div>

        {/* Main Heading */}
        <div className="animate-fade-in delay-200">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-foreground leading-tight">
            Take back control
            <br />
            of your AI
          </h1>
          
          <p className="text-2xl md:text-3xl mb-6 text-foreground max-w-5xl mx-auto leading-relaxed">
            <span className="bg-fortress-primary text-white px-4 py-1 rounded-lg font-semibold">
              Run Large language models securely on premise
            </span>
          </p>
          
          <p className="text-xl md:text-2xl text-fortress-muted mb-12 max-w-4xl mx-auto">
            Open source containerised, and built for compliance and data sovereignty requirements
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in delay-500 mb-16">
          <Button 
            variant="fortress" 
            size="lg" 
            className="px-12 py-4 font-bold text-xl rounded-full" 
            onClick={() => navigate('/docs')}
          >
            Deploy Fortress Today
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="animate-fade-in delay-700">
          <p className="text-lg text-fortress-muted font-medium">
            Trusted by enterprises in banking, healthcare and government
          </p>
        </div>
      </div>
    </section>
  );
}