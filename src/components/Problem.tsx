import { motion } from "motion/react";
import { AlertTriangle, Leaf, TrendingDown, Globe } from "lucide-react";

const problems = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Plastic Pollution Crisis",
    desc: (
      <>
        India generates <span className="hi-pink">3.5 million tonnes</span> of plastic waste annually, with{" "}
        <span className="hi-white">packaging</span> being the{" "}
        <span className="hi-pink">#1 contributor</span> to environmental pollution.
      </>
    ),
    color: "#FF006E",
    stat: "3.5M",
    statLabel: "Tonnes/Year",
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Farmer Income Gap",
    desc: (
      <>
        Agricultural residue worth{" "}
        <span className="hi-gold">₹4,000 Cr</span> is{" "}
        <span className="hi-pink">burned annually</span> in Punjab alone, causing{" "}
        <span className="hi-white">massive air pollution</span> and wasted revenue for farmers.
      </>
    ),
    color: "#FFD700",
    stat: "₹4000Cr",
    statLabel: "Wasted/Year",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Sustainability Demand",
    desc: (
      <>
        <span className="hi-gold">82%</span> of consumers prefer eco-friendly packaging, yet only{" "}
        <span className="hi-pink">12%</span> of Indian businesses offer{" "}
        <span className="hi-white">sustainable alternatives</span> at scale.
      </>
    ),
    color: "#BF00FF",
    stat: "82%",
    statLabel: "Demand Unmet",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Regulatory Pressure",
    desc: (
      <>
        India's <span className="hi-pink">single-use plastic ban</span> and{" "}
        <span className="hi-cyan">EPR norms</span> are pushing brands to find{" "}
        <span className="hi-green">sustainable alternatives</span> urgently.
      </>
    ),
    color: "#00D4FF",
    stat: "2026",
    statLabel: "EPR Deadline",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding relative" style={{ background: "#0D0D15" }}>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,0,110,0.4), rgba(255,215,0,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label inline-flex mb-6" style={{ color: "#FF006E", borderColor: "rgba(255,0,110,0.3)", background: "rgba(255,0,110,0.05)" }}>
            ⚠ The Problem
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.15 }}>
            A CRISIS DEMANDING{" "}
            <span style={{ background: "linear-gradient(135deg, #FF006E, #FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              URGENT ACTION
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto lead-text">
            The Indian packaging industry sits at the intersection of{" "}
            <span className="hi-pink">environmental collapse</span> and{" "}
            <span className="hi-gold">economic opportunity</span>. Here's what we're solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 card-hover group relative overflow-hidden"
              style={{ borderColor: `${p.color}20` }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${p.color}60, transparent)` }} />
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ background: `radial-gradient(circle, ${p.color}, transparent)` }} />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>
                  {p.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>{p.title}</h3>
                    <div className="text-right">
                      <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "1.3rem", color: p.color }}>{p.stat}</p>
                      <p style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.55rem", color: "rgba(168,178,196,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.statLabel}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.9rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
