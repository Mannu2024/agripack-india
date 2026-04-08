import { motion } from "motion/react";
import { Leaf, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Products", href: "#products" },
    { name: "Impact", href: "#impact" },
    { name: "Investors", href: "#investors" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-agri-green p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-agri-green-dark">
            AgriPack <span className="text-agri-green">India</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-agri-earth/70 hover:text-agri-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-agri-green text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-agri-green-dark transition-colors shadow-lg shadow-agri-green/20"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-agri-green-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-agri-earth"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-agri-green text-white px-6 py-3 rounded-xl text-center font-bold"
            onClick={() => setIsOpen(false)}
          >
            Request Demo
          </a>
        </motion.div>
      )}
    </nav>
  );
}
