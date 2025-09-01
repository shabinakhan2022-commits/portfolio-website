import { useEffect, useRef, useState } from "react";
import { Code, Server, Database, Sparkles } from "lucide-react";

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

  const skills = [
    {
      title: "HTML, CSS, JavaScript",
      icon: Code,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      title: "React, Node.js, Express", 
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "MongoDB",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">My Expertise</span>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-heading">
              Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-1000 delay-${(index + 2) * 200} ${isVisible ? 'fade-in' : 'opacity-0'}`}
                data-testid={`skill-${index + 1}`}
              >
                {/* Main card */}
                <div className={`glass-effect p-8 rounded-2xl border ${skill.borderColor} relative overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:rotate-1`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    
                    {/* Animated progress bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 delay-1000 ${isVisible ? 'w-full' : 'w-0'}`}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full floating opacity-50"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/30 rounded-full floating opacity-30" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}