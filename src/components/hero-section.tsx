import { Shield, Server, Lock, Monitor, GitBranch, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/fortress-hero.jpg";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 fortress-hero-bg relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)'
        }}
      />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Hero Content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-fortress-primary to-fortress-accent bg-clip-text text-transparent">
            Private AI Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-fortress-muted mb-8 max-w-4xl mx-auto">
            Run large language models securely on-premise. Open-source, containerized, and built for compliance.
          </p>
        </div>

        {/* Problem/Solution Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-in">
          <Card className="fortress-card-bg border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">The Problem</h3>
              </div>
              <p className="text-fortress-muted">
                Cloud APIs expose sensitive data to third parties. Every prompt leaves your secure perimeter.
              </p>
            </CardContent>
          </Card>

          <Card className="fortress-card-bg border-fortress-accent">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-fortress-accent mr-3" />
                <h3 className="text-xl font-semibold">The Solution</h3>
              </div>
              <p className="text-fortress-muted">
                Fortress keeps your AI workloads inside your infrastructure. Complete control, zero data leakage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="fortress-elevated rounded-lg p-6 animate-fade-in delay-300">
            <Server className="h-8 w-8 text-fortress-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Containerized Models</h4>
            <p className="text-sm text-fortress-muted">Deploy LLMs in Docker containers with automatic scaling</p>
          </div>
          <div className="fortress-elevated rounded-lg p-6 animate-fade-in delay-500">
            <Monitor className="h-8 w-8 text-fortress-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">API Gateway</h4>
            <p className="text-sm text-fortress-muted">OpenAI-compatible endpoints with key management</p>
          </div>
          <div className="fortress-elevated rounded-lg p-6 animate-fade-in delay-700">
            <GitBranch className="h-8 w-8 text-fortress-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Model Hub</h4>
            <p className="text-sm text-fortress-muted">Fine-tune and version your custom models</p>
          </div>
        </div>

        {/* Compliance & Open Source */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="fortress-card-bg">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-fortress-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Compliance Ready</h3>
              <div className="space-y-2 text-sm text-fortress-muted">
                <div>✓ GDPR Compliant</div>
                <div>✓ HIPAA Compatible</div>
                <div>✓ Uganda Data Protection Act</div>
                <div>✓ SOC 2 Ready</div>
              </div>
            </CardContent>
          </Card>

          <Card className="fortress-card-bg">
            <CardContent className="p-6">
              <GitBranch className="h-8 w-8 text-fortress-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Open Source</h3>
              <p className="text-sm text-fortress-muted mb-4">
                Built by the community, for the community. Contribute, audit, and extend.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/fortress-ai" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-pulse-glow">
          <Button 
            variant="fortress" 
            size="lg" 
            className="px-8 py-3 font-bold text-lg" 
            onClick={() => navigate('/docs')}
          >
            Deploy Fortress Today
          </Button>
          <Button variant="fortress-outline" size="lg" className="px-8 py-3" asChild>
            <a href="https://github.com/fortress-ai" target="_blank" rel="noopener noreferrer">
              Join on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}