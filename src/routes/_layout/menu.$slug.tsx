import { createFileRoute } from "@tanstack/react-router";
import MenuCategory from "@/pages/MenuCategory";

export const Route = createFileRoute("/_layout/menu/$slug")({
  component: MenuCategory,
});
