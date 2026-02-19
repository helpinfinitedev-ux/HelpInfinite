import { Github, Globe, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-[#050505] text-white py-12 md:pt-20 md:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-[#0096FF] to-white bg-clip-text text-transparent">Get in touch with Help Infinite</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Services Column */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/web" className="hover:text-[#0096FF] transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/mobile" className="hover:text-[#0096FF] transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/services/seo" className="hover:text-[#0096FF] transition-colors">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="/services/email" className="hover:text-[#0096FF] transition-colors">
                  Email Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="hover:text-[#0096FF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-[#0096FF] transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-[#0096FF] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0096FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="hover:text-[#0096FF] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-[#0096FF] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/guides" className="hover:text-primary transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a href="/tools" className="hover:text-primary transition-colors">
                  Free Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-gray-400 font-semibold">CONNECT</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://x.com/MOHAMMADMO50791" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  Twitter <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/helpinfinite/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  LinkedIn <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/17zBhodSDQ/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  Facebook <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/help.infinite/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  Instagram <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
