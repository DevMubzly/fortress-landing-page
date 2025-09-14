import { Github, Shield, Code, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useNavigate, useLocation } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 fortress-glass rounded-full px-6 py-2">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <Shield className="h-6 w-6 text-fortress-primary" />
          <span className="font-semibold text-lg">Fortress</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="sm" onClick={handleDocsClick}>
            Docs
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/fortress-ai" target="_blank" rel="noopener noreferrer">
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