import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Star, Quote, MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  testimonial: string;
  rating: number;
  avatarUrl: string;
}

// Modern Heading with Badges matching Portfolio Section
const TestimonialsHeadingFallback = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-left md:text-left"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
        CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">TESTIMONIALS</span>
      </h2>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  // Single card auto-slide interval with hover pause
  useEffect(() => {
    if (!api) return;

    let isHovered = false;

    // Har 1.5 Seconds me 1 card smooth slide hoga
    const interval = setInterval(() => {
      if (!isHovered) {
        api.scrollNext();
      }
    }, 1500);

    const container = api.containerNode();
    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [api]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovators",
      testimonial:
        "Working with DigitalEdge transformed our online presence. Their team delivered a stunning website that exceeded our expectations and significantly improved our conversion rate.",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "GrowthFirst Marketing",
      testimonial:
        "The mobile app developed by DigitalEdge has been a game-changer for our business. User engagement increased by 45% within the first month after launch.",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "InnovateNow",
      testimonial:
        "Their SEO expertise helped us climb to the first page of search results for our key terms. Highly professional and responsive throughout the entire process.",
      rating: 4,
      avatarUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "David Thompson",
      company: "FutureBrand",
      testimonial:
        "DigitalEdge consistently delivers high-quality work on time and within budget. Their team's attention to detail makes them our go-to digital partner.",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      company: "Elevate Solutions",
      testimonial:
        "The digital marketing strategy DigitalEdge created for us has doubled our leads. Their data-driven approach and creativity are exceptional.",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 md:py-20 px-4 bg-[#030712] overflow-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[350px] h-[250px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section with Integrated Control Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <TestimonialsHeadingFallback />
            <motion.p
              className="text-base md:text-lg text-blue-100/70 max-w-2xl mt-3 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Don't just take our word for it. See what our clients have to say about working with us.
            </motion.p>
          </div>

          {/* Premium Glowing Custom Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => api?.scrollPrev()}
              aria-label="Previous Slide"
              className="group relative p-3 rounded-xl bg-[#070D19]/90 border border-blue-900/60 hover:border-blue-400/80 text-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25 active:scale-95 backdrop-blur-md overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              aria-label="Next Slide"
              className="group relative p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-95 backdrop-blur-md overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="px-1 md:px-2">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              slidesToScroll: 1, // 1-1 card smooth slide
              loop: true,
              duration: 25,
            }}
          >
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3 p-2.5"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: item.id * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="h-full"
                  >
                    {/* Modern Glassmorphic Testimonial Card */}
                    <div className="relative h-full flex flex-col justify-between p-6 rounded-2xl border border-blue-900/50 hover:border-blue-500/50 bg-[#070D19]/90 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-blue-600/15 transition-all duration-300 group">

                      {/* Top Quote Icon & Rating Stars */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md">
                            <Quote className="w-5 h-5 rotate-180" />
                          </div>

                          {/* Rating Stars */}
                          <div className="flex gap-1 bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 rounded-full">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < item.rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-gray-600"
                                  }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Testimonial Message */}
                        <p className="text-sm md:text-base text-blue-100/80 leading-relaxed italic mb-6 line-clamp-4">
                          "{item.testimonial}"
                        </p>
                      </div>

                      {/* User Info & Avatar */}
                      <div className="flex items-center gap-3.5 pt-4 border-t border-blue-950/80">
                        <div className="relative">
                          <img
                            src={item.avatarUrl}
                            alt={item.name}
                            className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/40 group-hover:border-blue-400 transition-colors shadow-md"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-[#070D19] flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-xs text-blue-300/60 font-medium">
                            {item.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};