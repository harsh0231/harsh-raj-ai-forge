
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-display font-bold text-xl mb-2">Harsh Raj</h3>
            <p className="text-foreground/70">Data Scientist & AI Specialist</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card p-2 rounded-full hover:bg-accent1 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card p-2 rounded-full hover:bg-accent1 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:harshraj042002@gmail.com" 
                className="bg-card p-2 rounded-full hover:bg-accent1 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-sm text-foreground/70 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in 2025
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center">
          <p className="text-sm text-foreground/70">
            &copy; {new Date().getFullYear()} Harsh Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
