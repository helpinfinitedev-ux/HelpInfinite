import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Archive, LinkIcon, View, Sparkles, FolderGit2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string[];
  demoLink: string;
  detailsLink?: string;
  featured: boolean;
}

const PortfolioHeadingFallback = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white my-2">
        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">PORTFOLIO</span>
      </h2>
    </motion.div>
  );
};

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [api, setApi] = useState<CarouselApi>();

  // Single card auto-slide with hover pause
  useEffect(() => {
    if (!api) return;

    let isHovered = false;

    const interval = setInterval(() => {
      if (!isHovered) {
        api.scrollNext();
      }
    }, 1500);

    const container = api.containerNode();
    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [api]);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with integrated payment processing and inventory management.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500",
      category: ["web", "frontend"],
      demoLink: "#",
      detailsLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Real-time analytics dashboard for financial data visualization and portfolio management.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
      category: ["dashboard", "data"],
      demoLink: "#",
      detailsLink: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Mobile-first social platform with real-time messaging and content sharing capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=500",
      category: ["mobile", "frontend"],
      demoLink: "#",
      detailsLink: "#",
      featured: false,
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Smart content generation tool powered by machine learning algorithms.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500",
      category: ["ai", "web"],
      demoLink: "#",
      detailsLink: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description: "Comprehensive solution for managing patient records and streamlining healthcare operations.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      category: ["enterprise", "dashboard"],
      demoLink: "#",
      detailsLink: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Interactive platform for online courses with progress tracking and assessment tools.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500",
      category: ["education", "web"],
      demoLink: "#",
      detailsLink: "#",
      featured: false,
    },
  ];

  const filters = [
    { value: "all", label: "All" },
    { value: "web", label: "Web Apps" },
    { value: "mobile", label: "Mobile" },
    { value: "dashboard", label: "Dashboards" },
    { value: "ai", label: "AI Solutions" },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="portfolio" className="relative py-20 md:py-20 px-4 bg-[#030712] overflow-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-900/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10">
          <PortfolioHeadingFallback />
          <motion.p
            className="text-base md:text-lg text-blue-100/70 max-w-2xl mx-auto text-center mt-3 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our featured digital craftsmanship and high-performance solutions designed for impactful results.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <Button
                key={filter.value}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "rounded-full px-5 text-xs font-semibold tracking-wide uppercase transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30 scale-105"
                    : "border border-blue-900/60 text-blue-300/80 bg-[#070D19]/80 hover:bg-blue-950/60 hover:text-white hover:border-blue-500/40"
                )}
              >
                {filter.label}
              </Button>
            );
          })}
        </div>

        {/* Projects Carousel */}
        <div className="px-2 md:px-6 lg:px-8">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              slidesToScroll: 1,
              loop: true,
              duration: 25,
            }}
          >
            <CarouselContent>
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 p-2.5">
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Card className="overflow-hidden h-full border border-blue-900/50 hover:border-blue-500/50 bg-[#070D19]/90 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-blue-600/15 transition-all duration-300 flex flex-col justify-between group">
                        {/* Pure Card Clickable Body -> Redirects to Preview Demo Link */}
                        <Link to={project.demoLink} className="block cursor-pointer flex-1">
                          <div>
                            {/* Image & Featured Badge */}
                            <div className="relative h-52 overflow-hidden">
                              <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-transparent to-black/30 opacity-80" />

                              {project.featured && (
                                <Badge className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none shadow-md shadow-blue-950 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                  <Sparkles className="w-3 h-3 mr-1" /> Featured
                                </Badge>
                              )}
                            </div>

                            <CardHeader className="pb-2 pt-4">
                              <CardTitle className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                                {project.title}
                              </CardTitle>
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {project.category.map((cat, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-[11px] font-medium border-blue-500/20 bg-blue-950/40 text-blue-300/80 px-2 py-0.5 rounded-md"
                                  >
                                    #{cat}
                                  </Badge>
                                ))}
                              </div>
                            </CardHeader>

                            <CardContent className="pb-4">
                              <CardDescription className="text-sm text-blue-100/60 leading-relaxed line-clamp-3">
                                {project.description}
                              </CardDescription>
                            </CardContent>
                          </div>
                        </Link>

                        {/* Both Action Buttons Kept Intact */}
                        <CardFooter className="flex justify-between pt-2 pb-5 gap-3 border-t border-blue-950/80">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1 border-blue-500/40 text-blue-300 hover:bg-blue-950/80 hover:text-white hover:border-blue-400 transition-all duration-300 bg-transparent rounded-lg"
                          >
                            <Link to={project.demoLink}>
                              <View className="mr-1.5 h-3.5 w-3.5" />
                              Preview
                            </Link>
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            asChild
                            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all duration-300 rounded-lg"
                          >
                            <Link to={project.detailsLink || "#"}>
                              <LinkIcon className="mr-1.5 h-3.5 w-3.5" />
                              Details
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </AnimatePresence>
            </CarouselContent>
          </Carousel>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold shadow-xl shadow-blue-600/25 border border-blue-400/30 transition-all duration-300"
            asChild
          >
            <Link to="/portfolio" className="flex items-center gap-2">
              <Archive className="h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};