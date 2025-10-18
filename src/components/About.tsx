import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            Enter new markets with confidence
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Legal frameworks, operations, and brand fit are the real blockers. Drawing on experience across construction and technology, we map practical, low-risk paths to scale—so launches move fast and stay compliant.
          </p>
          
          <Button 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-6"
          >
            About
          </Button>
        </div>
      </div>
    </section>
  );
};
