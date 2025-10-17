import { Star } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

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
];

export const Reviews = () => {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Client Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by industry leaders and innovative companies worldwide. 
            Here's what clients say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="glass-card p-8 rounded-2xl glow-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: "hsl(var(--gold))" }}
                  />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
