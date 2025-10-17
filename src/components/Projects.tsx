import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectDefi from "@/assets/project-defi.jpg";
import projectNft from "@/assets/project-nft.jpg";
import projectSupply from "@/assets/project-supply.jpg";
import projectWebapp from "@/assets/project-webapp.jpg";
import projectTrading from "@/assets/project-trading.jpg";
import projectDao from "@/assets/project-dao.jpg";

const allProjects = [
  {
    title: "DeFi Trading Platform",
    description: "Comprehensive decentralized finance platform with automated market making, liquidity pools, and yield farming. Built with Solidity, React, and Web3.js.",
    image: projectDefi,
    tags: ["Solidity", "React", "Web3", "DeFi"],
  },
  {
    title: "NFT Marketplace",
    description: "Full-featured NFT marketplace supporting ERC-721 and ERC-1155 tokens. Includes auction system, royalty management, and IPFS integration.",
    image: projectNft,
    tags: ["NFT", "IPFS", "Smart Contracts", "TypeScript"],
  },
  {
    title: "Supply Chain Tracker",
    description: "Enterprise blockchain solution for transparent supply chain management. Real-time tracking, smart contract verification, and automated compliance.",
    image: projectSupply,
    tags: ["Hyperledger", "Node.js", "MongoDB", "IoT"],
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Modern full-stack SaaS platform with real-time analytics, user management, and payment processing. Built for scalability and performance.",
    image: projectWebapp,
    tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    title: "Crypto Trading Bot",
    description: "Intelligent trading bot with machine learning algorithms for automated cryptocurrency trading. Features risk management and portfolio optimization.",
    image: projectTrading,
    tags: ["Python", "ML", "Trading", "API"],
  },
  {
    title: "DAO Governance System",
    description: "Decentralized autonomous organization platform with on-chain voting, proposal management, and treasury control. Fully transparent and democratic.",
    image: projectDao,
    tags: ["DAO", "Governance", "Voting", "Web3"],
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase technical excellence and 
            real-world impact across blockchain and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden glow-hover group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => setShowAll(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg glow-hover"
            >
              View More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
