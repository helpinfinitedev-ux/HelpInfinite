import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Share2, FileText, BarChart3, CheckCircle2, Sparkles, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const MarketingPage = () => {
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
            <Megaphone className="w-3.5 h-3.5 text-cyan-400" /> Digital Marketing Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Boost Your Online Presence
          </h1>
          <p className="text-sm sm:text-base text-blue-100/70 leading-relaxed">
            Data-driven growth, strategic SEO, and ROI-focused marketing campaigns to help your business dominate the digital market.
          </p>
        </motion.div>

        {/* Marketing Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* SEO Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-[#070D19]/80 backdrop-blur-xl border border-blue-800/40 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-blue-950/30">
              <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-700/40 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                Search Engine Optimization
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/70 mb-6 leading-relaxed">
                Improve your website's organic search visibility with our data-driven SEO techniques designed to rank higher on Google and bring qualified traffic.
              </p>
              <ul className="space-y-2.5 text-xs text-blue-200/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Keyword Research & Competitor Strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>On-Page, Off-Page & Technical SEO</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>High-Authority Link Building</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Social Media Marketing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-[#070D19]/80 backdrop-blur-xl border border-blue-800/40 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-blue-950/30">
              <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-700/40 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                Social Media Marketing
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/70 mb-6 leading-relaxed">
                Connect directly with your core target audience. We run high-converting social campaigns that expand brand reach and generate active leads.
              </p>
              <ul className="space-y-2.5 text-xs text-blue-200/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Creative Content & Reel Production</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Community & Brand Reputation Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>High-ROI Paid Social Ads (Meta & LinkedIn)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Content Marketing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="bg-[#070D19]/80 backdrop-blur-xl border border-blue-800/40 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-blue-950/30">
              <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-700/40 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                Content & Copywriting
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/70 mb-6 leading-relaxed">
                Tell a compelling story that turns passive readers into active buyers. Our content marketing adds real value at every stage of the user journey.
              </p>
              <ul className="space-y-2.5 text-xs text-blue-200/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>SEO-Optimized Blogs & Articles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Visual Content & Infographics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated Email Funnels & Newsletters</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Analytics & Reporting Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="bg-[#070D19]/80 backdrop-blur-xl border border-blue-800/40 rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-blue-950/30">
              <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-700/40 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                Analytics & Growth Insights
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/70 mb-6 leading-relaxed">
                Make confident decisions backed by accurate analytics. We provide full performance dashboards to track conversions and marketing spend ROI.
              </p>
              <ul className="space-y-2.5 text-xs text-blue-200/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Real-time Multi-Channel Tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Conversion Rate Optimization (CRO)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Transparent Monthly ROI Reports</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-blue-950/80 via-[#070D19] to-blue-950/80 border border-blue-800/40 rounded-2xl p-8 sm:p-12 shadow-2xl"
        >
          <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-3 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
            Ready to scale your business online?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100/70 max-w-xl mx-auto mb-6">
            Get in touch with our marketing specialists today to build a custom growth strategy tailored to your budget and objectives.
          </p>
          <Button asChild className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/30 border border-cyan-400/30">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </motion.div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingPage;