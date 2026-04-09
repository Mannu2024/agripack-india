import { motion } from "motion/react";
import { CheckCircle, Circle, Clock } from "lucide-react";

const milestones = [
  {
    phase: "Phase 1", period: "Q1 2025", title: "Seed & Setup", done: true,
    items: ["Company registration", "IP filing", "2 farmer MoUs signed", <><span className="hi-green">Pilot plant</span> operational</>],
  },
  {
    phase: "Phase 2", period: "Q3 2025", title: "Market Validation", done: true,
    items: [<><span className="hi-gold">10 B2B clients</span> acquired</>, <><span className="hi-gold">₹50L revenue</span> achieved</>, <><span className="hi-white">FSSAI certification</span></>, <>Series A preparation</>],
  },
  {
    phase: "Phase 3", period: "Q1 2026", title: "Scale Production", done: false, active: true,
    items: [<>Series A: <span className="hi-cyan">₹12Cr raised</span></>, <>2nd manufacturing unit</>, <><span className="hi-gold">50 B2B partnerships</span></>, <>Launch <span className="hi-cyan">platform v2</span></>],
  },
  {
    phase: "Phase 4", period: "Q3 2026", title: "National Expansion", done: false,
    items: [<><span className="hi-white">Pan-India</span> distribution</>, <><span className="hi-green">Carbon credit</span> program live</>, <>4 state operations</>, <>Series B preparation</>],
  },
  {
    phase: "Phase 5", period: "2027+", title: "Category Leader", done: false,
    items: [<><span className="hi-gold">₹100Cr ARR</span></>, <>Export markets entry</>, <><span className="hi-white">IPO readiness</span></>, <><span className="hi-cyan">500+</span> B2B clients</>],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative" style={{ background: "#0D0D15" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6" style={{ color: "#BF00FF", borderColor: "rgba(191,0,255,0.3)", background: "rgba(191,0,255,0.05)" }}>
            🗺 Roadmap
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            THE PATH{" "}
            <span style={{ background: "linear-gradient(135deg, #BF00FF, #00D4FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              FORWARD
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal connector on desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.2), rgba(191,0,255,0.2))" }} />

          <div className="grid lg:grid-cols-5 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Phase indicator */}
                <div className="flex lg:justify-center mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: m.done ? "rgba(0,255,135,0.15)" : m.active ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.05)",
                      border: `2px solid ${m.done ? "#00FF87" : m.active ? "#00D4FF" : "rgba(255,255,255,0.1)"}`,
                      boxShadow: m.done ? "0 0 15px rgba(0,255,135,0.3)" : m.active ? "0 0 15px rgba(0,212,255,0.3)" : "none",
                    }}
                  >
                    {m.done ? (
                      <CheckCircle className="w-5 h-5" style={{ color: "#00FF87" }} />
                    ) : m.active ? (
                      <Clock className="w-5 h-5" style={{ color: "#00D4FF" }} />
                    ) : (
                      <Circle className="w-5 h-5" style={{ color: "rgba(255,255,255,0.2)" }} />
                    )}
                  </div>
                </div>

                <div className={`glass rounded-xl p-5 ${m.active ? "" : ""}`} style={{ borderColor: m.done ? "rgba(0,255,135,0.2)" : m.active ? "rgba(0,212,255,0.2)" : "transparent" }}>
                  <div className="mb-3">
                    <span style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: m.done ? "#00FF87" : m.active ? "#00D4FF" : "rgba(168,178,196,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.period}</span>
                    <h4 className="mt-1" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>{m.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {m.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: m.done ? "#00FF87" : m.active ? "#00D4FF" : "rgba(168,178,196,0.3)" }} />
                        <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.78rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
