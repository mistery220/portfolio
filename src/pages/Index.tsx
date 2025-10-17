import { CustomCursor } from "@/components/CustomCursor";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <ParticleBackground />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
        
        <footer className="py-12 px-4 border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 ALEX. All rights reserved. Built with passion and cutting-edge technology.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
