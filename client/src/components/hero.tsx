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
          <div className="mb-8 floating">
            <div className="w-32 h-32 mx-auto rounded-full gradient-border p-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="Alex Chen - Full-Stack Developer"
                className="w-full h-full rounded-full object-cover"
                data-testid="profile-image"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Alex Chen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern web technologies. 
            Passionate about clean code, user experience, and innovative solutions.
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
