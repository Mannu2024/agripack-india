import { motion } from "motion/react";
import { CheckCircle2, DollarSign, Cpu, Truck, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const usps = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Competitive",
      desc: "Direct farmer sourcing allows us to match plastic pricing while being 100% eco-friendly.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Tech-Enabled",
      desc: "Our B2B platform simplifies ordering, tracking, and custom branding for businesses.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Regulatory Partner",
      desc: "We help brands stay compliant with evolving plastic bans and environmental laws.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Scalable Supply",
      desc: "Our decentralized processing model ensures a consistent supply even during peak demand.",
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="https://picsum.photos/seed/farmer/800/800"
                alt="Farmer Sourcing"
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -right-10 bg-agri-beige p-8 rounded-3xl shadow-xl border border-agri-green/10 hidden md:block">
                <p className="text-agri-green font-bold text-4xl mb-1">40%</p>
                <p className="text-xs font-bold text-agri-earth/60 uppercase tracking-widest">More Income for Farmers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">Why AgriPack?</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark mb-8">
              The AgriPack Advantage
            </h3>
            <p className="text-agri-earth/70 text-lg mb-12">
              We aren't just selling products; we're building a sustainable infrastructure for India's future. Our model creates a win-win for farmers, businesses, and the environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {usps.map((usp, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-agri-green/10 text-agri-green rounded-lg group-hover:bg-agri-green group-hover:text-white transition-colors">
                      {usp.icon}
                    </div>
                    <h4 className="text-lg font-bold text-agri-green-dark">{usp.title}</h4>
                  </div>
                  <p className="text-agri-earth/60 text-sm leading-relaxed">{usp.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-agri-beige/30 rounded-2xl border border-agri-green/10 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-agri-green flex-shrink-0" />
              <p className="text-sm font-medium text-agri-green-dark">
                "AgriPack has reduced our packaging costs by 15% while helping us meet our sustainability goals." — <span className="italic">Ludhiana Cloud Kitchen Owner</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
