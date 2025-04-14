
import { Award, BookOpen, BriefcaseBusiness } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent1/5 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-accent2/5 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-lg mb-6">
              I'm an experienced <span className="gradient-text font-semibold">Data Scientist</span> with a passion for 
              pushing the boundaries of AI technology. My expertise spans neural networks, computer vision, and 
              embedded systems, with a particular focus on deploying CNNs for pose estimation and utilizing 
              advanced NLP techniques.
            </p>
            <p className="text-lg mb-6">
              I've worked extensively with <span className="gradient-text font-semibold">ROS2 (Humble Hawksbill)</span> on 
              Ubuntu OS, developing an in-depth understanding of nodes, topics, and the overall ROS2 architecture. 
              This knowledge has been instrumental in creating innovative solutions for complex robotics challenges.
            </p>
            <p className="text-lg">
              I'm driven by a commitment to leveraging cutting-edge technologies to create practical AI applications 
              that solve real-world problems. My approach combines technical expertise with a keen eye for 
              business applications, allowing me to deliver solutions that are both innovative and impactful.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-card shadow-md rounded-lg p-6 animate-fade-up delay-100 card-hover gradient-border">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent1/10 to-accent2/10 p-3 rounded-md">
                  <BriefcaseBusiness className="w-6 h-6 gradient-text" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Professional Experience</h3>
                  <p className="text-foreground/80">
                    Currently working as a Data Scientist at DATAINTELLIAGE pvt.ltd, with previous experience 
                    at TagbinServices and Boston Consulting Group.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card shadow-md rounded-lg p-6 animate-fade-up delay-200 card-hover gradient-border">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent2/10 to-accent1/10 p-3 rounded-md">
                  <BookOpen className="w-6 h-6 gradient-text" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Education</h3>
                  <p className="text-foreground/80">
                    Pursuing a Postgraduate Diploma in Data Science and AI from IIT Roorkee. 
                    Bachelor's Degree in Commerce (Accounting Honors) from Patliputra University.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card shadow-md rounded-lg p-6 animate-fade-up delay-300 card-hover gradient-border">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent1/10 to-accent2/10 p-3 rounded-md">
                  <Award className="w-6 h-6 gradient-text" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Certifications</h3>
                  <p className="text-foreground/80">
                    Certified in ROS2 Nav2 [Navigation 2 Stack] and Self-driving and ROS2 from Udemy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
