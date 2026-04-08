import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Waste Collection",
      desc: "Farmers supply rice husk, wheat straw, and bagasse to our local collection hubs.",
    },
    {
      num: "02",
      title: "Pulp Conversion",
      desc: "Our micro-processing units convert raw waste into high-grade biodegradable pulp.",
    },
    {
      num: "03",
      title: "Product Molding",
      desc: "The pulp is molded into plates, containers, and trays using eco-friendly processes.",
    },
    {
      num: "04",
      title: "B2B Delivery",
      desc: "Businesses order via our platform and receive sustainable packaging at scale.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark">
            From Farm Waste to Your Doorstep
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-agri-green/10 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 bg-agri-green text-white rounded-full flex items-center justify-center text-3xl font-display font-bold mx-auto mb-8 shadow-xl shadow-agri-green/20 border-4 border-white">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-agri-green-dark mb-4">{step.title}</h4>
                <p className="text-agri-earth/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
