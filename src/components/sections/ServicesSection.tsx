import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Code, Smartphone, Search, Mail, Layers } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";
import { Suspense } from "react";

// Fallback heading with glowing gradient effect
const ServicesHeadingFallback = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white my-2">
        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">SERVICES</span>
      </h2>
    </motion.div>
  );
};

// Pure Blue & Deep Dark Shades palette
const services = [
  {
    title: "Web Development",
    description: "Custom-built responsive websites and web applications designed to meet your business needs and impress your customers.",
    icon: Code,
    color: "#3B82F6", // Bright Blue
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    icon: Smartphone,
    color: "#38BDF8", // Electric Sky Blue
  },
  {
    title: "SEO Optimization",
    description: "Comprehensive search engine optimization strategies to improve visibility and drive targeted traffic to your website.",
    icon: Search,
    color: "#1D4ED8", // Deep Royal Blue
  },
  {
    title: "Email Marketing",
    description: "Effective email campaigns that engage your audience, nurture leads, and drive conversions for your business.",
    icon: Mail,
    color: "#0284C7", // Bright Cobalt Blue
  },
];

export const ServicesSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="services" className="py-20 md:py-20 px-4 bg-[#030712] relative overflow-hidden text-white">
      {/* Background Subtle Cyber Grid Texture (Removes Emptiness) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* Vibrant Background Ambient Blue Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-indigo-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[300px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <ServicesHeadingFallback />
          <motion.p
            className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto mt-3 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We offer a comprehensive range of cutting-edge digital solutions tailored to elevate your brand and accelerate growth.
          </motion.p>
        </div>

        {/* Services Grid with Framer Motion Stagger Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-blue-500/30 via-blue-900/20 to-cyan-500/30 hover:from-cyan-400 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Top Accent Highlight Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-20" />

              <div className="h-full bg-[#070D19]/90 backdrop-blur-2xl rounded-3xl p-4 md:p-6 transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                {/* Subtle Card Corner Glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-500" />

                <ServiceCard {...service} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3D Stars Background Animation (Non-mobile) */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.2} />
              <Stars radius={100} depth={50} count={1200} factor={4} saturation={0} fade speed={0.6} />
              <OrbitControls enableZoom={false} enablePan={false} enableRotate enableDamping dampingFactor={0.05} />
            </Canvas>
          </Suspense>
        </div>
      )}
    </section>
  );
};