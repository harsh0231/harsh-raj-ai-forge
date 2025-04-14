
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Forecast Bike Rentals",
    description: "Developed a predictive model to forecast bike rental demand using time series analysis and machine learning algorithms.",
    tags: ["Python", "Machine Learning", "Time Series", "Pandas"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Celebrity Look-alike with Computer Vision",
    description: "Created an application to identify celebrity look-alikes using advanced computer vision techniques and facial recognition algorithms.",
    tags: ["Computer Vision", "Python", "Deep Learning", "CNN"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHJlY29nbml0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Churn Emails Inbox with Python",
    description: "Built a system to categorize and manage email churn using NLP techniques and classification algorithms.",
    tags: ["Python", "NLP", "Classification", "Email Processing"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1526554850534-7c78330d5f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Sentiment Analyzer",
    description: "Developed a sentiment analysis tool with a Python-based GUI for analyzing text sentiment in real-time.",
    tags: ["NLP", "Python", "GUI", "Text Analysis"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1546091648-c222cba1af82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5hbHlzaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Classify Clothes from MNIST Dataset",
    description: "Implemented machine learning techniques to classify fashion articles from the MNIST dataset, associated with IIT Roorkee.",
    tags: ["ML", "Python", "CNN", "Classification"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMGNsYXNzaWZpY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Face Recognition System",
    description: "Developed an advanced face recognition system designed to automate and enhance the processes of employee attendance tracking and security monitoring.",
    tags: ["Computer Vision", "Flask", "Multi-threading", "Security"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1562592306-59ae2242235a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2UlMjByZWNvZ25pdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg overflow-hidden shadow-md animate-fade-up card-hover border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent1/10 to-card/80 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Tech circuit overlay */}
                <div className="absolute inset-0 tech-circuit opacity-30 mix-blend-overlay"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-background">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group ultron-glow" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover:text-accent1 transition-colors" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add some Age of Ultron themed decorative elements */}
      <div className="hidden md:block absolute -bottom-10 right-20 opacity-20">
        <div className="relative h-40 w-40 neural-path">
          <div className="absolute inset-0 rounded-full border border-accent1/30 animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full border border-accent2/30 animate-spin-slow-reverse"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
