import { motion } from "motion/react";
import { ArrowRight, DollarSign, TrendingUp, Users } from "lucide-react";

const highlights = [
  { icon: <DollarSign className="w-5 h-5" />, label: "Raising", value: "₹12 Crore", sub: "Series A", color: "#00D4FF" },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Valuation", value: "₹80 Cr", sub: "Pre-money", color: "#00FF87" },
  { icon: <Users className="w-5 h-5" />, label: "Use of Funds", value: "80%", sub: "Capex + OpEx", color: "#BF00FF" },
];

const useOfFunds = [
  { label: "Manufacturing Expansion", pct: 45, color: "#00D4FF" },
  { label: "Technology Platform", pct: 20, color: "#00FF87" },
  { label: "Working Capital", pct: 20, color: "#BF00FF" },
  { label: "Marketing & Sales", pct: 15, color: "#FFD700" },
];

export default function Investors() {
  return (
    <section id="investors" className="section-padding relative" style={{ background: "#0A0A0F" }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(191,0,255,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6" style={{ color: "#00D4FF", borderColor: "rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.05)" }}>
            💰 Investor Relations
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            INVEST IN{" "}
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #00FF87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              INDIA'S GREEN FUTURE
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.7 }}>
            Join us in building the sustainable packaging infrastructure for India's $5 trillion economy.
          </p>
        </motion.div>

        {/* Highlights row */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${h.color}60, transparent)` }} />
              <div className="inline-flex p-3 rounded-xl mb-4" style={{ background: `${h.color}15`, color: h.color, border: `1px solid ${h.color}25` }}>
                {h.icon}
              </div>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.7rem", color: "rgba(168,178,196,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{h.label}</p>
              <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "1.8rem", color: h.color, margin: "0.25rem 0" }}>{h.value}</p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8rem", color: "rgba(168,178,196,0.6)" }}>{h.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Use of funds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
          style={{ border: "1px solid rgba(0,212,255,0.15)" }}
        >
          <h3 className="mb-6" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.9rem", color: "#fff", letterSpacing: "0.1em" }}>USE OF FUNDS</h3>
          <div className="space-y-4">
            {useOfFunds.map((f, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5">
                  <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", color: "rgba(168,178,196,0.8)" }}>{f.label}</span>
                  <span style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.8rem", color: f.color }}>{f.pct}%</span>
                </div>
                <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${f.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.2 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${f.color}50, ${f.color})`, boxShadow: `0 0 8px ${f.color}40` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-solid">
              Request Pitch Deck <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-neon">
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
