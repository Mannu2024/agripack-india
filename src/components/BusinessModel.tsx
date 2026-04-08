import { motion } from "motion/react";
import { ShoppingCart, RefreshCw, Palette, Coins } from "lucide-react";

export default function BusinessModel() {
  const models = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "B2B Bulk Sales",
      desc: "Direct sales to restaurants, hotels, and FMCG brands at scale.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Subscription Model",
      desc: "Recurring monthly supply for cloud kitchens and QSR chains.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Branding",
      desc: "Premium white-labeling services for e-commerce and luxury brands.",
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Carbon Credits",
      desc: "Future revenue stream through verified carbon emission avoidance.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">Revenue Streams</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark mb-8">
              A Sustainable & <br /> Scalable Business Model
            </h3>
            <p className="text-agri-earth/70 text-lg mb-12">
              Our diversified revenue model ensures stability and long-term growth. We cater to both high-volume utility needs and premium custom requirements.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {models.map((m, i) => (
                <div key={i} className="p-6 rounded-2xl bg-agri-beige/20 border border-agri-green/5 hover:border-agri-green/20 transition-all">
                  <div className="text-agri-green mb-4">{m.icon}</div>
                  <h4 className="text-lg font-bold text-agri-green-dark mb-2">{m.title}</h4>
                  <p className="text-sm text-agri-earth/60">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-agri-green-dark p-12 rounded-[3rem] text-white">
              <h4 className="text-2xl font-display font-bold mb-8">Unit Economics</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-bottom border-white/10 pb-4">
                  <p className="text-white/60">Raw Material Cost</p>
                  <p className="font-bold text-xl">Low (Waste)</p>
                </div>
                <div className="flex justify-between items-end border-bottom border-white/10 pb-4">
                  <p className="text-white/60">Processing Efficiency</p>
                  <p className="font-bold text-xl">High (Micro-units)</p>
                </div>
                <div className="flex justify-between items-end border-bottom border-white/10 pb-4">
                  <p className="text-white/60">Market Demand</p>
                  <p className="font-bold text-xl">Exponential</p>
                </div>
                <div className="flex justify-between items-end border-bottom border-white/10 pb-4">
                  <p className="text-white/60">Gross Margin</p>
                  <p className="font-bold text-xl text-agri-green">35% - 45%</p>
                </div>
              </div>
              <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-sm italic text-white/60">"Our model is designed for rapid scaling across agricultural belts in India."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
