import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react";

interface Project {
  title: string;
  description: string;
  gradient: string;
  bgColor: string;
  borderColor: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "This is my personal portfolio showcasing my skills and projects.",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    title: "Blog Platform", 
    description: "A full-stack blog platform with authentication and CRUD features.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10", 
    borderColor: "border-blue-500/20"
  }
];

function ProjectCard({ project, delay, index }: { project: Project; delay: number; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`project-card relative group transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'opacity-0'
      }`}
      data-testid={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
    >
      {/* Main card */}
      <div className={`glass-effect p-8 rounded-2xl border ${project.borderColor} relative overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:-rotate-1`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}></div>
        
        {/* Decorative elements */}
        <div className={`absolute top-4 right-4 w-12 h-12 ${project.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Zap className="w-6 h-6 text-primary" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1 ${project.bgColor} rounded-full text-xs font-medium text-primary mb-4`}>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Featured Project
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          
          {/* Action buttons */}
          <div className="flex gap-3 pt-4 border-t border-border/50">
            <button className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
              <ExternalLink className="w-4 h-4" />
              View Project
            </button>
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary/20 rounded-full floating opacity-50"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary/30 rounded-full floating opacity-30" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-card/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 right-20 w-28 h-28 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">My Work</span>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-heading">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of applications I've built with passion and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                delay={0.2 + index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}