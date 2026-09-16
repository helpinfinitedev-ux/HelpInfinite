import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="relative bg-[#030712] text-white py-8 md:py-10 border-t border-blue-900/40 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-black blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pb-8 border-b border-blue-900/30">

          {/* Brand & Logo Column */}
          <div className="lg:col-span-2 space-y-3 pr-0 lg:pr-4">
            <Link to="/" className="inline-block group">
              <img
                src="/logo/logo.png"
                alt="Help Infinite Logo"
                className="h-auto w-[150px] sm:w-[165px] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-xs text-blue-100/60 leading-relaxed max-w-sm">
              Empowering businesses with cutting-edge digital solutions, sleek web architectures, and high-impact marketing strategies.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/services/web" className="text-blue-100/70 hover:text-cyan-300 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/mobile" className="text-blue-100/70 hover:text-cyan-300 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/services/seo" className="text-blue-100/70 hover:text-cyan-300 transition-colors">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="/services/email" className="text-blue-100/70 hover:text-cyan-300 transition-colors">
                  Email Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/about" className="text-blue-100/70 hover:text-cyan-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/team" className="text-blue-100/70 hover:text-cyan-300 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/careers" className="text-blue-100/70 hover:text-cyan-300 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100/70 hover:text-cyan-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          {/* <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3">
              Connect
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://x.com/MOHAMMADMO50791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-blue-100/70 hover:text-cyan-300 transition-colors"
                >
                  Twitter <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/helpinfinite/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-blue-100/70 hover:text-cyan-300 transition-colors"
                >
                  LinkedIn <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/17zBhodSDQ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-blue-100/70 hover:text-cyan-300 transition-colors"
                >
                  Facebook <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/help.infinite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-blue-100/70 hover:text-cyan-300 transition-colors"
                >
                  Instagram <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div> */}

        </div>

        {/* Bottom copyright section */}
        <div className="pt-4 flex flex-col bg-black sm:flex-row items-center justify-between text-[11px] text-blue-200/50 gap-2">
          <p>© {new Date().getFullYear()} Help Infinite. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};