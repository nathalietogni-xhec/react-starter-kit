import heroImage from "@/assets/hero-image.jpg";

const BNPHero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Woman in a museum"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-end">
        <div className="bg-[hsl(160,100%,12%)] text-white p-12 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            OUR 2025<br />
            INVESTMENT THEMES<br />
            MID-YEAR UPDATE
          </h1>
          
          <div className="w-full h-1 bg-white/30 mb-8" />
          
          <a 
            href="#" 
            className="inline-block text-white underline hover:text-white/80 transition-colors text-lg font-medium"
          >
            Watch the video and download the report
          </a>
        </div>
      </div>

      {/* Caption for image */}
      <div className="absolute bottom-4 left-6 bg-white/90 px-3 py-1 text-xs text-foreground">
        Woman in a museum
      </div>
    </section>
  );
};

export default BNPHero;
