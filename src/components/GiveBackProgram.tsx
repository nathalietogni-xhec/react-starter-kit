import { ArrowRight, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const GiveBackProgram = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Abstract Gradient Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Glassmorphism Container */}
        <div className="relative backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-3xl border border-white/20 shadow-2xl overflow-hidden animate-fade-in">
          {/* Glowing Edge Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-50 blur-xl" />
          <div className="absolute inset-0 rounded-3xl border border-primary/30 shadow-[0_0_30px_rgba(0,128,0,0.3)]" />
          
          <div className="relative p-12 text-center">
            {/* Dynamic Impact Icon */}
            <div className="flex justify-center mb-8 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-br from-primary to-accent p-6 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Heart className="h-10 w-10 text-white fill-white animate-pulse" />
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Discover our "Give Back Program"
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              Invest with purpose. Multiply your impact. Shape a better tomorrow.
            </p>

            {/* CTAs with Glow Effects */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in">
              <Link 
                to="/give-back/about"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,128,0,0.5)]">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>About the program</span>
                </div>
              </Link>
              
              <Link 
                to="/give-back/impact-matching"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-primary text-white rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,128,0,0.5)]">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Discover the "Impact Matching"</span>
                </div>
              </Link>
            </div>

            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float" />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/50 rounded-full animate-float delay-700" />
              <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float delay-1000" />
              <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/50 rounded-full animate-float delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveBackProgram;
