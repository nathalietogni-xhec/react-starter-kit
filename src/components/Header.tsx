import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-accent" />
          <span className="text-xl font-bold">React App</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">
            Features
          </a>
          <a href="#docs" className="text-sm font-medium hover:text-accent transition-colors">
            Docs
          </a>
          <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </a>
        </nav>
        
        <Button variant="ghost" size="icon">
          <Github className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
