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
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in-up">
        <div className="mb-12 inline-block">
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-cyan mb-6 animate-slide-in-right rounded-full" />
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-bold mb-8 tracking-tight leading-none">
          <span className="text-gradient drop-shadow-2xl">ALEX</span>
        </h1>
        
        <div className="h-14 md:h-20 mb-12">
          <p className="text-2xl md:text-4xl text-foreground/90 font-light tracking-wide">
            {displayText}
            <span className="inline-block w-0.5 h-10 bg-primary ml-2 animate-blink" />
          </p>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
          Architecting decentralized solutions and building scalable full-stack applications 
          that transform industries through cutting-edge blockchain technology and modern web development.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-12 py-7 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold glow-hover shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-12 py-7 border-2 border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold transition-all duration-300 rounded-full"
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
