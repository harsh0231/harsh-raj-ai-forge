
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled 
          ? "bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-display font-bold">Harsh Raj</span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground/80 hover:text-accent1 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/80 hover:text-accent1 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-foreground/80 hover:text-accent1 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground/80 hover:text-accent1 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground/80 hover:text-accent1 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground/80 hover:text-accent1 transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="w-5 h-5 text-foreground/80 hover:text-accent1 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="w-5 h-5 text-foreground/80 hover:text-accent1 transition-colors" />
          </a>
          <a href="mailto:harshraj042002@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 text-foreground/80 hover:text-accent1 transition-colors" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-md animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="py-2 text-foreground/80 hover:text-accent1 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-foreground/80 hover:text-accent1 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="py-2 text-foreground/80 hover:text-accent1 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="py-2 text-foreground/80 hover:text-accent1 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="py-2 text-foreground/80 hover:text-accent1 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 text-foreground/80 hover:text-accent1 transition-colors"
            >
              Contact
            </button>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="w-5 h-5 text-foreground/80 hover:text-accent1 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="w-5 h-5 text-foreground/80 hover:text-accent1 transition-colors" />
              </a>
              <a href="mailto:harshraj042002@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-foreground/80 hover:text-accent1 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
