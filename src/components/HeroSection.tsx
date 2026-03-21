import heroCake from "@/assets/hero-cake.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCake}
          alt="The Pound Cake - Premium Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground drop-shadow-2xl">
          THE POUND
          <br />
          <span className="text-primary">CAKE.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-foreground/80 font-body">
          Crafting premium pound cakes &amp; pastries with love, delivering a rich twist in every bite!
        </p>
        <button
          onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-10 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Explore Our Menu
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
