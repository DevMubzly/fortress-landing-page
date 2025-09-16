import { Github, CloudLightning, Code, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useNavigate, useLocation } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  }

  const handleDocsClick = () => {
    if (location.pathname === '/') {
      // Smooth scroll to docs section on homepage
      const docsElement = document.getElementById('docs');
      if (docsElement) {
        docsElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If no docs section on homepage, navigate to docs page
        navigate('/docs');
      }
    } else {
      navigate('/docs');
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 fortress-glass border-b border-border/50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <CloudLightning className="h-6 w-6 text-fortress-primary" />
          <span className="font-semibold text-xl">Fortress</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <Button variant="ghost" size="sm" onClick={handleHomeClick}>
            Home
          </Button>
          <Button variant="ghost" size="sm" onClick={handleDocsClick}>
            Docs
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/DevMubzly/fortress-stack-v1.git" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}