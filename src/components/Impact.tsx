import { motion } from "motion/react";
import { Leaf, Users, Trash2, Wind } from "lucide-react";

export default function Impact() {
  const metrics = [
    {
      icon: <Trash2 className="w-8 h-8" />,
      value: "12,000+",
      unit: "Tonnes",
      label: "Waste Reduced",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "₹2.5 Cr",
      unit: "Revenue",
      label: "Farmer Income",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      value: "5M+",
      unit: "Units",
      label: "Plastic Replaced",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      value: "8,500",
      unit: "Tonnes",
      label: "CO2 Avoided",
    },
  ];

  return (
    <section id="impact" className="section-padding bg-agri-beige/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#2E7D32 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">Our Impact</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark">
            Real Metrics, Real Change
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] text-center shadow-sm hover:shadow-xl transition-all border border-agri-green/5"
            >
              <div className="text-agri-green mb-6 flex justify-center">{m.icon}</div>
              <p className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark mb-2">{m.value}</p>
              <p className="text-agri-green font-bold text-sm uppercase tracking-widest mb-4">{m.unit}</p>
              <div className="h-px w-12 bg-agri-green/20 mx-auto mb-4" />
              <p className="text-agri-earth/60 font-medium">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-agri-green-dark rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="text-3xl font-display font-bold mb-4">Ready to make an impact?</h4>
            <p className="text-white/70 text-lg">Join 50+ brands that have already switched to AgriPack's sustainable solutions.</p>
          </div>
          <a
            href="#contact"
            className="bg-agri-green text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-agri-green-dark transition-all shadow-2xl shadow-black/20 whitespace-nowrap"
          >
            Switch to AgriPack
          </a>
        </div>
      </div>
    </section>
  );
}
