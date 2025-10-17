import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectDefi from "@/assets/project-defi.jpg";
import projectNft from "@/assets/project-nft.jpg";
import projectSupply from "@/assets/project-supply.jpg";
import projectWebapp from "@/assets/project-webapp.jpg";
import projectTrading from "@/assets/project-trading.jpg";
import projectDao from "@/assets/project-dao.jpg";
import projectMetaverse from "@/assets/project-metaverse.jpg";
import projectIdentity from "@/assets/project-identity.jpg";
import projectGaming from "@/assets/project-gaming.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import projectBridge from "@/assets/project-bridge.jpg";

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
    title: "Metaverse Platform",
    description: "Immersive blockchain-powered metaverse with virtual worlds, digital asset ownership, and social interactions. Built on decentralized infrastructure with NFT integration.",
    image: projectMetaverse,
    tags: ["Metaverse", "3D", "NFT", "Unity"],
  },
  {
    title: "Blockchain Identity System",
    description: "Decentralized identity verification platform with biometric authentication and self-sovereign identity management. GDPR-compliant and privacy-focused.",
    image: projectIdentity,
    tags: ["Identity", "Zero-Knowledge", "Privacy", "Biometric"],
  },
  {
    title: "GameFi Ecosystem",
    description: "Revolutionary play-to-earn gaming platform with NFT items, tournament systems, and tokenized rewards. Seamless Web3 integration with engaging gameplay.",
    image: projectGaming,
    tags: ["GameFi", "P2E", "NFT", "Token Economics"],
  },
  {
    title: "Healthcare Records Chain",
    description: "HIPAA-compliant blockchain system for secure medical records management. Patient-controlled data sharing with interoperable healthcare provider access.",
    image: projectHealthcare,
    tags: ["Healthcare", "HIPAA", "Privacy", "Interoperability"],
  },
  {
    title: "Real Estate Tokenization",
    description: "Platform for fractional property ownership through blockchain tokenization. Enables global real estate investment with automated dividend distribution.",
    image: projectRealestate,
    tags: ["RWA", "Tokenization", "Real Estate", "Investment"],
  },
  {
    title: "Cross-Chain Bridge Protocol",
    description: "Secure multi-chain bridge enabling seamless asset transfers across major blockchain networks. Advanced security with multi-signature validation.",
    image: projectBridge,
    tags: ["Bridge", "Multi-Chain", "Interoperability", "Security"],
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
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
              Portfolio Excellence
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Innovative solutions that showcase technical excellence and 
            real-world impact across blockchain and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-3xl overflow-hidden glow-hover group animate-fade-in-up shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.title} - Blockchain and Full-Stack Development Project`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-70" />
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold rounded-full">
                    Featured
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground/90 mb-6 leading-relaxed text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
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
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-16 py-7 text-lg font-semibold glow-hover shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
            >
              View All {allProjects.length} Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
