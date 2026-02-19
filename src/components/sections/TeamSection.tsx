import { motion } from "framer-motion";
import { TeamMember } from "@/components/TeamMember";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D } from "@react-three/drei";
import { Suspense, lazy } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Fallback component for mobile or when the 3D component is loading
const TeamHeadingFallback = () => {
  return (
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center text-white my-4 bg-gradient-to-r from-[#0096FF] to-white bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      OUR TEAM MEMBERS
    </motion.h2>
  );
};

// Lazy load the 3D heading component
const TeamHeading3D = lazy(() => import("@/components/3D/TeamHeading3D"));

export const TeamSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="team" className="py-16 md:py-24 px-4 md:px-6 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <TeamHeadingFallback />
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            Meet the talented professionals behind our success
          </motion.p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 md:gap-10 mt-8 md:mt-12">
            <TeamMember
              name="Faisal"
              role="Co-founder and CTO"
              image="/Team/faisal.png"
              delay={0.1}
              bio="Faisal is our lead developer with over 8 years of experience in building scalable web applications. He specializes in frontend architecture and has led multiple successful projects."
              skills={["JavaScript", "React", "Node.js", "PostgresQL", "System Architecture", "NextJS ", " GraphQL", "MongoDB", " AWS", "Docker"]}
              experience="8+ years in full-stack development"
              email="faisalmd25121999@gmail.com"
            />
            <TeamMember
              name="Moazzam Khan"
              role="Founder and CEO"
              image="\Team\moazzam1.png"
              delay={0.1}
              bio=" Mo Moazzam is our Full-Stack Developer with over 2+ years of experience in building scalable web applications. He specializes in frontend architecture and has led multiple successful projects."
              skills={["JavaScript", "React", "Node.js", "System Architecture", "NextJS ", " GraphQL", "MongoDB", " AWS", "Docker"]}
              experience="2+ years in full-stack development"
              email="moazzam575khan@gmail.com"
            />
            <TeamMember
              name="Mohd Wakeel"
              role="Lead .NET developer"
              image="\Team\wakeel.jpeg"
              delay={0.1}
              bio="Mohd Wakeel is our Lead .NET developer with over 5+ years of experience in building scalable web applications. He specializes in backend architecture and has led multiple successful projects."
              skills={[".NET", "C#", "SQL Server", "Entity Framework", "ASP.NET Core", "Web API", "RESTful APIs", "Docker", "Azure", "AWS"]}
              experience="5+ years in .NET development"
              // email="wakeel200106@gmail.com"
            />

            <TeamMember
              name="Ayan"
              role="Social media manager"
              image="\Team\ayan.jpeg"
              delay={0.2}
              bio="Ayan is our Social media manager with over 2+ years of experience in building scalable web applications. He specializes in frontend architecture and has led multiple successful projects."
              skills={["Social media marketing", "Content creation", "Social media strategy", "Social media analytics", "Social media advertising", "Social media management"]}
              experience="2+ years in social media marketing"
              // email="ayan021202@gmail.com"
            />
            <TeamMember
              name="Gajri Goyal"
              role="SEO Expert"
              image="\Team\gajri.jpeg"
              delay={0.3}
              bio="Gajri is our SEO Expert with over 3+ years of experience in building scalable web applications. She specializes in SEO and has led multiple successful projects."
              skills={["SEO", "Content creation", "SEO strategy", "SEO analytics", "SEO advertising", "SEO management"]}
              experience="3+ years in SEO"
              // email="gajri123@gmail.com"
            />
            <TeamMember
              name="Danish Shaikh"
              role="Marketing Expert"
              image="\Team\danish.png"
              delay={0.3}
              bio="Danish is our Marketing Expert with over 3+ years of experience in building scalable web applications. He specializes in Marketing and has led multiple successful projects."
              skills={["Marketing", "Content creation", "Marketing strategy", "Marketing analytics", "Marketing advertising", "Marketing management"]}
              experience="3+ years in Marketing"
              // email="danishkhan2003@gmail.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
