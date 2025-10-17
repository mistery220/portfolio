import { Code2, Database, Blocks, Cpu } from "lucide-react";

const skills = [
  {
    icon: Blocks,
    title: "Blockchain Development",
    description: "Expert in Solidity, Web3.js, and Ethereum. Building secure smart contracts, DeFi protocols, and NFT platforms. Deep understanding of consensus mechanisms, tokenomics, and decentralized architecture patterns.",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "Proficient in React, Next.js, Node.js, and TypeScript. Creating responsive, high-performance web applications with modern UI/UX principles. Expertise in RESTful APIs, GraphQL, and microservices architecture.",
  },
  {
    icon: Database,
    title: "Database & Backend",
    description: "Advanced knowledge of PostgreSQL, MongoDB, and Redis. Designing scalable database schemas, optimizing queries, and implementing efficient caching strategies. Experience with serverless architectures and cloud platforms.",
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designing distributed systems, implementing CI/CD pipelines, and optimizing application performance. Expertise in Docker, Kubernetes, and cloud infrastructure. Focus on security, scalability, and maintainability.",
  },
];

export const Skills = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
              Technical Excellence
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Delivering exceptional results through deep technical knowledge 
            and proven experience in blockchain and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card p-10 rounded-3xl glow-hover animate-scale-in shadow-xl hover:shadow-2xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8">
                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground/90 leading-relaxed text-base md:text-lg">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
