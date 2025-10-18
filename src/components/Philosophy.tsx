import { Button } from "@/components/ui/button";

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            Build once, grow often
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Stronger foundations lead to predictable growth. We focus on clarity, clean processes, and investments that compound over time.
          </p>
          
          <Button 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-6"
          >
            Development
          </Button>
        </div>
      </div>
    </section>
  );
};
