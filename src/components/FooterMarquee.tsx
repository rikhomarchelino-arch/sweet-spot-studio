const FooterMarquee = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-md mx-auto text-center space-y-6 px-4">
        <h3 className="font-display text-2xl font-bold text-primary">
          The Pound Cake
        </h3>

        <div className="space-y-2">
          <p className="text-sm font-body font-medium text-foreground/80">
            Opening Hours
          </p>
          <div className="text-sm font-body text-muted-foreground space-y-1">
            <p>Monday – Thursday · 07.00 – 22.00</p>
            <p>Friday – Sunday · 07.00 – 23.00</p>
          </div>
        </div>

        <p className="text-muted-foreground/50 text-xs font-body pt-2">
          © 2026 Rikho Marchelino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterMarquee;
