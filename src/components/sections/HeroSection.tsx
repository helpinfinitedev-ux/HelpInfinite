import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [showReel, setShowReel] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Video Background (full cover) ── */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay — stronger at edges, lighter in center */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* ── Animated blue accent glow ── */}
      <div
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,150,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Hero Content — starts right below navbar (~88px) ── */}
      <div
        className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-10 lg:px-20"
        style={{ paddingTop: "88px" }}
      >
        <div className="max-w-7xl mx-auto w-full">

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Build
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #0096FF 0%, #00d4ff 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Experiences
            </span>
            That Grow Your Business.
          </motion.h1>

          {/* Sub-description */}
          <motion.p
            className="text-white/65 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Web development, mobile apps, SEO &amp; email marketing —
            everything your brand needs to dominate online.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {/* Primary CTA */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm md:text-base transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #0096FF, #0060CC)",
                boxShadow: "0 0 30px rgba(0,150,255,0.45)",
              }}
            >
              Explore Our Services
              <ArrowRight size={18} />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm md:text-base border border-white/25 bg-white/8 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
            >
              Get a Free Quote
            </motion.a>
          </motion.div>

        </div>
      </div>


      {/* ── Bottom Fade to next section ── */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
};
