import { motion } from "motion/react";
import { AlertCircle, CloudRain, Ban, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <CloudRain className="w-8 h-8 text-red-500" />,
      title: "500M+ Tonnes Burned",
      desc: "Agricultural waste is burned annually, releasing massive CO2 and toxic pollutants.",
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Air Pollution Crisis",
      desc: "North India faces severe AQI drops every winter due to stubble burning.",
    },
    {
      icon: <Ban className="w-8 h-8 text-red-500" />,
      title: "Plastic Ban Struggles",
      desc: "Businesses face bans on single-use plastic but lack affordable, scalable alternatives.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Economic Loss",
      desc: "Farmers earn zero revenue from waste, missing out on potential income streams.",
    },
  ];

  return (
    <section id="problem" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4">The Crisis</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark">
            Why Sustainable Packaging <br className="hidden md:block" /> is No Longer Optional
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-agri-beige/20 border border-agri-green/5 hover:border-red-200 transition-all group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h4 className="text-xl font-bold text-agri-green-dark mb-3">{p.title}</h4>
              <p className="text-agri-earth/70 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
