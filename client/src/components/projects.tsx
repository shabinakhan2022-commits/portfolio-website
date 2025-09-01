import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "This is my personal portfolio showcasing my skills and projects."
  },
  {
    title: "Blog Platform", 
    description: "A full-stack blog platform with authentication and CRUD features."
  }
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
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
      className={`project-card glass-effect p-6 rounded-lg gradient-border transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'opacity-0'
      }`}
      data-testid={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
    >
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>
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
      className="py-20 bg-card/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-heading">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                delay={0.2 + index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}