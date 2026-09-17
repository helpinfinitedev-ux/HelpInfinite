import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, ShieldCheck, Cpu, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const MobileAppsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500 selection:text-black">

      {/* Sticky Top Header */}
      <header className="bg-[#030712]/80 backdrop-blur-xl border-b border-blue-900/40 sticky top-0 z-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo/logo.png"
              alt="Help Infinite"
              className="h-auto w-[140px] sm:w-[160px] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <Button asChild variant="ghost" size="sm" className="text-blue-200 hover:text-cyan-300 hover:bg-blue-950/60 border border-blue-800/40 rounded-full text-xs font-semibold">
            <Link to="/">
              <ArrowLeft className="mr-1.5 w-3.5 h-3.5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">

        {/* Background Ambient Glow Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-[10px] sm:text-xs text-cyan-300 font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Next-Gen Mobile Development
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Mobile Apps Development
          </h1>
          <p className="text-sm sm:text-base text-blue-100/70 leading-relaxed">
            Reach more customers with beautiful, high-performing mobile applications engineered seamlessly for both iOS and Android devices.
          </p>
        </motion.div>

        {/* Tech Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Native Apps Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-[#070D19]/80 backdrop-blur-xl border border-blue-800/40 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-blue-950/30">
              <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-700/40 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                Native Applications
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/70 mb-6 leading-relaxed">
                We build high-performance native applications for iOS and Android that provide unmatched responsiveness and leverage full device capabilities.
              </p>
              <ul className="space-y-2.5 text-xs text-blue-200/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Swift & SwiftUI for iOS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Kotlin & Jetpack Compose for Android</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full Hardware & Device Feature Integration</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Cross-Platform Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-[#070D19]/80 backdrop-blur-xl border border-blue-800/40 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-blue-950/30">
              <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-700/40 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                Cross-Platform Solutions
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/70 mb-6 leading-relaxed">
                Maximize your market reach with modern cross-platform tech that allows single-codebase deployment across multiple OS without compromising performance.
              </p>
              <ul className="space-y-2.5 text-xs text-blue-200/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>React Native Framework</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Flutter Engine Applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Faster Time-to-Market & Cost Savings</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Development Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-[#070D19]/60 backdrop-blur-xl border border-blue-900/40 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 text-white">
              Our Development Lifecycle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/30 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-3 font-extrabold text-white text-sm shadow-md shadow-cyan-500/20">
                  1
                </div>
                <h3 className="text-sm font-bold text-white mb-1">Discovery & Strategy</h3>
                <p className="text-xs text-blue-100/60 leading-relaxed">
                  Analyzing core requirements and mapping out product architecture.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/30 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-3 font-extrabold text-white text-sm shadow-md shadow-cyan-500/20">
                  2
                </div>
                <h3 className="text-sm font-bold text-white mb-1">UI/UX & Prototyping</h3>
                <p className="text-xs text-blue-100/60 leading-relaxed">
                  Crafting sleek, accessible, and high-converting app interface designs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/30 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-3 font-extrabold text-white text-sm shadow-md shadow-cyan-500/20">
                  3
                </div>
                <h3 className="text-sm font-bold text-white mb-1">Build & QA Testing</h3>
                <p className="text-xs text-blue-100/60 leading-relaxed">
                  Rigorous code development, security checks, and App Store deployment.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Portfolio Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-950/80 via-[#070D19] to-blue-950/80 border border-blue-800/40 rounded-2xl p-6 sm:p-8 mb-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                Explore Mobile Projects
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/70 mb-5 leading-relaxed">
                Check out our curated portfolio of mobile applications built across e-commerce, enterprise SaaS, and consumer tech.
              </p>
              <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider px-5 rounded-full border border-cyan-400/30 shadow-md">
                <Link to="/portfolio" className="flex items-center gap-1.5">
                  View Showcase <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>

            <div className="bg-blue-950/40 border border-blue-800/30 rounded-xl p-4 sm:p-5">
              <ShieldCheck className="w-5 h-5 text-cyan-400 mb-2" />
              <p className="text-xs text-blue-100/80 italic mb-3 leading-relaxed">
                "Help Infinite delivered an exceptional mobile app that exceeded our expectations. The intuitive design and smooth functionality drastically boosted our user retention."
              </p>
              <p className="text-[11px] text-cyan-300 font-semibold text-right">- Jane Doe, CEO of TechCorp</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center py-6"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white">
            Ready to turn your mobile concept into reality?
          </h2>
          <Button asChild className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-lg shadow-blue-600/30 border border-cyan-400/30">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </motion.div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MobileAppsPage;