import { motion, AnimatePresence } from "motion/react";
import { Leaf, Menu, X, Zap } from "lucide-react";
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
      style={{
        background: scrolled
          ? "rgba(10, 10, 15, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.15)" : "none",
        boxShadow: scrolled ? "0 4px 40px rgba(0, 212, 255, 0.05)" : "none",
      }}
    >
      {/* Top accent line */}
      {scrolled && (
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.7), rgba(0,255,135,0.7), transparent)",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="relative w-9 h-9 flex items-center justify-center rounded-md"
            style={{
              background: "rgba(0, 255, 135, 0.1)",
              border: "1px solid rgba(0, 255, 135, 0.4)",
              boxShadow: "0 0 16px rgba(0, 255, 135, 0.2)",
            }}
          >
            <Leaf className="w-5 h-5" style={{ color: "#00FF87" }} />
          </div>
          <span
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
              color: "#fff",
            }}
          >
            AGRI<span style={{ color: "#00FF87" }}>PACK</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium transition-all duration-300 group"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "rgba(168, 178, 196, 0.8)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#00D4FF";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(168, 178, 196, 0.8)";
              }}
            >
              {link.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "linear-gradient(90deg, #00D4FF, #00FF87)" }}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="btn-neon"
            style={{ fontSize: "0.7rem", padding: "0.6rem 1.5rem" }}
          >
            <Zap className="w-3.5 h-3.5" />
            Request Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden transition-colors duration-200"
          style={{ color: "#00D4FF" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full md:hidden overflow-hidden"
            style={{
              background: "rgba(10, 10, 15, 0.97)",
              borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 text-lg"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 500,
                    color: "rgba(168, 178, 196, 0.9)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <span
                    className="w-5 h-px"
                    style={{ background: "rgba(0,212,255,0.5)" }}
                  />
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-solid mt-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                <Zap className="w-4 h-4" />
                Request Demo
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
