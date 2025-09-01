import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Hi, I'm Shabs 👋
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            Full-Stack Developer Intern
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              data-testid="view-work-button"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-border hover:bg-secondary text-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300"
              data-testid="get-in-touch-button"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
