import { motion } from "motion/react";
import { TrendingUp, BarChart3, ShieldCheck, Zap } from "lucide-react";

export default function Market() {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Market Size",
      value: "₹35,000 Cr",
      desc: "Sustainable packaging market in India by 2027.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      label: "Growth Rate",
      value: "18% CAGR",
      desc: "Rapidly expanding demand for eco-friendly alternatives.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      label: "Regulation",
      value: "Plastic Ban",
      desc: "Strict enforcement driving businesses to switch.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Demand",
      value: "Zomato/Swiggy",
      desc: "Massive push for sustainable delivery packaging.",
    },
  ];

  return (
    <section className="section-padding bg-agri-green-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">Market Opportunity</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Capturing a High-Growth <br /> Sustainable Future
            </h3>
            <p className="text-white/70 text-lg mb-12">
              The shift from plastic to sustainable packaging is not just a trend—it's a regulatory and consumer-driven mandate. AgriPack is positioned at the intersection of AgriTech and ClimateTech.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-agri-green mb-4">{stat.icon}</div>
                  <p className="text-3xl font-display font-bold mb-1">{stat.value}</p>
                  <p className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">{stat.label}</p>
                  <p className="text-sm text-white/60">{stat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-agri-green/10 p-12 rounded-[3rem] border border-white/10"
          >
            <div className="space-y-8">
              <h4 className="text-2xl font-display font-bold">Why Now?</h4>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-agri-green flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <p className="text-lg text-white/80">Government bans on single-use plastics are being strictly enforced across major Indian cities.</p>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-agri-green flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <p className="text-lg text-white/80">Consumer awareness about climate change is at an all-time high, influencing brand choices.</p>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-agri-green flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <p className="text-lg text-white/80">Supply chain disruptions in traditional packaging are making local, sustainable options more attractive.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
