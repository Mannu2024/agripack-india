import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Recycle, Zap, Shield } from "lucide-react";

const solutions = [
  {
    icon: <Recycle className="w-7 h-7" />,
    title: "Agricultural Waste Collection",
    desc: (
      <>
        We partner with farmers across <span className="hi-gold">Punjab & Haryana</span> to collect{" "}
        <span className="hi-green">sugarcane bagasse</span>,{" "}
        <span className="hi-green">wheat straw</span>, and{" "}
        <span className="hi-green">rice husks</span> — transforming waste into{" "}
        <span className="hi-white">raw material</span>.
      </>
    ),
    points: [
      <><span className="hi-white">Direct</span> farmer partnerships</>,
      <><span className="hi-gold">Guaranteed</span> buyback pricing</>,
      <><span className="hi-green">Zero</span> transportation cost for farmers</>,
    ],
    color: "#00FF87",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Advanced Processing Technology",
    desc: (
      <>
        Our <span className="hi-cyan">proprietary processing technology</span> converts agricultural residue into{" "}
        <span className="hi-white">high-quality, food-safe</span> packaging material at{" "}
        <span className="hi-gold">competitive costs</span>.
      </>
    ),
    points: [
      <><span className="hi-cyan">Patented</span> pulp processing</>,
      <><span className="hi-white">FDA-grade</span> food safety</>,
      <><span className="hi-green">90% less energy</span> than plastic</>,
    ],
    color: "#00D4FF",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "B2B Supply Chain Platform",
    desc: (
      <>
        A <span className="hi-cyan">digital-first platform</span> connecting manufacturers, distributors, and brands for{" "}
        <span className="hi-white">seamless sustainable packaging</span> procurement at{" "}
        <span className="hi-gold">scale</span>.
      </>
    ),
    points: [
      <><span className="hi-cyan">Real-time</span> inventory tracking</>,
      <><span className="hi-white">Custom branding</span> options</>,
      <><span className="hi-gold">Pan-India</span> delivery network</>,
    ],
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
          <p className="mt-4 max-w-2xl mx-auto lead-text">
            An <span className="hi-cyan">end-to-end circular economy</span> platform that transforms{" "}
            <span className="hi-gold">agricultural waste</span> into{" "}
            <span className="hi-green">premium sustainable packaging</span>.
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
                    <span className="check-label">{point}</span>
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
          <a href="#contact" className="btn-solid btn-pulse relative inline-flex">
            Partner With Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
