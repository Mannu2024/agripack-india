import { Leaf, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-agri-green-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="bg-agri-green p-1.5 rounded-lg">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                AgriPack <span className="text-agri-green">India</span>
              </span>
            </a>
            <p className="text-white/60 leading-relaxed mb-8">
              Converting agricultural waste into sustainable packaging solutions for a cleaner, greener India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-agri-green transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-agri-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-agri-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#problem" className="hover:text-agri-green transition-colors">The Problem</a></li>
              <li><a href="#solution" className="hover:text-agri-green transition-colors">Our Solution</a></li>
              <li><a href="#products" className="hover:text-agri-green transition-colors">Product Catalog</a></li>
              <li><a href="#impact" className="hover:text-agri-green transition-colors">Impact Metrics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Company</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-agri-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-agri-green transition-colors">Careers</a></li>
              <li><a href="#investors" className="hover:text-agri-green transition-colors">Investor Relations</a></li>
              <li><a href="#contact" className="hover:text-agri-green transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Stay updated with our latest impact reports and product launches.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-grow outline-none focus:border-agri-green transition-colors"
              />
              <button className="bg-agri-green p-3 rounded-xl hover:bg-agri-green-dark transition-colors">
                <Leaf className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2026 AgriPack India. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
