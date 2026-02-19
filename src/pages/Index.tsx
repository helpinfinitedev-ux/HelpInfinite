import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { ParallaxProvider } from "react-scroll-parallax";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen relative overflow-hidden bg-[#050505] text-white">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --logo-blue: #0096FF;
            --logo-gray: #707070;
            --logo-blue-glow: rgba(0, 150, 255, 0.4);
          }

          /* Global Overrides to match logo */
          .bg-purple-600, .bg-purple-500, .bg-indigo-600, .bg-indigo-500 {
            background-color: var(--logo-blue) !important;
          }
          
          .hover\\:bg-purple-700:hover, .hover\\:bg-indigo-700:hover {
            background-color: #0077CC !important;
          }

          .text-purple-600, .text-purple-500, .text-indigo-600, .text-indigo-500 {
            color: var(--logo-blue) !important;
          }

          .border-purple-600, .border-purple-500, .border-indigo-600, .border-indigo-500 {
            border-color: var(--logo-blue) !important;
          }

          .from-purple-500 { --tw-gradient-from: var(--logo-blue) !important; }
          .to-indigo-700 { --tw-gradient-to: var(--logo-gray) !important; }
          .from-purple-600 { --tw-gradient-from: var(--logo-blue) !important; }
          .to-purple-300 { --tw-gradient-to: #ffffff !important; }

          /* Button specific overrides */
          button.bg-purple-600, button.bg-indigo-600 {
            box-shadow: 0 0 15px var(--logo-blue-glow);
            transition: all 0.3s ease;
          }
          button.bg-purple-600:hover {
            box-shadow: 0 0 25px var(--logo-blue-glow);
            transform: translateY(-2px);
          }

          /* Background effects */
          .bg-black {
            background-color: #050505 !important;
          }
          
          .glassmorphism {
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            backdrop-filter: blur(12px) !important;
          }

          /* Neon/Glow effects */
          .neon-text {
            text-shadow: 0 0 10px var(--logo-blue-glow) !important;
          }

          /* Forms and Inputs */
          input:focus, textarea:focus {
            border-color: var(--logo-blue) !important;
            ring-color: var(--logo-blue-glow) !important;
          }

          /* Custom selection color */
          ::selection {
            background-color: var(--logo-blue);
            color: white;
          }
        `,
          }}
        />

        <CustomCursor />
        <Navbar />

        {/* Ambient Background Glows */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0096FF]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0096FF]/5 rounded-full blur-[120px]" />
        </div>

        <HeroSection />

        {/* Slogan Banner - Innovate. Integrate. Elevate. */}
        <div className="w-full bg-white/5 border-y border-white/10 py-4 overflow-hidden whitespace-nowrap">
          <div className="flex justify-around animate-pulse">
            <span className="text-xl md:text-2xl font-bold tracking-widest text-[#0096FF]">INNOVATE</span>
            <span className="text-xl md:text-2xl font-bold tracking-widest text-gray-500">INTEGRATE</span>
            <span className="text-xl md:text-2xl font-bold tracking-widest text-[#0096FF]">ELEVATE</span>
          </div>
        </div>

        <FeaturesSection />
        <ServicesSection />
        <ProductSection />
        <WhyUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />

        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Index;
