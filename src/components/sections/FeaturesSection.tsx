import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Smartphone, Zap, CheckCircle2, ShieldCheck, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

// Centered Heading Component with High-Contrast Glowing Typography
const FeaturesHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white my-2">
        ELEVATE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">DIGITAL EXPERIENCE</span>
      </h2>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 md:py-20 px-4 bg-[#030712] overflow-hidden text-white">
      {/* Background Subtle Grid Texture to remove emptiness */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* Vibrant Multi-Color Ambient Glow Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-indigo-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[350px] bg-cyan-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-[350px] h-[300px] bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Section Header */}
        <div className="mb-14 text-center">
          <FeaturesHeading />
          <motion.p
            className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto mt-4 leading-relaxed font-normal"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We empower businesses with high-performance digital solutions engineered to scale seamlessly and maximize conversion rates.
          </motion.p>
        </div>

        {/* Rich Glass Bento Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Hero Feature Card: Online Presence (Spans 2 Columns) */}
          <div className="lg:col-span-2 group">
            <Link to="/marketing" className="block h-full">
              <div className="relative h-full flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-blue-500/40 hover:border-cyan-400 bg-gradient-to-br from-[#0B1528]/95 via-[#070D19]/90 to-[#030712]/95 backdrop-blur-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group-hover:-translate-y-1.5 overflow-hidden">

                {/* Internal Glow Accent Overlay */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none group-hover:bg-cyan-400/30 transition-all duration-500" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 border border-cyan-300/40 text-white shadow-lg shadow-cyan-500/30">
                      <TrendingUp className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 shadow-md">
                      High Growth & Traffic
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                    Boost Your Online Presence
                  </h3>
                  <p className="text-sm md:text-base text-blue-100/80 max-w-xl leading-relaxed mb-8">
                    Our data-driven marketing frameworks, performance SEO, and conversion optimization strategies propel your brand to the top of your market segment.
                  </p>

                  {/* Micro Visual Features List to fill space */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-200/90 bg-blue-950/50 p-2.5 rounded-xl border border-blue-800/40">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Targeted SEO
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-200/90 bg-blue-950/50 p-2.5 rounded-xl border border-blue-800/40">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" /> Brand Strategy
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-200/90 bg-blue-950/50 p-2.5 rounded-xl border border-blue-800/40 col-span-2 sm:col-span-1">
                      <Rocket className="w-4 h-4 text-cyan-400 shrink-0" /> High ROI Ads
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive CTA Bar */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-blue-900/60 text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-white transition-colors">
                  <span>Explore Growth Solutions</span>
                  <div className="p-2.5 rounded-xl bg-blue-600/30 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 border border-cyan-400/30 text-white transition-all duration-300 shadow-md">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </Link>
          </div>

          {/* Secondary Feature Card: Mobile Apps */}
          <div className="group">
            <Link to="/mobile-apps" className="block h-full">
              <div className="relative h-full flex flex-col justify-between p-8 rounded-3xl border border-blue-800/50 hover:border-cyan-400/80 bg-gradient-to-b from-[#0B1528]/90 to-[#050B14]/95 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/15 transition-all duration-300 group-hover:-translate-y-1.5 overflow-hidden">

                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-900/80 border border-blue-400/30 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300 shadow-md">
                      <Smartphone className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-950 border border-blue-500/30 text-blue-300">
                      iOS & Android
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                    Mobile Applications
                  </h3>
                  <p className="text-sm text-blue-100/80 leading-relaxed mb-6">
                    Deliver memorable user experiences with lightning-fast native and cross-platform apps custom-engineered for performance.
                  </p>
                </div>

                {/* Bottom Interactive CTA */}
                <div className="pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-300 group-hover:text-cyan-300 transition-colors">
                  <span>View Case Studies</span>
                  <div className="p-2 rounded-lg bg-blue-950 border border-blue-700/50 group-hover:border-cyan-400">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </Link>
          </div>

          {/* Call to Action Banner (Vibrant Gradient CTA Card) */}
          <div className="lg:col-span-3 mt-4">
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/40 hover:border-cyan-400 bg-gradient-to-r from-[#071329] via-[#0B1B38] to-[#071329] p-8 md:p-10 shadow-2xl transition-all duration-300 group">

              {/* Vibrant Outer Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-500" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 mb-3">
                    <Zap className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300" /> Fast Execution & Support
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                    Have a Vision? Let's Turn It Into Reality.
                  </h3>
                  <p className="text-sm md:text-base text-blue-100/80">
                    Get a zero-commitment consultation and a customized digital strategy roadmap.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-cyan-400/40 active:scale-95 shrink-0"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};