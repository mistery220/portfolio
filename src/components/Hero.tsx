import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Blockchain & Full-Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          filter: "brightness(0.4)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
        <div className="mb-8 inline-block">
          <div className="h-2 w-20 bg-primary mb-4 animate-slide-in-right" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">ALEX</span>
        </h1>
        
        <div className="h-12 md:h-16 mb-8">
          <p className="text-2xl md:text-3xl text-foreground/90 font-light">
            {displayText}
            <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-blink" />
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Architecting decentralized solutions and building scalable full-stack applications 
          that transform industries through cutting-edge blockchain technology and modern web development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-hover"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary/50 text-foreground hover:bg-primary/10 font-semibold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};
