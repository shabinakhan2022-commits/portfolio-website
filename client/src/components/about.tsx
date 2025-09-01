import { useEffect, useRef, useState } from "react";
import { Code, Sparkles, Zap } from "lucide-react";

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
      className="py-20 bg-card/50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="about-heading">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full mb-6"></div>
            <div className="flex justify-center items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Developer & Creator</span>
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Visual elements */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main card */}
                <div className="glass-effect p-8 rounded-2xl border border-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                        <Code className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2 text-primary">Full-Stack Developer</h3>
                      <p className="text-sm text-muted-foreground">Building amazing experiences</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center floating">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/30 rounded-full floating" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description">
                    I am passionate about building web applications using modern technologies.
                  </p>
                </div>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-1 gap-4 mt-8">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Modern Web Technologies</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Creative Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}