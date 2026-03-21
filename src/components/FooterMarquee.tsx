import logo from "@/assets/logo.jpg";

const FooterMarquee = () => {
  return (
    <footer className="py-8 border-t border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) =>
          <div key={i} className="flex items-center gap-4 mx-4">
              <span className="font-display text-2xl font-bold text-primary">
                THE POUND CAKE
              </span>
              <img
              src={logo}
              alt=""
              className="w-8 h-8 rounded-full object-cover" />
            
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-muted-foreground text-sm font-body mt-6">© 2026 Rikho Marchelino. All rights reserved.

      </p>
    </footer>);

};

export default FooterMarquee;