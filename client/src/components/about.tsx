import { useEffect, useRef, useState } from "react";

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
          
          <div className="text-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="about-description">
                I am passionate about building web applications using modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}