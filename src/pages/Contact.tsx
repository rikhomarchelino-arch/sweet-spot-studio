import { MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import contactHero from "@/assets/contact-page-hero.jpg";
import SidebarNav from "@/components/SidebarNav";
import FooterMarquee from "@/components/FooterMarquee";
import { useEffect } from "react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/The+Pound+Cake+%7C+Pastry+%26+Coffee,+Jl.+Letnan+Jenderal+S.+Parman+No.3,+Petompon,+Gajahmungkur,+Semarang+City,+Central+Java+50231/data=!4m2!3m1!1s0x2e708b252acba21f:0x8c7d0756df0a137!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjEyLjUYACDXggMqlAEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsOTQyODQ0NzIsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwNzk2MTkzQgJJRA%3D%3D&skid=6a1061a6-8cea-4b19-932f-a9e2301c79b1&g_st=aw";

const WHATSAPP_URL = "https://wa.me/6281234567890";
const INSTAGRAM_URL = "https://www.instagram.com/thepoundcake.id";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ctaButtons = [
  {
    label: "Visit Our Instagram",
    url: INSTAGRAM_URL,
    icon: InstagramIcon,
    isCustomIcon: true,
  },
  {
    label: "Find Us on Google Maps",
    url: GOOGLE_MAPS_URL,
    icon: MapPin,
    isCustomIcon: false,
  },
  {
    label: "Chat via WhatsApp",
    url: WHATSAPP_URL,
    icon: MessageCircle,
    isCustomIcon: false,
  },
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav activeSection="contact" onNavigate={() => {}} />

      <main className="md:ml-20">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden"
        >
          <img
            src={contactHero}
            alt="The Pound Cake atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </motion.div>

        {/* Content */}
        <div className="px-6 md:px-12 -mt-16 relative z-10 pb-12">
          <div className="max-w-xl mx-auto text-center">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Get in Touch
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-muted-foreground font-body text-base md:text-lg"
            >
              Visit us or reach out through your preferred platform.
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-10 space-y-4">
              {ctaButtons.map((btn, i) => {
                const Icon = btn.icon;
                return (
                  <motion.a
                    key={btn.label}
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="group flex items-center justify-center gap-3 w-full py-4 md:py-4.5 rounded-full bg-card border border-border text-foreground font-body font-semibold text-base md:text-lg hover:border-primary/50 hover:scale-[1.03] transition-all duration-300"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <Icon
                      size={20}
                      className="text-primary transition-transform duration-300 group-hover:translate-x-0"
                    />
                    <span>{btn.label}</span>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-10 text-muted-foreground/60 font-body text-sm"
            >
              We're happy to assist you with any questions.
            </motion.p>
          </div>
        </div>

        <FooterMarquee />
      </main>
    </div>
  );
};

export default Contact;
