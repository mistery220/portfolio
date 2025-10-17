import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
              Let's Connect
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Ready to bring your blockchain or full-stack project to life? 
            Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="animate-slide-in-left">
            <div className="glass-card p-10 rounded-3xl shadow-xl">
              <h3 className="text-4xl font-bold mb-10 text-gradient">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Email</h4>
                    <p className="text-muted-foreground/90 text-base">alex@blockchain-dev.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Phone</h4>
                    <p className="text-muted-foreground/90 text-base">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Location</h4>
                    <p className="text-muted-foreground/90 text-base">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-border/50">
                <p className="text-muted-foreground/90 leading-relaxed text-base md:text-lg">
                  Available for freelance projects, consulting, and full-time opportunities. 
                  Specializing in blockchain development, smart contracts, and modern web applications.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl shadow-xl">
              <h3 className="text-4xl font-bold mb-10 text-gradient">Send a Message</h3>
              
              <div className="space-y-8">
                <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <label className="block text-sm font-semibold mb-3 text-foreground">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card/50 border-border/50 focus:border-primary h-12 text-base rounded-xl transition-all duration-300"
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <label className="block text-sm font-semibold mb-3 text-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card/50 border-border/50 focus:border-primary h-12 text-base rounded-xl transition-all duration-300"
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <label className="block text-sm font-semibold mb-3 text-foreground">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-card/50 border-border/50 focus:border-primary min-h-[180px] text-base rounded-xl transition-all duration-300"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground text-lg py-7 font-semibold glow-hover animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
