import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Users, ChevronLeft, ChevronRight, Linkedin, Twitter, Github, Mail, Sparkles } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  src: string;

}

// Centered Heading Component
const TeamHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white my-2">
        MEET OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">EXPERTS</span>
      </h2>
    </motion.div>
  );
};

export const TeamSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  // Continuous Single-Card Auto-Slide with Mouse Hover Pause
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

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Mohammad Moazzam",
      role: "CEO",
      bio: "Visionary leader with 12+ years in scaling AI & modern software platforms globally.",
      src: `/Team/moazzam1.png`
    },
    {
      id: 2,
      name: "Faisal",
      role: "Head of Product Design",
      bio: "Passionate about crafting intuitive UI/UX and seamless digital interactions.",
      src: "/Team/faisal.png"
    },
    {
      id: 3,
      name: "Danish",
      role: "Lead Full-Stack Architect",
      bio: "Specializes in high-throughput cloud infrastructure and real-time backend systems.",
      src: "/Team/danish.png"
    },
    {
      id: 4,
      name: "Gajri",
      role: "AI / ML Engineering Lead",
      bio: "Pioneering generative models, deep learning pipelines, and predictive algorithms.",
      src: "/Team/gajri.jpeg"
    },
    {
      id: 5,
      name: "Ayan",
      role: "Senior Full-Stack Developer",
      bio: "A results-oriented Full-Stack Developer with a strong background in building scalable, high-performance web applications. Proficient in modern frameworks and committed to delivering exceptional user experiences.",
      src: "/Team/ayan.jpeg"
    },
    {
      id: 6,
      name: "Wakeel",
      role: "Senior Full-Stack Developer",
      bio: "A results-oriented Full-Stack Developer with a strong background in building scalable, high-performance web applications. Proficient in modern frameworks and committed to delivering exceptional user experiences.",
      src: "/Team/wakeel.jpeg"
    },
  ];

  return (
    <section id="team" className="relative py-20 md:py-20 px-4 bg-[#030712] overflow-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-cyan-900/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Header Section */}
        <div className="mb-12 text-center">
          <TeamHeading />
          <motion.p
            className="text-base md:text-lg text-blue-100/70 max-w-2xl mx-auto mt-3 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The minds behind our innovative solutions, dedicated to pushing technological boundaries.
          </motion.p>
        </div>

        {/* Team Members Carousel */}
        <div className="px-1 md:px-2">
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
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="md:basis-1/2 lg:basis-1/3 p-3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: member.id * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="h-full"
                  >
                    {/* Unique Hexagon/Orb Minimalist Team Card Design */}
                    <div className="relative h-full flex flex-col justify-between p-6 rounded-3xl border border-blue-900/40 hover:border-blue-400/60 bg-gradient-to-b from-[#0B1528]/80 to-[#050B14]/90 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group text-center">

                      <div>
                        {/* Avatar Frame with Glowing Ambient Ring */}
                        <div className="relative mx-auto w-32 h-32 mb-5">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                          <img
                            src={member.src}
                            alt={member.name}
                            className="relative w-full h-full object-cover rounded-full border-2 border-blue-400/50 group-hover:border-cyan-300 transition-colors duration-300 p-1 bg-[#070D19]"
                          />
                          <span className="absolute bottom-1 right-1 p-1.5 rounded-full bg-blue-600 text-white shadow-md">
                            <Sparkles className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        {/* Name & Role */}
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mt-1 mb-3">
                          {member.role}
                        </p>

                        {/* Bio */}
                        <p className="text-sm text-blue-100/70 leading-relaxed line-clamp-3 mb-6">
                          {member.bio}
                        </p>
                      </div>



                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Centered Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => api?.scrollPrev()}
            aria-label="Previous Team Member"
            className="group p-3 rounded-full bg-[#070D19] border border-blue-900/60 hover:border-blue-400/80 text-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
          </button>

          <button
            onClick={() => api?.scrollNext()}
            aria-label="Next Team Member"
            className="group p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </section>
  );
};