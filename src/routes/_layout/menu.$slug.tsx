import { createFileRoute } from "@tanstack/react-router";
import MenuCategory from "@/pages/MenuCategory";

export const Route = createFileRoute("/_layout/menu/$slug")({
  head: ({ params }) => ({ meta: [
    { title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Menu | The Pound Café` },
    { name: "description", content: `Explore the ${params.slug} selection at The Pound Café in Semarang.` },
    { property: "og:title", content: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Menu | The Pound Café` },
    { property: "og:description", content: `Fresh ${params.slug}, made for your next café visit.` },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: MenuCategory,
});
