import { useState } from "react";
import { Plus, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const faqData = [
  {
    question: "Are all products available every day?",
    answer:
      "Our menu may vary daily depending on availability. We recommend visiting early or checking with us for specific items.",
  },
  {
    question: "How fresh are your baked items?",
    answer:
      "All of our products are made fresh daily using high-quality ingredients, ensuring every bite bursts with rich, delicious flavour.",
  },
  {
    question: "Can I place custom orders for special occasions?",
    answer:
      "Absolutely! We specialize in custom orders for events like birthdays, weddings, and more. Just let us know your preferences, and we'll create treats tailored to your occasion.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-body mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            FAQ
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-xl overflow-hidden">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`transition-colors duration-300 ${
                    isOpen ? "bg-primary text-primary-foreground" : "bg-card"
                  } ${index > 0 ? "border-t border-border" : ""}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-body text-base md:text-lg ${isOpen ? "text-primary-foreground" : "text-foreground/80"}`}>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <X size={20} className="flex-shrink-0 ml-4" />
                    ) : (
                      <Plus size={20} className="flex-shrink-0 ml-4 text-muted-foreground" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 pb-6 px-6" : "max-h-0"
                    }`}
                  >
                    <p className={`font-body text-sm leading-relaxed ${isOpen ? "text-primary-foreground/80" : ""}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
