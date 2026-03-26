import { useState } from "react";
import { Phone as PhoneIcon, Mail, MapPin } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const contactDetails = [
  { icon: PhoneIcon, title: "Phone", value: "+62 812 3456 7890" },
  { icon: Mail, title: "Email", value: "hello@thepoundcake.id" },
  { icon: MapPin, title: "Address", value: "Jl. Pemuda No. 15, Semarang, Indonesia" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Hi! I'm ${formData.name}.\n\n${formData.message}\n\nPhone: ${formData.phone}\nEmail: ${formData.email}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Contact Hero */}
        <ScrollReveal>
          <div className="relative rounded-xl overflow-hidden h-48 md:h-64 mb-12">
            <img src={contactHero} alt="Contact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/60 flex flex-col items-center justify-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                CONTACT
              </h2>
              <p className="mt-2 text-foreground/70 font-body text-center max-w-md px-4">
                Got a question or craving? Reach out to us—we'd love to hear from you!
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Details */}
        <ScrollReveal delay={0.1}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 text-accent text-sm font-body mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Contact Details
          </span>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16" staggerDelay={0.1}>
          {contactDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-accent">
                      {detail.title}
                    </h4>
                    <p className="mt-1 text-foreground/70 font-body text-sm">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerReveal>

        {/* Contact Form */}
        <ScrollReveal delay={0.05}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 text-accent text-sm font-body mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Contact Form
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="max-w-3xl space-y-5">
            {[
              { label: "Name", key: "name", type: "text", placeholder: "Your name" },
              { label: "Phone", key: "phone", type: "tel", placeholder: "+62 xxx xxxx xxxx" },
              { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-body text-foreground/80 mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-body text-foreground/80 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:scale-[1.02] transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
