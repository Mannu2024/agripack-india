import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const streams = [
  { title: "Direct B2B Sales", pct: 60, desc: <><span className="hi-cyan">Subscription-based supply agreements</span> with food brands, e-commerce companies, and manufacturers.</>, color: "#00D4FF" },
  { title: "Custom Branding", pct: 25, desc: <><span className="hi-gold">Premium margin</span> on customised packaging with <span className="hi-white">brand logos</span> and design specifications.</>, color: "#00FF87" },
  { title: "Carbon Credits", pct: 10, desc: <><span className="hi-green">Certified carbon offset credits</span> sold to corporations for their <span className="hi-cyan">Scope 3 emissions</span>.</>, color: "#BF00FF" },
  { title: "Data & Platform", pct: 5, desc: <><span className="hi-purple">SaaS platform fees</span> for supply chain transparency and <span className="hi-cyan">sustainability reporting</span> tools.</>, color: "#FFD700" },
];

export default function BusinessModel() {
  return (
    <section id="business" className="section-padding relative" style={{ background: "#0A0A0F" }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6">
            ◈ Business Model
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            REVENUE{" "}
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #BF00FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              STREAMS
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {streams.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group card-hover"
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${s.color}60, transparent)` }} />
              <div className="flex justify-between items-start mb-4">
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff" }}>{s.title}</h3>
                <span style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "1.8rem", color: s.color, lineHeight: 1 }}>{s.pct}%</span>
              </div>
              <p className="mb-5" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.6 }}>{s.desc}</p>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 + 0.3 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${s.color}60, ${s.color})`, boxShadow: `0 0 8px ${s.color}50` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8 relative overflow-hidden"
          style={{ border: "1px solid rgba(0,212,255,0.2)" }}
        >
          <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.6), rgba(0,255,135,0.6), transparent)" }} />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Gross Margin", value: "42%", color: "#00D4FF" },
              { label: "Break-even", value: "18 Mo", color: "#00FF87" },
              { label: "5-Yr Projection", value: "₹180Cr", color: "#BF00FF" },
            ].map((item, i) => (
              <div key={i}>
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "2.2rem", color: item.color, textShadow: `0 0 20px ${item.color}40` }}>{item.value}</p>
                <p className="mt-1" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.65rem", color: "rgba(168,178,196,0.6)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
