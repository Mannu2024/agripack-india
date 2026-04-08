import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-agri-beige/30">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-agri-green/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-agri-green/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-agri-green/10 text-agri-green-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green"></span>
            </span>
            Pioneering Circular Economy in India
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-agri-green-dark leading-[1.1] mb-6">
            Turning Farm Waste into <span className="text-agri-green">Sustainable</span> Packaging
          </h1>
          <p className="text-lg md:text-xl text-agri-earth/80 mb-10 max-w-xl leading-relaxed">
            India’s B2B platform for eco-friendly packaging made from agricultural waste. We empower farmers and protect the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group bg-agri-green text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-agri-green-dark transition-all shadow-xl shadow-agri-green/20"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solution"
              className="bg-white text-agri-green-dark border-2 border-agri-green/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:border-agri-green transition-all"
            >
              <Play className="w-5 h-5 fill-agri-green text-agri-green" />
              Partner With Us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-agri-earth/60">
              Trusted by <span className="font-bold text-agri-green-dark">50+</span> B2B brands across Punjab
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://picsum.photos/seed/agripack/800/1000"
              alt="Sustainable Packaging"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-agri-green/10"
          >
            <p className="text-agri-green font-bold text-3xl">100%</p>
            <p className="text-xs text-agri-earth/60 uppercase font-bold tracking-widest">Biodegradable</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-agri-green/10"
          >
            <p className="text-agri-green font-bold text-3xl">₹0</p>
            <p className="text-xs text-agri-earth/60 uppercase font-bold tracking-widest">Plastic Content</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
