import { motion } from "motion/react";

export default function Roadmap() {
  const milestones = [
    {
      year: "Year 1",
      title: "Punjab Pilot",
      desc: "Establishing 5 micro-processing units and onboarding 100+ B2B clients in Ludhiana and Chandigarh.",
      status: "Current",
    },
    {
      year: "Year 2",
      title: "Regional Expansion",
      desc: "Scaling to Haryana and UP. Launching e-commerce mailer line and custom branding platform.",
      status: "Upcoming",
    },
    {
      year: "Year 3",
      title: "Pan-India & Exports",
      desc: "Establishing presence in 10 states. Starting exports to EU and US markets for sustainable luxury packaging.",
      status: "Vision",
    },
  ];

  return (
    <section className="section-padding bg-agri-beige/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark">
            Our Roadmap to Scale
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] relative overflow-hidden border border-agri-green/5 group"
            >
              <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest ${
                m.status === 'Current' ? 'bg-agri-green text-white' : 'bg-agri-beige text-agri-green-dark'
              }`}>
                {m.status}
              </div>
              <p className="text-agri-green font-display font-bold text-6xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">{m.year}</p>
              <h4 className="text-2xl font-bold text-agri-green-dark mb-4">{m.title}</h4>
              <p className="text-agri-earth/70 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
