import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import NotFound from "@/pages/NotFound";
import appCss from "@/styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "The Pound Cake | Pastry & Coffee" },
      {
        name: "description",
        content:
          "Fresh pastry & coffee in Semarang. Handcrafted cakes, desserts, and daily baked goods.",
      },
      { name: "author", content: "The Pound Cake" },
      { property: "og:title", content: "The Pound Cake | Pastry & Coffee" },
      {
        property: "og:description",
        content: "Fresh pastry & coffee in Semarang. Crafted with care, served daily.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sweet-spot-studio.vercel.app/" },
      { property: "og:image", content: "https://sweet-spot-studio.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Pound Cake | Pastry & Coffee" },
      { name: "twitter:description", content: "Fresh pastry & coffee in Semarang." },
      { name: "twitter:image", content: "https://sweet-spot-studio.vercel.app/og-image.jpg" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error }: { error: Error }) {
  console.error(error);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="text-center">
        <h1 className="font-display mb-3 text-3xl font-bold text-foreground">
          This page didn&apos;t load
        </h1>
        <p className="font-body mb-6 text-muted-foreground">
          Something went wrong while rendering this page.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="font-body rounded-lg bg-primary px-4 py-2 text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="font-body rounded-lg border border-border px-4 py-2 text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
