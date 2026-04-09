import { Leaf, Linkedin, Twitter, Instagram, Github, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative" style={{ background: "#060609" }}>
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(0,255,135,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "rgba(0,255,135,0.1)", border: "1px solid rgba(0,255,135,0.3)" }}>
                <Leaf className="w-5 h-5" style={{ color: "#00FF87" }} />
              </div>
              <span style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.1em", color: "#fff" }}>
                AGRI<span style={{ color: "#00FF87" }}>PACK</span>
              </span>
            </a>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", color: "rgba(168,178,196,0.6)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Converting agricultural waste into sustainable packaging solutions for a cleaner, greener India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Instagram className="w-4 h-4" />, href: "#" },
                { icon: <Github className="w-4 h-4" />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(168,178,196,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "#00D4FF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(168,178,196,0.6)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.7rem", color: "#fff", letterSpacing: "0.15em", textTransform: "uppercase" }}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                ["The Problem", "#problem"],
                ["Our Solution", "#solution"],
                ["Products", "#products"],
                ["Impact Metrics", "#impact"],
                ["Roadmap", "#roadmap"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", color: "rgba(168,178,196,0.6)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(168,178,196,0.6)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.7rem", color: "#fff", letterSpacing: "0.15em", textTransform: "uppercase" }}>Company</h4>
            <ul className="space-y-3">
              {[
                ["About Us", "#"],
                ["Careers", "#"],
                ["Investor Relations", "#investors"],
                ["Press Kit", "#"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", color: "rgba(168,178,196,0.6)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(168,178,196,0.6)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.7rem", color: "#fff", letterSpacing: "0.15em", textTransform: "uppercase" }}>Newsletter</h4>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.85rem", color: "rgba(168,178,196,0.6)", lineHeight: 1.6, marginBottom: "1rem" }}>
              Stay updated with impact reports and product launches.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "6px",
                  padding: "0.6rem 0.875rem",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "0.85rem",
                  color: "#fff",
                  outline: "none",
                  minWidth: 0,
                }}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00D4FF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
                }}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8rem", color: "rgba(168,178,196,0.35)" }}>
              © 2026 AgriPack India. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
                <a
                  key={t}
                  href="#"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8rem", color: "rgba(168,178,196,0.35)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(168,178,196,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(168,178,196,0.35)")}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
