import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    title: "Head of Supply Chain",
    company: "FreshBox Foods",
    avatar: "https://picsum.photos/seed/testimonial1/80/80",
    quote: "AgriPack cut our packaging carbon footprint by 60% and we're actually saving 20% on costs. The quality is exceptional — our customers love it.",
    stars: 5,
    color: "#00D4FF",
  },
  {
    name: "Priya Mehta",
    title: "Co-founder",
    company: "GreenKart Ecommerce",
    avatar: "https://picsum.photos/seed/testimonial2/80/80",
    quote: "We switched 100% to AgriPack for our e-commerce mailers. The compostable packaging has become a brand differentiator for us with conscious consumers.",
    stars: 5,
    color: "#00FF87",
  },
  {
    name: "Vikram Singh",
    title: "Operations Director",
    company: "Punjab Agro Industries",
    avatar: "https://picsum.photos/seed/testimonial3/80/80",
    quote: "As a farmer cooperative, we're not just customers — we're raw material partners. AgriPack has given our members an additional income stream.",
    stars: 5,
    color: "#BF00FF",
  },
  {
    name: "Anita Patel",
    title: "Sustainability Lead",
    company: "MegaMart Retail",
    avatar: "https://picsum.photos/seed/testimonial4/80/80",
    quote: "Meeting our ESG targets was hard until AgriPack. Their supply chain transparency and carbon tracking dashboard is best-in-class.",
    stars: 5,
    color: "#FFD700",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="section-padding relative" style={{ background: "#0D0D15" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), rgba(0,212,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6" style={{ color: "#FFD700", borderColor: "rgba(255,215,0,0.3)", background: "rgba(255,215,0,0.05)" }}>
            ❝ Testimonials
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            WHAT OUR{" "}
            <span style={{ background: "linear-gradient(135deg, #FFD700, #FF006E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              PARTNERS SAY
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-10 relative overflow-hidden text-center"
            style={{ border: `1px solid ${t.color}20` }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)` }} />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full" style={{ background: `radial-gradient(circle, ${t.color}08, transparent)` }} />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(t.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: t.color }} />
              ))}
            </div>

            <p className="mb-8" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, fontStyle: "italic" }}>
              "{t.quote}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" style={{ border: `2px solid ${t.color}50` }} referrerPolicy="no-referrer" />
              <div className="text-left">
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>{t.name}</p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8rem", color: "rgba(168,178,196,0.6)" }}>{t.title}, {t.company}</p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-lg flex items-center justify-center transition-all" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(168,178,196,0.7)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)"; (e.currentTarget as HTMLElement).style.color = "#00D4FF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(168,178,196,0.7)"; }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === active ? "24px" : "8px",
                    height: "8px",
                    background: i === active ? testimonials[i].color : "rgba(255,255,255,0.15)",
                    boxShadow: i === active ? `0 0 10px ${testimonials[i].color}50` : "none",
                  }}
                />
              ))}
            </div>

            <button onClick={next} className="w-10 h-10 rounded-lg flex items-center justify-center transition-all" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(168,178,196,0.7)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)"; (e.currentTarget as HTMLElement).style.color = "#00D4FF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(168,178,196,0.7)"; }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
