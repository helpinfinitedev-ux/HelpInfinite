import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from "lucide-react";

// Centered Heading Component (Matching Team & Portfolio Style)
const ContactHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white my-2">
        LET'S BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">SOMETHING GREAT</span>
      </h2>
    </motion.div>
  );
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1200);
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@digitaledge.com",
      link: "mailto:hello@digitaledge.com",
      description: "Response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 019-2834",
      link: "tel:+15550192834",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "Silicon Valley, CA",
      link: "#",
      description: "100 Innovation Way, Suite 400",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "24/7 Tech Support",
      link: "#",
      description: "Global support team active",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-20 px-4 bg-[#030712] overflow-hidden text-white">
      {/* Ambient Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-cyan-900/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Header Section */}
        <div className="mb-16 text-center">
          <ContactHeading />
          <motion.p
            className="text-base md:text-lg text-blue-100/70 max-w-2xl mx-auto mt-3 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to start your project? Reach out to our team for a free consultation and project estimation.
          </motion.p>
        </div>

        {/* Content Grid: Contact Details + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Quick Contact Info Cards */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  className="group relative p-5 rounded-2xl border border-blue-900/40 hover:border-blue-500/50 bg-[#070D19]/80 backdrop-blur-xl shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-semibold text-blue-400 tracking-wider mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.value}
                    </p>
                    <p className="text-xs text-blue-100/60 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right Column: Glassmorphic Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative p-6 md:p-8 rounded-3xl border border-blue-900/50 bg-[#070D19]/90 backdrop-blur-2xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-blue-100/70 max-w-md">
                    Thank you for reaching out. A team member will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-blue-200/80">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-blue-950/30 border border-blue-900/60 focus:border-blue-400 focus:bg-blue-950/60 text-white placeholder-blue-300/30 text-sm outline-none transition-all duration-300 shadow-inner"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-blue-200/80">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-blue-950/30 border border-blue-900/60 focus:border-blue-400 focus:bg-blue-950/60 text-white placeholder-blue-300/30 text-sm outline-none transition-all duration-300 shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-blue-200/80">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry / Consultation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-blue-950/30 border border-blue-900/60 focus:border-blue-400 focus:bg-blue-950/60 text-white placeholder-blue-300/30 text-sm outline-none transition-all duration-300 shadow-inner"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-blue-200/80">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-blue-950/30 border border-blue-900/60 focus:border-blue-400 focus:bg-blue-950/60 text-white placeholder-blue-300/30 text-sm outline-none transition-all duration-300 shadow-inner resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};