import { motion } from "motion/react";
import { Shield, Zap, Globe, Award, Users, TrendingUp } from "lucide-react";

const reasons = [
  { icon: <Shield className="w-6 h-6" />, title: "IP Protected", desc: "Proprietary processing technology with 3 patents filed.", color: "#00D4FF" },
  { icon: <Zap className="w-6 h-6" />, title: "Speed to Market", desc: "72-hour delivery SLA across India. Custom orders in 5 days.", color: "#00FF87" },
  { icon: <Globe className="w-6 h-6" />, title: "Scale Ready", desc: "4 manufacturing facilities, capacity for 200 tonne/month.", color: "#BF00FF" },
  { icon: <Award className="w-6 h-6" />, title: "Certified Quality", desc: "FDA, FSSAI, and ISO 14001 certified packaging.", color: "#FFD700" },
  { icon: <Users className="w-6 h-6" />, title: "Farmer Network", desc: "2400+ farmer partners ensuring raw material security.", color: "#FF006E" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Unit Economics", desc: "15–30% cheaper than conventional packaging at scale.", color: "#00D4FF" },
];

export default function WhyUs() {
  return (
    <section id="why" className="section-padding relative" style={{ background: "#0D0D15" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(191,0,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6" style={{ color: "#FFD700", borderColor: "rgba(255,215,0,0.3)", background: "rgba(255,215,0,0.05)" }}>
            ★ Competitive Edge
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            WHY{" "}
            <span style={{ background: "linear-gradient(135deg, #FFD700, #00FF87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AGRIPACK
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.7 }}>
            We're not just a packaging company. We're a technology-enabled circular economy platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${r.color}50, transparent)` }} />
              <div className="mb-4 inline-flex p-3 rounded-xl" style={{ background: `${r.color}12`, color: r.color, border: `1px solid ${r.color}25` }}>
                {r.icon}
              </div>
              <h3 className="mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>{r.title}</h3>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.85rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.6 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
