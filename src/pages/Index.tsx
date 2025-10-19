import { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <CustomCursor />
      
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
            >
              ALEX
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Hire Me
              </Button>
            </div>
          )}
        </div>
      </nav>

      <main className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        
        {/* Professional Footer */}
        <footer className="relative py-20 px-4 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Brand Section */}
              <div>
                <h3 className="text-3xl font-bold text-gradient mb-4">ALEX</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Blockchain & Full-Stack Developer specializing in decentralized applications 
                  and scalable web solutions.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:alex@blockchain-dev.com"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Expertise
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-foreground">Services</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Smart Contract Development</li>
                  <li>DeFi Protocol Design</li>
                  <li>NFT Marketplace Creation</li>
                  <li>Full-Stack Web Applications</li>
                  <li>Blockchain Consulting</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © 2025 ALEX. All rights reserved. Built with passion and cutting-edge technology.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <button className="hover:text-primary transition-colors">Privacy Policy</button>
                <button className="hover:text-primary transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
