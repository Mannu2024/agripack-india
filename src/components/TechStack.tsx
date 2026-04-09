import { motion } from "motion/react";

const techItems = [
  { name: "React", desc: "UI Framework", emoji: "⚛️", color: "#00D4FF" },
  { name: "TypeScript", desc: "Type Safety", emoji: "🔷", color: "#3178C6" },
  { name: "Vite", desc: "Build Tool", emoji: "⚡", color: "#FFD700" },
  { name: "Tailwind", desc: "Styling", emoji: "🎨", color: "#06B6D4" },
  { name: "Framer Motion", desc: "Animations", emoji: "🎬", color: "#BF00FF" },
  { name: "Node.js", desc: "Backend", emoji: "🟢", color: "#00FF87" },
  { name: "PostgreSQL", desc: "Database", emoji: "🐘", color: "#00D4FF" },
  { name: "Docker", desc: "Containers", emoji: "🐳", color: "#2496ED" },
  { name: "AWS", desc: "Cloud", emoji: "☁️", color: "#FF9900" },
  { name: "IoT Sensors", desc: "Farm Data", emoji: "📡", color: "#FF006E" },
  { name: "Blockchain", desc: "Traceability", emoji: "🔗", color: "#F7931A" },
  { name: "AI/ML", desc: "Demand Forecast", emoji: "🤖", color: "#00FF87" },
];

export default function TechStack() {
  return (
    <section id="tech" className="section-padding relative" style={{ background: "#0D0D15" }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6" style={{ color: "#00D4FF", borderColor: "rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.05)" }}>
            ⚙ Tech Stack
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            POWERED BY{" "}
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #BF00FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              CUTTING-EDGE
            </span>{" "}
            TECH
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.7 }}>
            A full-stack technology platform built for speed, scale, and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techItems.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-5 text-center card-hover group relative overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${tech.color}70, transparent)` }} />
              <div className="text-3xl mb-3">{tech.emoji}</div>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#fff", marginBottom: "0.2rem" }}>{tech.name}</p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.7rem", color: "rgba(168,178,196,0.5)" }}>{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
