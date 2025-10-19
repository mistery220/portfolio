import { useState } from "react";

const technicalSkills = [
  {
    category: "Blockchain & Web3",
    skills: [
      { name: "Solidity", level: 95 },
      { name: "Web3.js / Ethers.js", level: 92 },
      { name: "Smart Contract Security", level: 90 },
      { name: "Hardhat / Truffle", level: 88 },
      { name: "IPFS", level: 85 },
      { name: "TheGraph", level: 82 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 93 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux / Zustand", level: 88 },
      { name: "React Query", level: 87 },
      { name: "Vite / Webpack", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js / Express", level: 92 },
      { name: "Python / Django", level: 88 },
      { name: "GraphQL", level: 86 },
      { name: "RESTful APIs", level: 94 },
      { name: "Microservices", level: 85 },
      { name: "WebSocket", level: 83 },
    ],
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 85 },
      { name: "Elasticsearch", level: 80 },
      { name: "Supabase", level: 87 },
      { name: "Firebase", level: 82 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS / GCP", level: 88 },
      { name: "CI/CD (GitHub Actions)", level: 92 },
      { name: "Terraform", level: 80 },
      { name: "Nginx", level: 83 },
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "VS Code", level: 93 },
      { name: "Figma", level: 78 },
      { name: "Postman", level: 90 },
      { name: "Jest / Testing", level: 87 },
      { name: "Agile / Scrum", level: 85 },
    ],
  },
];

export const TechnicalExpertise = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical proficiency across the full development stack, 
            from blockchain protocols to cloud infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {technicalSkills.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "glass-card hover:bg-primary/10 text-foreground"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          {technicalSkills[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground">{skill.name}</h4>
                <span className="text-sm font-bold text-primary">{skill.level}%</span>
              </div>
              
              <div className="relative h-3 bg-background/50 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-slide-in-left-bar"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl text-center animate-fade-in">
            <div className="text-4xl font-bold text-gradient mb-2">8+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold text-gradient mb-2">15+</div>
            <p className="text-muted-foreground">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};
