import { useEffect, useRef, useState } from "react";
import { Palette, Server, Cloud } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
  delay: number;
}

const skillCategories = {
  frontend: [
    { name: "React.js", percentage: 95, delay: 0.1 },
    { name: "TypeScript", percentage: 90, delay: 0.2 },
    { name: "Tailwind CSS", percentage: 92, delay: 0.3 },
    { name: "Next.js", percentage: 88, delay: 0.4 },
  ],
  backend: [
    { name: "Node.js", percentage: 93, delay: 0.5 },
    { name: "Express.js", percentage: 90, delay: 0.6 },
    { name: "MongoDB", percentage: 85, delay: 0.7 },
    { name: "PostgreSQL", percentage: 87, delay: 0.8 },
  ],
  tools: [
    { name: "AWS", percentage: 85, delay: 0.9 },
    { name: "Docker", percentage: 82, delay: 1.0 },
    { name: "Git", percentage: 95, delay: 1.1 },
    { name: "Linux", percentage: 88, delay: 1.2 },
  ],
};

function SkillBar({ skill }: { skill: Skill }) {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, skill.delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [skill.delay]);

  return (
    <div ref={barRef} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress transition-transform duration-1500 ease-out ${
            isVisible ? 'transform scale-x-100' : 'transform scale-x-0'
          }`}
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function SkillCategory({ 
  title, 
  icon: Icon, 
  skills, 
  delay 
}: { 
  title: string; 
  icon: any; 
  skills: Skill[]; 
  delay: number; 
}) {
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
      className={`bg-card rounded-2xl p-6 border border-border transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'opacity-0'
      }`}
      data-testid={`skill-category-${title.toLowerCase()}`}
    >
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="text-primary w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-heading">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Constantly learning and adapting to new technologies to build better solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory
              title="Frontend"
              icon={Palette}
              skills={skillCategories.frontend}
              delay={0.2}
            />
            <SkillCategory
              title="Backend"
              icon={Server}
              skills={skillCategories.backend}
              delay={0.4}
            />
            <SkillCategory
              title="Tools & Cloud"
              icon={Cloud}
              skills={skillCategories.tools}
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
