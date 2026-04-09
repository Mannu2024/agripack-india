import { motion } from "motion/react";
import { ArrowRight, Zap, Leaf } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding relative" style={{ background: "#0A0A0F" }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(0,255,135,0.5), transparent)" }} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {/* Glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)", filter: "blur(30px)" }} />

          <div className="relative glass rounded-3xl p-12 md:p-16" style={{ border: "1px solid rgba(0,255,135,0.2)" }}>
            <div className="absolute top-0 left-0 w-full h-px rounded-t-3xl" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.6), rgba(0,255,135,0.6), transparent)" }} />

            {/* Corner accents */}
            {[["top-4 left-4", "2px 0 0 2px"], ["top-4 right-4", "2px 2px 0 0"], ["bottom-4 left-4", "0 0 2px 2px"], ["bottom-4 right-4", "0 2px 2px 0"]].map(([pos, bw], i) => (
              <div key={i} className={`absolute ${pos} w-5 h-5`} style={{ borderColor: "rgba(0,212,255,0.4)", borderStyle: "solid", borderWidth: bw }} />
            ))}

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.25)" }}>
              <Leaf className="w-4 h-4" style={{ color: "#00FF87" }} />
              <span style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.65rem", color: "#00FF87", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Join the Green Revolution
              </span>
            </div>

            <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              READY TO GO{" "}
              <span className="heading-shimmer" style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "inherit" }}>
                GREEN?
              </span>
            </h2>

            <p className="mb-10 max-w-xl mx-auto lead-text">
              Join <span className="hi-gold">50+ forward-thinking brands</span> already{" "}
              <span className="hi-green">reducing their carbon footprint</span> with AgriPack.{" "}
              Get your first order in <span className="hi-cyan">72 hours</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-solid btn-pulse relative">
                <Zap className="w-4 h-4" />
                Start Now — Free Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#investors" className="btn-neon">
                Investor Inquiry
              </a>
            </div>

            <p className="mt-8" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8rem", color: "rgba(168,178,196,0.4)" }}>
              <span className="hi-green" style={{ fontSize: "inherit" }} aria-hidden="true">✓</span> No commitment required{" "}
              · <span className="hi-cyan" style={{ fontSize: "inherit" }} aria-hidden="true">⚡</span> Setup in 48 hours{" "}
              · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
