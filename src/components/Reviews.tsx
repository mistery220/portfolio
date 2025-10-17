import { Star } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";
import client5 from "@/assets/client-5.jpg";
import client6 from "@/assets/client-6.jpg";

const reviews = [
  {
    name: "Michael Chen",
    role: "CEO, FinTech Ventures",
    image: client1,
    review: "Alex transformed our vision into reality with an exceptional DeFi platform. His blockchain expertise and attention to detail are unmatched. The smart contracts are secure, efficient, and exactly what we needed. Highly professional and incredibly talented.",
  },
  {
    name: "Sarah Johnson",
    role: "Founder, Digital Assets Inc",
    image: client2,
    review: "Working with Alex was an absolute game-changer for our NFT marketplace. He delivered a sophisticated, scalable solution that exceeded all expectations. His full-stack capabilities and blockchain knowledge are truly impressive. I couldn't recommend him more highly.",
  },
  {
    name: "David Martinez",
    role: "CTO, Enterprise Solutions",
    image: client3,
    review: "Alex built our supply chain tracking system with remarkable skill and professionalism. The blockchain integration is flawless, and the user interface is intuitive. He communicates clearly, meets deadlines, and delivers exceptional quality. A true expert in his field.",
  },
  {
    name: "Emma Williams",
    role: "VP of Technology, MetaGaming Corp",
    image: client4,
    review: "Alex's work on our GameFi platform was nothing short of extraordinary. The play-to-earn mechanics, NFT integration, and user experience are all top-tier. His technical prowess combined with creative problem-solving made this project a massive success. Exceptional developer.",
  },
  {
    name: "James Anderson",
    role: "Co-Founder, ChainBridge Protocol",
    image: client5,
    review: "We hired Alex to develop our cross-chain bridge, and he delivered beyond our wildest expectations. The security architecture is robust, the performance is lightning-fast, and the code quality is pristine. A world-class blockchain developer who truly understands the space.",
  },
  {
    name: "Lisa Chen",
    role: "Director of Engineering, HealthChain Systems",
    image: client6,
    review: "Alex created a HIPAA-compliant blockchain solution that revolutionized how we manage medical records. His attention to privacy, security, and regulatory compliance was impeccable. The system is scalable, reliable, and exactly what our healthcare partners needed. Outstanding work.",
  },
];

export const Reviews = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-gradient">Client Reviews</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Trusted by industry leaders and innovative companies worldwide. 
            Here's what clients say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="glass-card p-10 rounded-3xl glow-hover animate-scale-in shadow-xl hover:shadow-2xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "hsl(var(--gold))", transitionDelay: `${i * 0.05}s` }}
                  />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-8 text-base md:text-lg italic">
                "{review.review}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-border/50">
                <img
                  src={review.image}
                  alt={`${review.name} - Client Review`}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground/80 mt-1">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
