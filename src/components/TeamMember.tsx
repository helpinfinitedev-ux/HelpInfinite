import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
  bio?: string;
  skills?: string[];
  experience?: string;
  email?: string;
}

const TeamBox = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[2.7, 3.7, 0.2]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.2} emissive="#0096FF" emissiveIntensity={0.1} />
      </mesh>
    </Float>
  );
};

export const TeamMember = ({
  name,
  role,
  image,
  delay = 0,
  bio = "A talented professional with expertise in various aspects of digital technology and design.",
  skills = ["JavaScript", "React", "UI/UX Design"],
  experience = "5+ years of industry experience",
  email = "",
}: TeamMemberProps) => {
  const [hovered, setHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="flex flex-col items-center p-8 relative cursor-pointer group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setDialogOpen(true)}>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} />
            <TeamBox />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={hovered} autoRotateSpeed={4} />
          </Canvas>
        </div>

        <motion.div whileHover={{ scale: 1.08, z: 10 }} className="mb-6 z-10 mt-4">
          <Avatar className="w-72 h-72 object-cover border-4 border-[#0096FF] shadow-lg shadow-[#0096FF]/20">
            <AvatarImage src={image} alt={name} className="object-cover object-top" />
            <AvatarFallback className="bg-[#0096FF]/20 object-cover text-[#0096FF]">{name[0]}</AvatarFallback>
          </Avatar>
        </motion.div>
        <h3 className="text-2xl font-semibold mb-2 text-white z-10">{name}</h3>
        <p className="text-gray-400 z-10 text-lg">{role}</p>
        <div className="text-sm bg-[#0096FF] mt-4 z-10 px-4 py-2 rounded-full text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-y-2 group-hover:translate-y-0 shadow-lg shadow-[#0096FF]/40">
          Click for details
        </div>
      </motion.div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-[#0a0a0a] text-white border border-white/10 shadow-2xl shadow-[#0096FF]/10 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-[#0096FF] font-bold flex items-center gap-3">
              <Users className="h-7 w-7 text-[#0096FF]" /> {name}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div className="flex justify-center items-start">
              <Avatar className="w-44 h-44 border-4 border-[#0096FF] shadow-lg shadow-[#0096FF]/20">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback className="bg-[#0096FF]/20 text-[#0096FF] font-bold text-2xl">{name[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-200 mb-3">{role}</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">{bio}</p>

              <h4 className="text-xl font-semibold text-[#0096FF] mt-6 mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-[#0096FF]/10 text-white rounded-full text-sm border border-[#0096FF]/20">
                    {skill}
                  </span>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-[#0096FF] mt-6 mb-3">Experience</h4>
              <p className="text-gray-400 text-lg">{experience}</p>

              {email && <h4 className="text-xl font-semibold text-[#0096FF] mt-6 mb-3">Contact</h4>}
              <p className="text-gray-400 text-lg hover:text-[#0096FF] transition-colors duration-200">{email}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
