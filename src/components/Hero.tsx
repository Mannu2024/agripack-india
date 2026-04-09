import { motion } from "motion/react";
import { ArrowRight, Zap, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#00D4FF", "#00FF87", "#BF00FF", "#FFD700"];
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const hex = Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fillStyle = p.color + hex;
        ctx.fill();
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }} />;
}

const stats = [
  { value: "100%", label: "Biodegradable" },
  { value: "50+", label: "B2B Partners" },
  { value: "\u20b90", label: "Plastic Used" },
  { value: "3x", label: "Cost Savings" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" style={{ background: "#0A0A0F" }}>
      <div className="absolute inset-0 bg-grid opacity-60" />
      <ParticleCanvas />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,255,0.012) 3px, rgba(0,212,255,0.012) 4px)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="section-label inline-flex mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ background: "#00FF87", opacity: 0.7 }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#00FF87" }} />
                </span>
                Pioneering Circular Economy in India
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
              style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1, color: "#fff", letterSpacing: "-0.02em" }}
            >
              TURNING{" "}
              <span style={{ background: "linear-gradient(135deg, #00D4FF, #00FF87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                FARM WASTE
              </span>
              <br />INTO{" "}
              <span style={{ color: "#00FF87", textShadow: "0 0 30px rgba(0,255,135,0.5)" }}>SUSTAINABLE</span>
              <br />PACKAGING
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 max-w-lg"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", color: "rgba(168, 178, 196, 0.85)", lineHeight: 1.7 }}
            >
              India's B2B platform for eco-friendly packaging made from agricultural waste.
              We empower farmers, reduce landfill, and help brands go green.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="#contact" className="btn-solid">
                <Zap className="w-4 h-4" />
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#solution" className="btn-neon btn-neon-green">
                Explore Solutions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 overflow-hidden" style={{ borderColor: "rgba(0,212,255,0.4)" }}>
                    <img src={`https://picsum.photos/seed/userag${i}/80/80`} alt="Partner" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.85rem", color: "rgba(168,178,196,0.7)" }}>
                Trusted by <span style={{ color: "#00FF87", fontWeight: 700 }}>50+</span> B2B brands across Punjab
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,212,255,0.2)", boxShadow: "0 0 60px rgba(0,212,255,0.1), inset 0 0 60px rgba(0,0,0,0.4)" }}>
                <img src="https://picsum.photos/seed/agripackv2/700/500" alt="Sustainable Packaging" className="w-full h-auto" style={{ filter: "brightness(0.7) saturate(1.2)" }} referrerPolicy="no-referrer" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(0,0,0,0.3) 50%, rgba(0,255,135,0.1) 100%)" }} />
                {[["top-3 left-3", "2px 0 0 2px"], ["top-3 right-3", "2px 2px 0 0"], ["bottom-3 left-3", "0 0 2px 2px"], ["bottom-3 right-3", "0 2px 2px 0"]].map(([pos, bw], i) => (
                  <div key={i} className={`absolute ${pos} w-6 h-6`} style={{ borderColor: "#00D4FF", borderStyle: "solid", borderWidth: bw, opacity: 0.7 }} />
                ))}
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 glass-cyan rounded-xl p-4 z-10"
                style={{ minWidth: "140px" }}
              >
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "2rem", color: "#00D4FF", textShadow: "0 0 20px rgba(0,212,255,0.6)" }}>100%</p>
                <p style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.7)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Biodegradable</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 glass-green rounded-xl p-4 z-10"
                style={{ minWidth: "140px" }}
              >
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "2rem", color: "#00FF87", textShadow: "0 0 20px rgba(0,255,135,0.6)" }}>\u20b90</p>
                <p style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.7)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Plastic Content</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl"
          style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.15)" }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center py-8 px-4" style={{ background: "rgba(10,10,15,0.8)" }}>
              <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "2.2rem", background: "linear-gradient(135deg, #00D4FF, #00FF87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>{s.value}</p>
              <p className="mt-2" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", color: "rgba(168,178,196,0.6)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex justify-center mt-12">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            style={{ color: "rgba(0,212,255,0.5)" }}
            onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(168,178,196,0.4)", textTransform: "uppercase" }}>Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
