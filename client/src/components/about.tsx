import { useEffect, useRef, useState } from "react";
import { MapPin, Coffee, Code } from "lucide-react";

export default function About() {
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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-card/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="about-heading">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Developer workspace with modern setup"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="workspace-image"
              />
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Hello, I'm Alex
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="bio-paragraph-1">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  web applications that solve real-world problems. My journey started with a 
                  curiosity for how things work, which led me to fall in love with coding.
                </p>
                <p data-testid="bio-paragraph-2">
                  I specialize in modern JavaScript frameworks, Node.js backends, and cloud 
                  technologies. When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source, or hiking in the mountains.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="text-primary w-4 h-4" />
                  <span data-testid="location">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Coffee className="text-primary w-4 h-4" />
                  <span data-testid="coffee-enthusiast">Coffee Enthusiast</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Code className="text-primary w-4 h-4" />
                  <span data-testid="experience">5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
