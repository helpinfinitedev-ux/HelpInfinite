import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/HeroCanvas";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative flex items-center bg-black text-white pt-16">
      <HeroCanvas />
      <div className="max-w-7xl mx-auto z-10 px-4 py-20 md:py-20 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            Digital solutions for
            <span className="block">modern businesses.</span>
          </motion.h1>

          <motion.p className="text-lg font-semibold text-blue-300 md:text-xl mb-6 md:mb-8 max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Web development, mobile apps, SEO, and email marketing to take your business to the next level
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button size={isMobile ? "default" : "lg"} className="bg-[#0096FF] hover:bg-[#0082E0] w-full sm:w-auto" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button size={isMobile ? "default" : "lg"} variant="outline" className="border-[#0096FF] text-[#0096FF] hover:bg-[#0096FF]/10 w-full sm:w-auto" asChild>
                <a href="#contact">Get a Quote</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="flex-1 w-full lg:w-auto" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <video className="w-full rounded-2xl shadow-2xl shadow-blue-500/10" autoPlay loop muted playsInline>
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div className="w-1 h-2 bg-[#0096FF] rounded-full mt-2" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
        </div>
      </motion.div>
    </section>
  );
};
