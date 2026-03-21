import { Star } from "lucide-react";

const reviews = [
  {
    name: "Emily R.",
    rating: 5,
    text: "The pound cake was the best I've ever tasted—perfectly balanced between sweet and buttery. A must-try for any cake lover!",
  },
  {
    name: "Daniel K.",
    rating: 5,
    text: "The rolls are so light and fresh! I've never tasted anything like them, and the subtle flavour makes them irresistible.",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text: "I can't get enough of their cookies! Every bite is packed with a perfect burst of goodness. It's my new go-to treat!",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-body mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Reviews
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-xl bg-card border border-border ${
                index === reviews.length - 1 ? "md:col-span-2" : ""
              }`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h4 className="font-display text-xl font-semibold text-foreground">
                {review.name}
              </h4>
              <div className="flex gap-1 mt-2 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 font-body leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
