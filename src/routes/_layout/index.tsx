import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/_layout/")({
  head: () => ({ meta: [
    { title: "The Pound Café | Pastry & Coffee Semarang" },
    { name: "description", content: "A contemporary café in Semarang serving handcrafted coffee, fresh pastries, cakes, and comforting food." },
    { property: "og:title", content: "The Pound Café | Pastry & Coffee Semarang" },
    { property: "og:description", content: "Coffee, fresh pastry, and good company in a warm contemporary café." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});
