import { motion } from "motion/react";
import { Package, Coffee, ShoppingBag, Mail, Palette } from "lucide-react";

export default function Products() {
  const categories = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Plates & Bowls",
      desc: "Sturdy, leak-proof, and heat-resistant plates made from sugarcane bagasse.",
      img: "https://picsum.photos/seed/plates/400/300",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Clamshell Containers",
      desc: "Perfect for cloud kitchens and QSRs. Keeps food fresh and warm.",
      img: "https://picsum.photos/seed/clamshell/400/300",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Pulp Trays",
      desc: "Protective packaging for fruits, eggs, and fragile items.",
      img: "https://picsum.photos/seed/trays/400/300",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-commerce Mailers",
      desc: "Tear-resistant, compostable mailers for sustainable shipping.",
      img: "https://picsum.photos/seed/mailers/400/300",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Branding",
      desc: "Add your logo and brand colors using eco-friendly soy-based inks.",
      img: "https://picsum.photos/seed/branding/400/300",
    },
  ];

  return (
    <section id="products" className="section-padding bg-agri-beige/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">Our Catalog</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark">
              Sustainable Packaging <br /> for Every Need
            </h3>
          </div>
          <a
            href="#contact"
            className="text-agri-green font-bold flex items-center gap-2 hover:underline underline-offset-8"
          >
            View Full Catalog
            <Package className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-agri-green/5"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-agri-green/10 text-agri-green rounded-lg">{cat.icon}</div>
                  <h4 className="text-xl font-bold text-agri-green-dark">{cat.title}</h4>
                </div>
                <p className="text-agri-earth/70 mb-6">{cat.desc}</p>
                <button className="text-sm font-bold text-agri-green flex items-center gap-2 group/btn">
                  Learn More
                  <div className="w-6 h-px bg-agri-green group-hover/btn:w-10 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
