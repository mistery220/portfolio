import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your vision into reality? Let's discuss how we can 
            build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8 animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 text-gradient">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/20 hover:bg-background/40 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                      <a href="mailto:alex@blockchain-dev.com" className="text-muted-foreground hover:text-primary transition-colors">
                        alex@blockchain-dev.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/20 hover:bg-background/40 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Phone</h4>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/20 hover:bg-background/40 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Location</h4>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/20 hover:bg-background/40 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Availability</h4>
                      <p className="text-muted-foreground">Mon - Fri: 9AM - 6PM PST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-lg">Schedule a Call</h4>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Prefer a direct conversation? Book a 30-minute consultation to discuss your project in detail.
              </p>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                size="lg"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <label className="block text-sm font-medium mb-2 text-foreground">Name *</label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary h-12"
                      required
                    />
                  </div>

                  <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary h-12"
                      required
                    />
                  </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <label className="block text-sm font-medium mb-2 text-foreground">Subject *</label>
                  <Input
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary h-12"
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message *</label>
                  <Textarea
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary min-h-[200px] resize-none"
                    required
                  />
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your information is secure and will never be shared with third parties. 
                    I typically respond within 24 hours.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 glow-hover animate-fade-in"
                  style={{ animationDelay: "0.35s" }}
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
