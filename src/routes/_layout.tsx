import { createFileRoute } from "@tanstack/react-router";
import GlobalLayout from "@/components/GlobalLayout";

export const Route = createFileRoute("/_layout")({
  component: GlobalLayout,
});
