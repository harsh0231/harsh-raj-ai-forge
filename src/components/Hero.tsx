
import { Button } from "@/components/ui/button";
import { Brain, Database, Code, BarChart3 } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-full h-full">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent1/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent2/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Hi, I'm <span className="highlight">Harsh Raj</span>
          </h1>
          <div className="relative h-12 mb-6">
            <div className="typewriter text-2xl md:text-3xl font-display">
              Data Scientist & AI Specialist
            </div>
          </div>
          <p className="text-lg text-foreground/80 mb-8 max-w-xl">
            Specialized in neural networks, computer vision, and embedded systems. 
            Pushing the boundaries of AI innovation for real-world applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-accent1 text-accent1 hover:bg-accent1 hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              View Resume
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 relative">
          <div className="absolute w-[85%] h-[85%] bg-gradient-to-r from-accent1/20 to-accent2/20 blur-xl rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
          <div className="animate-float delay-100 col-span-2 bg-card shadow-xl rounded-xl p-6 text-center card-hover">
            <Brain className="w-10 h-10 mx-auto mb-4 text-accent1" />
            <h3 className="font-display font-semibold mb-2">Neural Networks</h3>
            <p className="text-sm text-foreground/70">Specialized in CNN for computer vision & pose estimation</p>
          </div>
          <div className="animate-float delay-200 bg-card shadow-xl rounded-xl p-6 text-center card-hover">
            <Database className="w-10 h-10 mx-auto mb-4 text-accent2" />
            <h3 className="font-display font-semibold mb-2">Data Analysis</h3>
            <p className="text-sm text-foreground/70">Python, Numpy, Pandas, SQL</p>
          </div>
          <div className="animate-float delay-300 bg-card shadow-xl rounded-xl p-6 text-center card-hover">
            <Code className="w-10 h-10 mx-auto mb-4 text-accent1" />
            <h3 className="font-display font-semibold mb-2">NLP</h3>
            <p className="text-sm text-foreground/70">LangChain, LLMs, Sentiment Analysis</p>
          </div>
          <div className="animate-float delay-400 col-span-2 bg-card shadow-xl rounded-xl p-6 text-center card-hover">
            <BarChart3 className="w-10 h-10 mx-auto mb-4 text-accent2" />
            <h3 className="font-display font-semibold mb-2">ROS2 & Embedded Systems</h3>
            <p className="text-sm text-foreground/70">Expertise in ROS2 architecture & robotics applications</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
