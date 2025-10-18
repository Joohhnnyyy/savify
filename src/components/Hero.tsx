import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(139, 21, 56, 0.9) 0%, rgba(139, 21, 56, 0.7) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Your Gateway to Market Success
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed">
            Expansion shouldn't be guesswork. We guide companies into new markets with clear steps, reliable partners, and measurable results.
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8 py-6 h-auto rounded-full"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              LET'S TALK
            </span>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 z-10 flex flex-col items-end gap-4">
        <span className="text-sm font-medium text-white/80 tracking-wider">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-6 h-6 text-white/80 animate-bounce" />
      </div>
    </section>
  );
};
