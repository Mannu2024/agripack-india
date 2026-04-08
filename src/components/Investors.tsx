import { motion } from "motion/react";
import { FileText, Mail, ArrowRight, TrendingUp, Target, PieChart } from "lucide-react";

export default function Investors() {
  const highlights = [
    { icon: <TrendingUp />, title: "Strong Unit Economics", desc: "Low raw material cost with high market demand." },
    { icon: <Target />, title: "Scalable Model", desc: "Decentralized processing units for rapid regional growth." },
    { icon: <PieChart />, title: "Clear Exit Path", desc: "High potential for acquisition by global packaging giants." },
  ];

  return (
    <section id="investors" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-agri-green-dark rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">For Investors</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Invest in the <br /> Circular Economy
              </h3>
              <p className="text-white/70 text-lg mb-12">
                AgriPack India is a seed-stage startup solving one of India's biggest environmental challenges while tapping into a multi-billion dollar market.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-agri-green-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-agri-beige transition-all">
                  <FileText className="w-5 h-5" />
                  Download Pitch Deck
                </button>
                <button className="bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:border-white transition-all">
                  <Mail className="w-5 h-5" />
                  Contact Founder
                </button>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 flex gap-6 items-start group hover:bg-white/10 transition-all"
                >
                  <div className="p-3 bg-agri-green rounded-xl text-white group-hover:scale-110 transition-transform">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{h.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
