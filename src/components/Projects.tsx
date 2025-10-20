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
    description: "Comprehensive decentralized finance platform with automated market making, liquidity pools, and yield farming capabilities.",
    image: projectDefi,
    tags: ["Solidity", "React", "Web3.js", "DeFi"],
    details: "Built advanced smart contracts for decentralized trading with $50M+ TVL, implemented automated market maker algorithms, and created seamless Web3 integration for 10,000+ active users."
  },
  {
    title: "NFT Marketplace",
    description: "Full-featured NFT marketplace supporting ERC-721 and ERC-1155 tokens with auction system and royalty management.",
    image: projectNft,
    tags: ["NFT", "IPFS", "Smart Contracts", "TypeScript"],
    details: "Developed complete NFT trading infrastructure with lazy minting, royalty distribution system, and IPFS storage integration. Processed over $2M in transaction volume."
  },
  {
    title: "Supply Chain Tracker",
    description: "Enterprise blockchain solution for transparent supply chain management with real-time tracking and smart contract verification.",
    image: projectSupply,
    tags: ["Hyperledger", "Node.js", "MongoDB", "IoT"],
    details: "Implemented end-to-end supply chain visibility using Hyperledger Fabric, integrated IoT sensors for real-time tracking, and automated compliance verification for Fortune 500 clients."
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Modern full-stack SaaS platform with real-time analytics, user management, and integrated payment processing.",
    image: projectWebapp,
    tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    details: "Created scalable multi-tenant architecture serving 50,000+ users, implemented real-time data processing with WebSockets, and integrated Stripe for subscription management."
  },
  {
    title: "Crypto Trading Bot",
    description: "Intelligent trading bot with machine learning algorithms for automated cryptocurrency trading and portfolio optimization.",
    image: projectTrading,
    tags: ["Python", "Machine Learning", "Trading", "API"],
    details: "Developed ML-powered trading algorithms achieving 127% ROI, integrated with major exchanges via REST and WebSocket APIs, and implemented advanced risk management strategies."
  },
  {
    title: "DAO Governance System",
    description: "Decentralized autonomous organization platform with on-chain voting, proposal management, and treasury control.",
    image: projectDao,
    tags: ["DAO", "Governance", "Voting", "Web3"],
    details: "Built comprehensive governance framework with gas-optimized voting mechanisms, timelock controllers, and multi-sig treasury management for 5,000+ token holders."
  },
  {
    title: "Metaverse Platform",
    description: "Immersive Web3 metaverse platform with 3D virtual worlds, NFT integration, and blockchain-based digital asset ownership.",
    image: projectMetaverse,
    tags: ["Three.js", "WebGL", "NFT", "Virtual Reality"],
    details: "Architected 3D virtual environment with NFT land parcels, implemented avatar customization system, and created virtual economy with 20,000+ monthly active users."
  },
  {
    title: "Digital Identity System",
    description: "Self-sovereign identity platform with decentralized verification, biometric authentication, and privacy-preserving credentials.",
    image: projectIdentity,
    tags: ["Identity", "Zero-Knowledge", "Biometrics", "Privacy"],
    details: "Developed zero-knowledge proof-based identity verification, integrated biometric authentication, and deployed DID standards-compliant system for government institutions."
  },
  {
    title: "Blockchain Gaming Platform",
    description: "Play-to-earn gaming ecosystem with NFT characters, in-game asset marketplace, and token-based reward system.",
    image: projectGaming,
    tags: ["Gaming", "NFT", "Play-to-Earn", "Unity"],
    details: "Created engaging P2E game economy with NFT character breeding mechanics, implemented secure asset trading marketplace, and distributed $1M+ in player rewards."
  },
  {
    title: "Healthcare Data Platform",
    description: "HIPAA-compliant healthcare blockchain for secure medical records management and interoperability between healthcare providers.",
    image: projectHealthcare,
    tags: ["Healthcare", "HIPAA", "Privacy", "Interoperability"],
    details: "Built secure patient data exchange network with encrypted storage, implemented consent management system, and achieved seamless EHR integration for 50+ hospitals."
  },
  {
    title: "Real Estate Tokenization",
    description: "Fractional real estate investment platform enabling property tokenization and automated dividend distribution.",
    image: projectRealestate,
    tags: ["Real Estate", "Tokenization", "Investment", "Legal"],
    details: "Tokenized $100M+ in real estate assets, automated dividend payments through smart contracts, and created compliant investment vehicle for international investors."
  },
  {
    title: "Cross-Chain Bridge",
    description: "Secure cross-chain bridge protocol enabling seamless asset transfers between multiple blockchain networks.",
    image: projectBridge,
    tags: ["Bridge", "Cross-Chain", "Interoperability", "Security"],
    details: "Engineered trustless bridge protocol with multi-signature validation, processed $500M+ in cross-chain transfers, and maintained zero security incidents across 8 blockchain networks."
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

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

        <div className="space-y-12 mb-16">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden glow-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent opacity-60" />
                </div>
                
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
                      {project.details}
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
