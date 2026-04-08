import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-agri-beige/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-agri-green uppercase tracking-widest mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-agri-green-dark mb-8">
              Let's Build a Greener <br /> Future Together
            </h3>
            <p className="text-agri-earth/70 text-lg mb-12">
              Whether you're a business looking for sustainable packaging, a farmer wanting to partner, or an investor interested in our mission—we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-agri-earth/40 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold text-agri-green-dark">founder@agripackindia.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-agri-earth/40 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold text-agri-green-dark">+91-9990662939</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-agri-earth/40 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-xl font-bold text-agri-green-dark">Ludhiana, Punjab, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-agri-green/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-agri-green-dark ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-agri-beige/30 border border-transparent focus:border-agri-green focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-agri-green-dark ml-1">Company</label>
                  <input
                    type="text"
                    placeholder="AgriPack India"
                    className="w-full px-6 py-4 rounded-2xl bg-agri-beige/30 border border-transparent focus:border-agri-green focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-agri-green-dark ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-6 py-4 rounded-2xl bg-agri-beige/30 border border-transparent focus:border-agri-green focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-agri-green-dark ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-6 py-4 rounded-2xl bg-agri-beige/30 border border-transparent focus:border-agri-green focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-agri-green text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-agri-green-dark transition-all shadow-xl shadow-agri-green/20 group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
