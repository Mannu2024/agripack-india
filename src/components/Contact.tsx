import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Send, MapPin, Mail, Phone, Zap } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "0.9rem",
    color: "#fff",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contact" className="section-padding relative" style={{ background: "#0D0D15" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(0,255,135,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="section-label inline-flex mb-6">
            ✉ Get In Touch
          </div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff" }}>
            START YOUR{" "}
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #00FF87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              GREEN JOURNEY
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto lead-text">
            Request a <span className="hi-cyan">demo</span>, discuss your <span className="hi-white">packaging needs</span>, or explore{" "}
            <span className="hi-gold">investment opportunities</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: <MapPin className="w-5 h-5" />, title: "Headquarters", val: "Ludhiana, Punjab, India" },
              { icon: <Mail className="w-5 h-5" />, title: "Email", val: "hello@agripackindia.com" },
              { icon: <Phone className="w-5 h-5" />, title: "Phone", val: "+91 98140 00000" },
            ].map((info, i) => (
              <div key={i} className="glass rounded-xl p-5 flex items-center gap-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
                  {info.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{info.title}</p>
                  <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.95rem", color: "#fff", fontWeight: 500 }}>{info.val}</p>
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-6 mt-4" style={{ border: "1px solid rgba(0,255,135,0.2)" }}>
              <p style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.7rem", color: "#00FF87", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Response Time</p>
              <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "2rem", color: "#00FF87" }}>{"< 24h"}</p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.85rem", color: "rgba(168,178,196,0.6)" }}>We respond to all inquiries within <span className="hi-green">one business day</span>.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8" style={{ border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl" style={{ background: "linear-gradient(90deg, #00D4FF, #00FF87)" }} />

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(0,255,135,0.1)", border: "2px solid #00FF87" }}>
                    <Zap className="w-8 h-8" style={{ color: "#00FF87" }} />
                  </div>
                  <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#00FF87" }}>Message Sent!</p>
                  <p className="mt-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: "rgba(168,178,196,0.7)" }}>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Name</label>
                      <input style={inputStyle} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(0,212,255,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 10px rgba(0,212,255,0.1)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Company</label>
                      <input style={inputStyle} placeholder="Company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(0,212,255,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 10px rgba(0,212,255,0.1)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Email</label>
                      <input type="email" style={inputStyle} placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(0,212,255,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 10px rgba(0,212,255,0.1)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Phone</label>
                      <input type="tel" style={inputStyle} placeholder="+91 98XXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(0,212,255,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 10px rgba(0,212,255,0.1)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Message</label>
                    <textarea rows={4} style={{ ...inputStyle, resize: "vertical" }} placeholder="Tell us about your packaging needs..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(0,212,255,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 10px rgba(0,212,255,0.1)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                  <button type="submit" className="btn-solid w-full">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
