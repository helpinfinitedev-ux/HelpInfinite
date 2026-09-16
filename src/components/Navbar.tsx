import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles, ArrowRight, Layers, Code, Smartphone, Search, Mail } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${isScrolled
        ? "bg-[#030712]/90 backdrop-blur-2xl border-b border-blue-500/20 shadow-xl shadow-blue-950/40"
        : "bg-gradient-to-b from-[#030712]/90 via-[#030712]/40 to-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">

          {/* Logo Section */}
          <div className="flex-shrink-0 font-bold flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src="/logo/logo.png"
                alt="Logo"
                className="h-auto w-[140px] sm:w-[155px] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (Compact Pill) */}
          <div className="hidden md:flex items-center space-x-1 bg-blue-950/30 border border-blue-900/40 backdrop-blur-xl px-3 py-1 rounded-full shadow-inner">
            <NavigationMenu>
              <NavigationMenuList className="gap-0.5">
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-7 px-2.5 bg-transparent text-[15px] uppercase font-bold tracking-wider text-blue-100 hover:text-cyan-300 focus:bg-transparent data-[state=open]:bg-blue-900/40 data-[state=open]:text-cyan-300">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] md:w-[500px] lg:w-[560px] p-3 bg-[#070D19]/95 backdrop-blur-2xl border border-blue-800/50 rounded-xl shadow-2xl shadow-cyan-950/50">

                      {/* Top Header Label */}
                      <div className="flex items-center justify-between mb-2 px-1 pb-1.5 border-b border-blue-900/50">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                          <Sparkles className="w-3 h-3" /> Core Offerings
                        </span>
                        <span className="text-[9px] text-blue-300/60 uppercase font-semibold">Tailored Tech Solutions</span>
                      </div>

                      <div className="grid grid-cols-12 gap-2">
                        {/* Featured Service Card */}
                        <div className="col-span-5">
                          <NavigationMenuLink asChild>
                            <Link
                              className="relative flex h-full w-full select-none flex-col justify-between rounded-lg bg-gradient-to-br from-blue-900/60 via-blue-950 to-[#030712] p-3.5 border border-cyan-500/30 no-underline outline-none transition-all duration-300 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 group overflow-hidden"
                              to="/services"
                            >
                              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-xl rounded-full pointer-events-none" />
                              <div className="p-2 rounded-md bg-blue-600/20 border border-blue-400/30 text-cyan-300 w-fit">
                                <Layers className="w-4 h-4" />
                              </div>
                              <div className="mt-3">
                                <div className="text-xs font-extrabold text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                                  Digital Solutions
                                </div>
                                <p className="text-[11px] text-blue-100/70 leading-snug">
                                  End-to-end services to accelerate growth.
                                </p>
                              </div>
                              <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                                <span>Explore All</span>
                                <ArrowRight className="w-3 h-3" />
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>

                        {/* List Items */}
                        <div className="col-span-7 grid grid-cols-1 gap-0.5">
                          <ListItem href="/services/web" title="Web Development" icon={Code}>
                            Custom websites & web apps
                          </ListItem>
                          <ListItem href="/services/mobile" title="Mobile Apps" icon={Smartphone}>
                            Native iOS & Android apps
                          </ListItem>
                          <ListItem href="/services/seo" title="SEO Services" icon={Search}>
                            Boost rankings & traffic
                          </ListItem>
                          <ListItem href="/services/email" title="Email Marketing" icon={Mail}>
                            High-converting campaigns
                          </ListItem>
                        </div>
                      </div>

                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Direct Links */}
                <NavigationMenuItem>
                  <a href="#portfolio" className="text-[15px] uppercase font-bold tracking-wider text-blue-100 hover:text-cyan-300 transition-colors px-2.5 py-2 block">
                    Portfolio
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#about" className="text-[15px] uppercase font-bold tracking-wider text-blue-100 hover:text-cyan-300 transition-colors px-2.5 py-1 block">
                    About
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#testimonials" className="text-[15px] uppercase font-bold tracking-wider text-blue-100 hover:text-cyan-300 transition-colors px-2.5 py-1 block">
                    Testimonials
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#contact" className="text-[15px] uppercase font-bold tracking-wider text-blue-100 hover:text-cyan-300 transition-colors px-2.5 py-1 block">
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="h-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-[15px] uppercase tracking-wider px-4 rounded-full shadow-md shadow-blue-600/30 hover:shadow-cyan-400/30 transition-all duration-300 border border-cyan-400/30">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-lg bg-blue-950/60 border border-blue-800/50 text-white hover:text-cyan-300 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-blue-900/50 px-3 pt-2 pb-4 shadow-2xl transition-all">
          <div className="space-y-1 mt-1">

            {/* Collapsible Services Submenu */}
            <div className="rounded-lg border border-blue-900/40 bg-blue-950/30 overflow-hidden">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center px-3 py-2 text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-cyan-400" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="px-3 pb-2 space-y-1 border-t border-blue-900/40 pt-1.5 bg-[#070D19]/60">
                  <Link to="/services/web" className="block text-[11px] text-blue-200/80 hover:text-cyan-300 py-1" onClick={() => setIsMenuOpen(false)}>
                    • Web Development
                  </Link>
                  <Link to="/services/mobile" className="block text-[11px] text-blue-200/80 hover:text-cyan-300 py-1" onClick={() => setIsMenuOpen(false)}>
                    • Mobile Applications
                  </Link>
                  <Link to="/services/seo" className="block text-[11px] text-blue-200/80 hover:text-cyan-300 py-1" onClick={() => setIsMenuOpen(false)}>
                    • SEO Services
                  </Link>
                  <Link to="/services/email" className="block text-[11px] text-blue-200/80 hover:text-cyan-300 py-1" onClick={() => setIsMenuOpen(false)}>
                    • Email Marketing
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#portfolio"
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-blue-100 hover:bg-blue-950/50 hover:text-cyan-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>

            <a
              href="#about"
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-blue-100 hover:bg-blue-950/50 hover:text-cyan-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-blue-100 hover:bg-blue-950/50 hover:text-cyan-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>

            <a
              href="#contact"
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-blue-100 hover:bg-blue-950/50 hover:text-cyan-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>

            <div className="pt-1.5">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full h-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-[11px] uppercase tracking-wider rounded-lg border border-cyan-400/30">
                  Get In Touch
                </Button>
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

// Custom Dropdown Item Component (Compact)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType }
>(({ className, title, children, icon: Icon, href, ...props }, ref) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <Link
          to={href || "#"}
          className={cn(
            "group flex items-center gap-2.5 select-none rounded-lg p-1.5 leading-none no-underline outline-none transition-all duration-200 hover:bg-blue-950/60 hover:border hover:border-blue-800/50",
            className
          )}
          {...props}
        >
          {Icon && (
            <div className="p-1.5 rounded-md bg-blue-950 border border-blue-800/50 text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
              <Icon className="w-3.5 h-3.5" />
            </div>
          )}
          <div>
            <div className="text-[11px] font-bold text-white group-hover:text-cyan-300">
              {title}
            </div>
            <p className="line-clamp-1 text-[10px] text-blue-100/60 mt-0.5">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </div>
  );
});
ListItem.displayName = "ListItem";