import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import contactHero from "@/assets/contact-page-hero.jpg";
import FooterMarquee from "@/components/FooterMarquee";
import { useEffect } from "react";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/iVCUuKjMbWn2wQEZA?g_st=aw";
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=6285218506543&text=Hi%2C%20can%20you%20help%20me%20with%20the%20reservation%20or%20an%20order%3F%20Thank%20You%20%F0%9F%A5%90%E2%9C%A8";
const INSTAGRAM_URL = "https://www.instagram.com/thepoundcake.smg/";

const InstagramIcon = ({ size = 20 }: {size?: number;}) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>;


const WhatsAppIcon = ({ size = 20 }: {size?: number;}) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>;


const ctaButtons = [
{
  label: "Visit Our Instagram",
  url: INSTAGRAM_URL,
  icon: InstagramIcon
},
{
  label: "Find Us on Google Maps",
  url: GOOGLE_MAPS_URL,
  icon: MapPin
},
{
  label: "Chat via WhatsApp",
  url: WHATSAPP_URL,
  icon: WhatsAppIcon
}];


const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-72 md:h-96 lg:h-[28rem] overflow-hidden">
        
        <img
          src={contactHero}
          alt="The Pound Cake atmosphere"
          className="w-full h-full object-cover object-center"
          loading="lazy" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </motion.div>

      {/* Content */}
      <div className="px-6 md:px-12 -mt-16 relative z-10 pb-12">
        <div className="max-w-xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-muted-foreground font-body text-base md:text-lg">
            
            Visit us or reach out through your preferred platform.
          </motion.p>

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
                  className="group flex items-center justify-center gap-3 w-full py-4 md:py-4.5 rounded-full bg-card border border-border text-foreground font-body font-semibold text-base md:text-lg hover:border-accent/50 hover:scale-[1.03] transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-card)" }}>
                  
                  <Icon
                    size={20}
                    className="text-accent transition-transform duration-300 group-hover:translate-x-0" />
                  
                  <span>{btn.label}</span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  
                </motion.a>);

            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 text-muted-foreground/60 font-body text-sm">
            
            Contact Us For Reservation & PreOrder
          </motion.p>
        </div>
      </div>

      <FooterMarquee />
    </>);

};

export default Contact;