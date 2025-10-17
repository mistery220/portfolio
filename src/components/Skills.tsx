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
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering exceptional results through deep technical knowledge 
            and proven experience in blockchain and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card p-8 rounded-2xl glow-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
