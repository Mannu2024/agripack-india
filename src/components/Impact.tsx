import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

function useCounter(target: number, duration: number, isActive: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isActive]);
  return count;
}

type Metric = {
  label: string;
  value: number;
  suffix: string;
  color: string;
  desc: string;
  format?: (v: number) => string;
};

const metrics: Metric[] = [
  { label: "Tonnes CO2 Saved", value: 1200, suffix: "T", color: "#00FF87", desc: "Carbon emissions prevented annually through our circular model" },
  { label: "Farmers Empowered", value: 2400, suffix: "+", color: "#00D4FF", desc: "Agricultural households earning additional income from waste" },
  { label: "Plastic Units Replaced", value: 8500000, suffix: "", format: (v: number) => `${(v / 1000000).toFixed(1)}M`, color: "#BF00FF", desc: "Single-use plastic packaging units replaced with bio alternatives" },
  { label: "B2B Clients", value: 50, suffix: "+", color: "#FFD700", desc: "Businesses across India now packaging sustainably" },
  { label: "States Covered", value: 12, suffix: "", color: "#FF006E", desc: "Indian states in our active distribution network" },
  { label: "Compost Rate", value: 100, suffix: "%", color: "#00FF87", desc: "Of our products fully compost within 90 days" },
];

function StatCard({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const raw = useCounter(metric.value, 2000, inView);
  const display = metric.format ? metric.format(raw) : raw.toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass rounded-2xl p-7 card-hover group relative overflow-hidden text-center"
    >
      <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${metric.color}60, transparent)` }} />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full opacity-0 group-hover:opacity-5 transition-opacity" style={{ background: `radial-gradient(circle, ${metric.color}, transparent)` }} />
      <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: metric.color, lineHeight: 1, textShadow: `0 0 20px ${metric.color}40` }}>
        {display}{metric.suffix}
      </p>
      <p className="mt-2 mb-3" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.65rem", color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" }}>{metric.label}</p>
      <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8rem", color: "rgba(168,178,196,0.6)", lineHeight: 1.5 }}>{metric.desc}</p>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="section-padding relative" style={{ background: "#0D0D15" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,135,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6">
            ◎ Impact Metrics
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            REAL WORLD{" "}
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #00FF87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              IMPACT
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.7 }}>
            Our numbers tell the story of a sustainable revolution taking root across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div key={i}>
              <StatCard metric={m} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
