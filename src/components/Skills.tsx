
import { Braces, Database, Brain, Code, Server, Laptop } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Programming",
    icon: <Braces className="w-6 h-6 text-accent1" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 92 },
    ]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-accent2" />,
    skills: [
      { name: "SQL", level: 88 },
      { name: "Data Integration", level: 85 },
      { name: "Data Preprocessing", level: 90 },
    ]
  },
  {
    title: "Machine Learning",
    icon: <Brain className="w-6 h-6 text-accent1" />,
    skills: [
      { name: "Neural Networks", level: 92 },
      { name: "Computer Vision", level: 90 },
      { name: "Model Optimization", level: 85 },
    ]
  },
  {
    title: "NLP",
    icon: <Code className="w-6 h-6 text-accent2" />,
    skills: [
      { name: "LangChain", level: 88 },
      { name: "LLMs", level: 85 },
      { name: "Sentiment Analysis", level: 90 },
    ]
  },
  {
    title: "Embedded Systems",
    icon: <Server className="w-6 h-6 text-accent1" />,
    skills: [
      { name: "ROS2", level: 85 },
      { name: "Multithreading", level: 88 },
      { name: "Automation", level: 90 },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <Laptop className="w-6 h-6 text-accent2" />,
    skills: [
      { name: "PyQt5", level: 85 },
      { name: "Jupyter", level: 95 },
      { name: "scikit-learn", level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg shadow-md p-6 animate-fade-up card-hover gradient-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-background rounded-md">{category.icon}</div>
                <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
