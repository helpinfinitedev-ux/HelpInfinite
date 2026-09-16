import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingSocialIcons = () => {
  const iconVariants = {
    hover: {
      x: -4,
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      Icon: Phone,
      href: "tel:+911234567890", // Yahan apna mobile number dalein
      label: "Call",
      color: "hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-emerald-500/20 hover:bg-emerald-950/40",
    },
    {
      Icon: MessageSquare,
      href: "https://wa.me/911234567890", // Yahan apna WhatsApp number dalein
      label: "WhatsApp",
      color: "hover:text-green-400 hover:border-green-500/50 hover:shadow-green-500/20 hover:bg-green-950/40",
    },
    {
      Icon: Send,
      href: "https://t.me/helpinfinite", // Yahan Telegram username dalein
      label: "Telegram",
      color: "hover:text-sky-400 hover:border-sky-500/50 hover:shadow-sky-500/20 hover:bg-sky-950/40",
    },
    {
      Icon: Mail,
      href: "mailto:contact@helpinfinite.com", // Yahan email address dalein
      label: "Email",
      color: "hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-cyan-500/20 hover:bg-cyan-950/40",
    },
  ];

  return (
    /* flex-col se saare icons vertically align ho gaye hain */
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-2 items-center bg-[#030712]/80 backdrop-blur-xl p-1.5 rounded-full border border-blue-500/30 shadow-2xl shadow-blue-950/60">
      {socialLinks.map(({ Icon, href, label, color }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          title={label}
          aria-label={label}
          className={`p-2.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-200 shadow-md transition-all duration-300 ${color}`}
          variants={iconVariants}
          whileHover="hover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-4 h-4" />
        </motion.a>
      ))}
    </div>
  );
};