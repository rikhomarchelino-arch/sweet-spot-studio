import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/_layout/contact")({
  head: () => ({ meta: [
    { title: "Visit The Pound Café | Semarang" },
    { name: "description", content: "Find The Pound Café in Semarang, view opening hours, and contact us for reservations or preorders." },
    { property: "og:title", content: "Visit The Pound Café | Semarang" },
    { property: "og:description", content: "Plan your visit or contact The Pound Café for reservations and preorders." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Contact,
});
