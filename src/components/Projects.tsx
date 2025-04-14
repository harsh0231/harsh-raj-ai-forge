
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Forecast Bike Rentals",
    description: "Developed a predictive model to forecast bike rental demand using time series analysis and machine learning algorithms.",
    tags: ["Python", "Machine Learning", "Time Series", "Pandas"],
    githubLink: "https://github.com",
    image: "/placeholder.svg"
  },
  {
    title: "Celebrity Look-alike with Computer Vision",
    description: "Created an application to identify celebrity look-alikes using advanced computer vision techniques and facial recognition algorithms.",
    tags: ["Computer Vision", "Python", "Deep Learning", "CNN"],
    githubLink: "https://github.com",
    image: "/placeholder.svg"
  },
  {
    title: "Churn Emails Inbox with Python",
    description: "Built a system to categorize and manage email churn using NLP techniques and classification algorithms.",
    tags: ["Python", "NLP", "Classification", "Email Processing"],
    githubLink: "https://github.com",
    image: "/placeholder.svg"
  },
  {
    title: "Sentiment Analyzer",
    description: "Developed a sentiment analysis tool with a Python-based GUI for analyzing text sentiment in real-time.",
    tags: ["NLP", "Python", "GUI", "Text Analysis"],
    githubLink: "https://github.com",
    image: "/placeholder.svg"
  },
  {
    title: "Classify Clothes from MNIST Dataset",
    description: "Implemented machine learning techniques to classify fashion articles from the MNIST dataset, associated with IIT Roorkee.",
    tags: ["ML", "Python", "CNN", "Classification"],
    githubLink: "https://github.com",
    image: "/placeholder.svg"
  },
  {
    title: "Face Recognition System",
    description: "Developed an advanced face recognition system designed to automate and enhance the processes of employee attendance tracking and security monitoring.",
    tags: ["Computer Vision", "Flask", "Multi-threading", "Security"],
    githubLink: "https://github.com",
    image: "/placeholder.svg"
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
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
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
                  <Button variant="outline" size="sm" className="group" asChild>
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
    </section>
  );
};

export default Projects;
