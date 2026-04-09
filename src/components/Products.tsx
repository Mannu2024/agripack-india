import { motion } from "motion/react";
import { Package, Coffee, ShoppingBag, Mail, Palette, ArrowUpRight } from "lucide-react";

const categories = [
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Plates & Bowls",
    desc: "Sturdy, leak-proof, heat-resistant plates from sugarcane bagasse. Microwave-safe.",
    tag: "Best Seller",
    tagColor: "#00FF87",
    img: "https://picsum.photos/seed/plates99/400/300",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Clamshell Containers",
    desc: "Perfect for cloud kitchens and QSRs. Keeps food fresh, warm, and presentable.",
    tag: "New",
    tagColor: "#00D4FF",
    img: "https://picsum.photos/seed/clamshell99/400/300",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Pulp Trays",
    desc: "Protective packaging for fruits, eggs, and fragile electronics.",
    tag: "Trending",
    tagColor: "#BF00FF",
    img: "https://picsum.photos/seed/trays99/400/300",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "E-commerce Mailers",
    desc: "Tear-resistant, compostable mailers for sustainable shipping at scale.",
    tag: "Eco Pick",
    tagColor: "#FFD700",
    img: "https://picsum.photos/seed/mailers99/400/300",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Custom Branding",
    desc: "Logo and brand colors using eco-friendly soy-based inks. MOQ 500 units.",
    tag: "Custom",
    tagColor: "#FF006E",
    img: "https://picsum.photos/seed/branding99/400/300",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Industrial Packaging",
    desc: "Heavy-duty corrugated sheets and protective packaging for manufacturing.",
    tag: "B2B",
    tagColor: "#00D4FF",
    img: "https://picsum.photos/seed/industrial99/400/300",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding relative" style={{ background: "#0D0D15" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(191,0,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <div className="section-label inline-flex mb-6" style={{ color: "#BF00FF", borderColor: "rgba(191,0,255,0.3)", background: "rgba(191,0,255,0.05)" }}>
              ◈ Product Catalog
            </div>
            <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.15 }}>
              SUSTAINABLE PACKAGING
              <br />
              <span style={{ background: "linear-gradient(135deg, #BF00FF, #00D4FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                FOR EVERY NEED
              </span>
            </h2>
          </div>
          <a href="#contact" className="btn-neon flex items-center gap-2 flex-shrink-0" style={{ color: "#BF00FF", borderColor: "rgba(191,0,255,0.4)", background: "rgba(191,0,255,0.05)" }}>
            View Full Catalog <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl overflow-hidden card-hover group relative"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ filter: "brightness(0.75) saturate(1.1)" }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(13,13,21,0.9) 100%)" }} />
                {/* Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded text-xs font-bold" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", letterSpacing: "0.1em", background: `${cat.tagColor}20`, border: `1px solid ${cat.tagColor}50`, color: cat.tagColor }}>
                  {cat.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
                    {cat.icon}
                  </div>
                  <h4 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>{cat.title}</h4>
                </div>
                <p className="mb-5" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.85rem", color: "rgba(168,178,196,0.7)", lineHeight: 1.65 }}>{cat.desc}</p>
                <button
                  className="flex items-center gap-2 text-sm font-semibold transition-all"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#00D4FF" }}
                >
                  Get Quote
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Bottom glow line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(90deg, ${cat.tagColor}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
