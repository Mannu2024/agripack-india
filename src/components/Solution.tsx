import { motion } from "motion/react";
import { Recycle, Users, Factory, Globe, ShoppingCart } from "lucide-react";

export default function Solution() {
  const steps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Direct Sourcing",
      desc: "We source raw agri-waste directly from farmers, providing them extra income.",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Micro-Processing",
      desc: "Decentralized units convert waste into high-quality biodegradable pulp.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "B2B Platform",
      desc: "Businesses order custom-branded eco-packaging via our tech-enabled platform.",
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Circular Model",
      desc: "Products return to the earth as compost, completing the lifecycle.",
    },
  ];

  return (
    <section id="solution" className="section-padding bg-agri-green-dark text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-agri-green/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">Our Solution</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              The AgriPack Ecosystem: <br /> Waste to Wealth
            </h3>
            <p className="text-white/70 text-lg mb-12 max-w-xl">
              We've built a scalable, tech-enabled supply chain that solves the pollution problem while creating economic value for farmers and sustainable alternatives for brands.
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-agri-green rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
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
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img
                src="https://picsum.photos/seed/factory/800/1000"
                alt="AgriPack Process"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-agri-green p-8 rounded-3xl shadow-2xl max-w-[240px]">
              <Globe className="w-10 h-10 mb-4" />
              <p className="font-bold text-lg leading-tight">Subscription model for recurring B2B needs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
