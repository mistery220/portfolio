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
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your blockchain or full-stack project to life? 
            Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">alex@blockchain-dev.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Available for freelance projects, consulting, and full-time opportunities. 
                  Specializing in blockchain development, smart contracts, and modern web applications.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-card/50 border-border focus:border-primary min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 glow-hover animate-fade-in"
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
