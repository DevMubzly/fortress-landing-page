import { Button } from "@/components/ui/button";
import { CloudLightning, GitBranch, ArrowRight, Play, Terminal, Code, Server } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate()

  const handleDeployClick = () => {
    navigate("/docs");
  }
  
  return (
    <section className="fixed inset-0 w-screen h-screen flex items-center justify-center overflow-hidden" >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary/30 text-xs animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {/* {['docker run', 'kubectl apply', 'helm install', 'terraform', 'ansible', 'git push'][Math.floor(Math.random() * 6)]} */}
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px] animate-float-slow"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-fast"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full h-[2px] animate-pulse" style={{
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)',
          animation: 'scan 4s linear infinite'
        }}></div>
      </div>
      
      {/* Floating tech elements */}
      {/* <div className="absolute top-20 left-20 w-4 h-4 bg-primary/40 rounded animate-float-slow">
        <Terminal className="w-3 h-3 text-primary-glow m-0.5" />
      </div>
      <div className="absolute bottom-40 right-32 w-6 h-6 bg-accent/30 rounded-lg animate-float-medium">
        <Code className="w-4 h-4 text-accent-glow m-1" />
      </div>
      <div className="absolute top-1/3 right-20 w-5 h-5 bg-primary-glow/30 rounded animate-float-fast">
        <Server className="w-3 h-3 text-primary m-1" />
      </div> */}
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-slide-up backdrop-blur-sm hover:bg-primary/15 transition-all duration-300">
            <CloudLightning className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary tracking-wide">Enterprise-Grade AI Security</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up-delayed">
            Take Back{" "}
            <span className="font-bold bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Control
            </span>{" "}
            of Your AI
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up font-light">
            Run large language models securely{" "}
            <span className="font-medium bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              on-premise
            </span>
            . Open-source, containerized, and built for {" "}
            <span className="font-medium bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              compliance
            </span> {" "}
            {/* <span className="text-accent font-semibold hover:text-accent-glow transition-colors"> GDPR</span>, 
            <span className="text-accent font-semibold hover:text-accent-glow transition-colors"> HIPAA</span>,  */}
            and  {" "}
            <span className="font-medium bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              data sovereignty
            </span> {" "} requirements without exposing your data to third parties
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up-stagger">
            <Button
              // variant="hero"
              size="lg"
              className="text-lg px-8 py-4 group hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-400 to-cyan-600 text-white shadow-lg border-none font-semibold"
              onClick={() => handleDeployClick()}
            >
              <CloudLightning className="h-6 w-6 text-white" />
              Deploy Fortress Today
            </Button>
            <Button
              // variant="outline-hero"
              size="lg"
              className="text-lg px-8 py-4 group hover:scale-105 hover:text-blue-500 hover:bg-transparent  transition-all duration-300 border-2 border-blue-400 text-primary bg-transparent font-semibold"
            >
              <GitBranch className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Join on GitHub
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="text-sm text-muted-foreground animate-fade-in-delayed">
            Trusted by enterprises in <span className="text-accent font-medium hover:text-accent-glow transition-colors cursor-default">banking</span>, 
            <span className="text-accent font-medium hover:text-accent-glow transition-colors cursor-default"> healthcare</span>, and 
            <span className="text-accent font-medium hover:text-accent-glow transition-colors cursor-default"> government</span>
          </div>
        </div>
      </div>
      
      {/* Tech particles */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-accent rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-primary-glow rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent-glow rounded-full animate-ping opacity-50" style={{animationDelay: '2s'}}></div>
      </div> */}
    </section>
  );
};