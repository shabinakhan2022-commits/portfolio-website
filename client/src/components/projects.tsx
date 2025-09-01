import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, and order management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics. Built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Vue.js", "Express", "Socket.io", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Analytics",
    description: "Beautiful weather application with detailed forecasts, interactive maps, and climate data visualization. Responsive design for all devices.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "D3.js", "API", "PWA"],
    liveUrl: "#",
    githubUrl: "#"
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
      className={`project-card bg-card rounded-2xl border border-border overflow-hidden transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'opacity-0'
      }`}
      data-testid={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
    >
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs"
              data-testid={`tech-${tech.toLowerCase()}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            data-testid={`live-demo-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            data-testid={`github-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
          >
            <Github size={16} />
            Code
          </a>
        </div>
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
      className="py-20 bg-card/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-heading">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my technical skills and creative problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                delay={0.2 + index * 0.2}
              />
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              data-testid="view-all-projects"
            >
              View All Projects <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
