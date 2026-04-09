import { motion } from "motion/react";
import { TrendingUp, Globe, Target } from "lucide-react";

const segments = [
  { label: "Total Addressable Market", value: "₹45,000 Cr", pct: 100, color: "#00D4FF" },
  { label: "Serviceable Addressable Market", value: "₹8,200 Cr", pct: 55, color: "#00FF87" },
  { label: "Serviceable Obtainable Market (2027)", value: "₹820 Cr", pct: 25, color: "#BF00FF" },
];

const drivers = [
  { icon: <TrendingUp className="w-5 h-5" />, title: "28% CAGR", desc: <><span className="hi-green">Sustainable packaging</span> market growth rate in India (<span className="hi-gold">2024–2030</span>)</> },
  { icon: <Globe className="w-5 h-5" />, title: "EPR Mandate", desc: <>Govt. <span className="hi-pink">regulations</span> forcing all producers to adopt <span className="hi-green">sustainable packaging</span></> },
  { icon: <Target className="w-5 h-5" />, title: "ESG Pressure", desc: <><span className="hi-gold">82%</span> of India's top 500 companies have set <span className="hi-cyan">sustainability targets</span></> },
];

export default function Market() {
  return (
    <section id="market" className="section-padding relative" style={{ background: "#0A0A0F" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,135,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6" style={{ color: "#00FF87", borderColor: "rgba(0,255,135,0.3)", background: "rgba(0,255,135,0.05)" }}>
            📈 Market Opportunity
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            A{" "}
            <span style={{ background: "linear-gradient(135deg, #00FF87, #00D4FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ₹45,000 CR
            </span>{" "}
            OPPORTUNITY
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {segments.map((seg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.9rem", color: "rgba(168,178,196,0.8)", fontWeight: 500 }}>{seg.label}</span>
                  <span style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.9rem", fontWeight: 700, color: seg.color }}>{seg.value}</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${seg.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15 + 0.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${seg.color}80, ${seg.color})`, boxShadow: `0 0 10px ${seg.color}40` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-5">
            {drivers.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass rounded-xl p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg flex-shrink-0" style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
                  {d.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: "0.25rem" }}>{d.title}</p>
                  <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.85rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
