
import { Fragment } from "react";
import { Calendar, MapPin, Brain, Database, Bot } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst",
    company: "Tagbin Services Pvt. Ltd.",
    period: "October 2024 to Present",
    location: "Patna, Bihar",
    description: [
      "Collaborating on a government project under NITI Aayog at BIPARD Gaya.",
      "Integrated and preprocessed public sector data (agriculture, education, etc.) using APIs, OCR (Tesseract), NumPy, and Pandas.",
      "Generated AI-driven insights and created interactive dashboards for policy support."
    ],
    icon: <Database className="w-5 h-5 text-accent1" />
  },
  {
    title: "Data Scientist",
    company: "DATAINTELLIAGE Pvt. Ltd.",
    period: "July 2022 to September 2024",
    location: "Patna, Bihar",
    description: [
      "Developed computer vision models and automated systems.",
      "Used PyQt5, multithreading, and multiprocessing to boost performance.",
      "Implemented automation with ROS2, driving innovation in robotics and embedded systems."
    ],
    icon: <Brain className="w-5 h-5 text-accent2" />
  },
  {
    title: "Data Science Intern",
    company: "Boston Consulting Group (BCG)",
    period: "Internship",
    location: "Remote",
    description: [
      "Performed data analysis with Pandas and NumPy.",
      "Created a random forest model to predict customer churn (85% accuracy).",
      "Delivered executive summaries with actionable insights to the Associate Director."
    ],
    icon: <Bot className="w-5 h-5 text-accent1" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/5 to-transparent"></div>
      
      {/* Animated circuit board lines */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      {/* Floating robotic elements */}
      <div className="absolute h-20 w-20 top-20 left-10 opacity-20 animate-float">
        <div className="h-full w-full rounded-full border-2 border-accent1 flex items-center justify-center">
          <div className="h-1/2 w-1/2 rounded-full bg-accent1/30 animate-pulse"></div>
        </div>
      </div>
      <div className="absolute h-16 w-16 bottom-40 right-20 opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="h-full w-full rounded-full border-2 border-accent2 flex items-center justify-center">
          <div className="h-1/2 w-1/2 rounded-full bg-accent2/30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-accent1/20 via-accent1/50 to-accent2/20"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 md:mb-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:self-end md:ml-auto' : 'md:pl-12 md:text-left'
              } relative animate-fade-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot with pulsing effect */}
              <div 
                className="hidden md:flex md:absolute w-8 h-8 bg-card rounded-full top-6 transform -translate-y-1/2 z-10 shadow-lg border-2 border-accent1 items-center justify-center ultron-glow"
                style={{ 
                  left: index % 2 === 0 ? 'calc(-12px-12px)' : 'auto',
                  right: index % 2 === 1 ? 'calc(-12px-12px)' : 'auto',
                }}
              >
                {exp.icon}
              </div>
              
              <div className={`bg-card shadow-md rounded-lg p-6 md:mb-16 card-hover gradient-border ${
                index % 2 === 0 ? 'md:rounded-tr-none' : 'md:rounded-tl-none'
              }`}>
                <h3 className="font-display text-xl font-semibold">{exp.title}</h3>
                <h4 className="gradient-text font-medium mb-2">{exp.company}</h4>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className={`list-disc ${index % 2 === 0 ? 'md:mr-4 md:ml-8' : 'md:ml-8'} text-foreground/80`}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="mb-2 relative">
                      <span className="relative z-10">{item}</span>
                      {/* Animated highlight on hover */}
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent1/30 group-hover:w-full transition-all duration-300"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* AI/Robotic animation elements */}
      <div className="hidden md:block absolute bottom-10 left-10 opacity-70">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-2 border-accent1 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 border border-accent2 rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute inset-4 border border-accent1/50 rounded-full animate-spin-slow" style={{ animationDelay: "1s" }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-8 h-8 text-accent1 animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute bottom-20 right-10 opacity-70">
        <div className="w-32 h-32 relative">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div 
              key={i} 
              className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent1 to-transparent" 
              style={{ 
                transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                opacity: 0.6 - i * 0.1
              }}
            ></div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-card border border-accent1 flex items-center justify-center ultron-glow">
              <Bot className="w-6 h-6 text-accent2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
