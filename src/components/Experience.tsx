
import { Fragment } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Scientist",
    company: "DATAINTELLIAGE pvt.ltd",
    period: "October 2024 to Present",
    location: "Patna, Bihar",
    description: [
      "Led the implementation of computer vision models to streamline operations, enhancing process efficiencies and operational capabilities.",
      "Engineered advanced automation systems, incorporating PyQt5 for seamless user interfaces.",
      "Utilized multithreading and multiprocessing to optimize performance and responsiveness.",
      "Developed and optimized automation processes using ROS2, elevating the efficacy and efficiency of robotics projects.",
      "Pushed the boundaries of automation technology, driving innovation in robotics and embedded systems."
    ]
  },
  {
    title: "Data Analyst",
    company: "TagbinServices Pvt. Ltd.",
    period: "July 2022 to September 2024",
    location: "Patna, Bihar",
    description: [
      "Collaborated on a government project at BIPARD Gaya, under NITI Aayog's framework, to integrate and preprocess data from various public sector departments using APIs, OCR (Tesseract), and Python libraries.",
      "Ingested processed data into AI systems within the GenNext Lab to generate actionable insights, visualized through interactive dashboards and graphs to support policy-making and governance."
    ]
  },
  {
    title: "Data Scientist Intern",
    company: "Boston Consulting Group",
    period: "Internship",
    location: "Remote",
    description: [
      "Conducted efficient data analysis using Python, including Pandas and NumPy. Employed data visualization techniques for insightful trend interpretation.",
      "Completed the engineering and optimization of a random forest model, achieving an 85% accuracy rate in predicting customer churn.",
      "Completed a concise executive summary for the Associate Director, delivering actionable insights for informed decision-making based on the analysis."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/5 to-transparent"></div>
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
              {/* Timeline dot */}
              <div className="hidden md:block absolute w-4 h-4 bg-gradient-to-r from-accent1 to-accent2 rounded-full top-6 transform -translate-y-1/2 z-10 shadow-lg
                            border-4 border-background animate-pulse"
                   style={{ 
                     left: index % 2 === 0 ? 'calc(-12px-8px)' : 'auto',
                     right: index % 2 === 1 ? 'calc(-12px-8px)' : 'auto',
                    }}
              >
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
                
                <ul className={`list-disc ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'} text-foreground/80`}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
