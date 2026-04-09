import { motion } from "motion/react";
import { CheckCircle, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹12,000",
    period: "/month",
    desc: <>For <span className="hi-white">small businesses</span> making the switch to sustainable packaging.</>,
    color: "#00D4FF",
    features: [
      <><span className="hi-cyan">Up to 5,000</span> units/month</>,
      <><span className="hi-white">3</span> product types</>,
      <>Standard delivery (<span className="hi-gold">5–7 days</span>)</>,
      <><span className="hi-white">FSSAI certified</span> products</>,
      <>Email support</>,
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "₹45,000",
    period: "/month",
    desc: <>For <span className="hi-green">scaling brands</span> that need consistent supply and <span className="hi-white">custom branding</span>.</>,
    color: "#00FF87",
    features: [
      <><span className="hi-green">Up to 50,000</span> units/month</>,
      <><span className="hi-white">All</span> product types</>,
      <>Express delivery (<span className="hi-gold">2–3 days</span>)</>,
      <><span className="hi-white">Custom branding</span> included</>,
      <><span className="hi-cyan">Dedicated</span> account manager</>,
      <><span className="hi-green">Carbon impact</span> report</>,
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: <>For large manufacturers with <span className="hi-purple">complex, high-volume</span> requirements.</>,
    color: "#BF00FF",
    features: [
      <><span className="hi-purple">Unlimited</span> volume</>,
      <><span className="hi-white">Full</span> product customization</>,
      <><span className="hi-gold">Same-day</span> dispatch</>,
      <><span className="hi-white">White-label</span> option</>,
      <><span className="hi-cyan">API</span> integration</>,
      <><span className="hi-purple">Priority SLA</span> &amp; 24/7 support</>,
      <><span className="hi-green">Carbon credit</span> certificates</>,
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative" style={{ background: "#0A0A0F" }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,135,0.4), rgba(191,0,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6" style={{ color: "#00FF87", borderColor: "rgba(0,255,135,0.3)", background: "rgba(0,255,135,0.05)" }}>
            ◈ Pricing Plans
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            CHOOSE YOUR{" "}
            <span style={{ background: "linear-gradient(135deg, #00FF87, #BF00FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              PLAN
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto lead-text">
            <span className="hi-white">Transparent pricing</span>, no hidden fees.{" "}
            <span className="hi-green">Scale up or down</span> as your business grows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 relative overflow-hidden ${plan.featured ? "scale-105" : ""}`}
              style={{
                background: plan.featured ? "rgba(0,255,135,0.06)" : "rgba(22,22,34,0.6)",
                border: `1px solid ${plan.featured ? "rgba(0,255,135,0.3)" : "rgba(255,255,255,0.07)"}`,
                backdropFilter: "blur(20px)",
                boxShadow: plan.featured ? "0 0 40px rgba(0,255,135,0.1), 0 0 80px rgba(0,255,135,0.05)" : "none",
              }}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 text-center py-1.5" style={{ background: "linear-gradient(90deg, rgba(0,255,135,0.8), rgba(0,212,255,0.8))", fontSize: "0.65rem", fontFamily: "Orbitron, sans-serif", letterSpacing: "0.15em", color: "#000", textTransform: "uppercase" }}>
                  Most Popular
                </div>
              )}
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${plan.color}60, transparent)`, top: plan.featured ? "2rem" : 0 }} />

              <div className="mt-2">
                <p style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.65rem", color: plan.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "#fff" }}>{plan.price}</span>
                  {plan.period && <span style={{ fontFamily: "Space Grotesk, sans-serif", color: "rgba(168,178,196,0.5)", fontSize: "0.9rem" }}>{plan.period}</span>}
                </div>
                <p className="mb-6" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", color: "rgba(168,178,196,0.6)", lineHeight: 1.6 }}>{plan.desc}</p>

                <div className="mb-8 h-px" style={{ background: `rgba(255,255,255,0.07)` }} />

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: plan.color }} />
                      <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", color: "rgba(168,178,196,0.8)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={plan.featured ? "btn-solid w-full flex justify-center" : "btn-neon w-full flex justify-center"}
                  style={!plan.featured ? { color: plan.color, borderColor: `${plan.color}40`, background: `${plan.color}08` } : {}}
                >
                  {plan.featured ? <Zap className="w-4 h-4 mr-2" /> : null}
                  {plan.cta}
                  {!plan.featured ? <ArrowRight className="w-4 h-4 ml-2" /> : null}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
