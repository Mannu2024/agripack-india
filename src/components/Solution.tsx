import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Recycle, Zap, Shield } from "lucide-react";

const solutions = [
  {
    icon: <Recycle className="w-7 h-7" />,
    title: "Agricultural Waste Collection",
    desc: "We partner with farmers across Punjab and Haryana to collect sugarcane bagasse, wheat straw, and rice husks — transforming waste into raw material.",
    points: ["Direct farmer partnerships", "Guaranteed buyback pricing", "Zero transportation cost for farmers"],
    color: "#00FF87",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Advanced Processing Technology",
    desc: "Our proprietary processing technology converts agricultural residue into high-quality, food-safe packaging material at competitive costs.",
    points: ["Patented pulp processing", "FDA-grade food safety", "90% less energy than plastic"],
    color: "#00D4FF",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "B2B Supply Chain Platform",
    desc: "A digital-first platform connecting manufacturers, distributors, and brands for seamless sustainable packaging procurement at scale.",
    points: ["Real-time inventory tracking", "Custom branding options", "Pan-India delivery network"],
    color: "#BF00FF",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section-padding relative" style={{ background: "#0A0A0F" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,135,0.4), rgba(0,212,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label inline-flex mb-6">
            ◆ Our Solution
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.15 }}>
            THE{" "}
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #00FF87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AGRIPACK
            </span>{" "}
            ECOSYSTEM
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.7 }}>
            An end-to-end circular economy platform that transforms agricultural waste into premium sustainable packaging.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${sol.color}70, transparent)` }} />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ background: `radial-gradient(circle, ${sol.color}, transparent)` }} />

              <div className="mb-6 inline-flex p-3 rounded-xl" style={{ background: `${sol.color}15`, color: sol.color, border: `1px solid ${sol.color}30` }}>
                {sol.icon}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.65rem", color: sol.color, letterSpacing: "0.15em" }}>0{i + 1}</span>
                <div className="flex-1 h-px" style={{ background: `${sol.color}40` }} />
              </div>

              <h3 className="mb-4" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#fff" }}>{sol.title}</h3>
              <p className="mb-6" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.9rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.7 }}>{sol.desc}</p>

              <ul className="space-y-3">
                {sol.points.map((point, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: sol.color }} />
                    <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.85rem", color: "rgba(168,178,196,0.8)" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn-solid inline-flex">
            Partner With Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
