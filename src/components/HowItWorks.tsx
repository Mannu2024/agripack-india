import { motion } from "motion/react";
import { Wheat, Cog, Package, Truck, Recycle } from "lucide-react";

const steps = [
  { icon: <Wheat className="w-7 h-7" />, title: "Collect", desc: "Farmers hand over agricultural waste (bagasse, straw, husk) for guaranteed payment.", color: "#FFD700" },
  { icon: <Cog className="w-7 h-7" />, title: "Process", desc: "Our plants pulp, clean, and mold the biomass into packaging blanks using low-energy tech.", color: "#00FF87" },
  { icon: <Package className="w-7 h-7" />, title: "Produce", desc: "Finished products are quality-checked, branded, and made ready for distribution.", color: "#00D4FF" },
  { icon: <Truck className="w-7 h-7" />, title: "Distribute", desc: "Same-day dispatch to B2B partners across India through our logistics network.", color: "#BF00FF" },
  { icon: <Recycle className="w-7 h-7" />, title: "Compost", desc: "Used packaging naturally composts in 60-90 days, closing the circular economy loop.", color: "#FF006E" },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-padding relative" style={{ background: "#0A0A0F" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), rgba(0,212,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6" style={{ color: "#FFD700", borderColor: "rgba(255,215,0,0.3)", background: "rgba(255,215,0,0.05)" }}>
            ⚙ Process Flow
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            HOW IT{" "}
            <span style={{ background: "linear-gradient(135deg, #FFD700, #00FF87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              WORKS
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-[calc(100%-8rem)] hidden lg:block" style={{ background: "linear-gradient(to bottom, rgba(0,212,255,0.3), rgba(191,0,255,0.1))" }} />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`lg:w-5/12 ${i % 2 !== 0 ? "lg:text-right" : ""}`}>
                  <div className={`glass rounded-2xl p-6 card-hover group relative overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)` }} />
                    <div className={`flex items-start gap-4 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="p-3 rounded-xl flex-shrink-0" style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}30` }}>
                        {step.icon}
                      </div>
                      <div className={i % 2 !== 0 ? "lg:text-right" : ""}>
                        <h3 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "0.5rem" }}>{step.title}</h3>
                        <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.9rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.6 }}>{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="lg:w-2/12 flex justify-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                    style={{ background: `${step.color}15`, border: `2px solid ${step.color}50`, boxShadow: `0 0 20px ${step.color}30` }}
                  >
                    <span style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "1rem", color: step.color }}>{i + 1}</span>
                  </div>
                </div>

                <div className="lg:w-5/12 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
