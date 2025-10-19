import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Philosophy = () => {
  const navigate = useNavigate();
  
  const principles = [
    {
      icon: Building2,
      title: "Strong Foundations",
      description: "Every successful expansion starts with solid groundwork and clear strategic planning."
    },
    {
      icon: TrendingUp,
      title: "Predictable Growth",
      description: "Systematic approaches that deliver consistent, measurable results across markets."
    },
    {
      icon: Target,
      title: "Clear Processes",
      description: "Transparent methodologies that eliminate guesswork and reduce market entry risks."
    },
    {
      icon: Zap,
      title: "Compound Value",
      description: "Investments and strategies that build upon each other for exponential returns."
    }
  ];

  return (
    <section id="philosophy" className="py-32 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Build once, grow often
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-200">
              Stronger foundations lead to predictable growth. We focus on clarity, clean processes, and investments that compound over time.
            </p>
            
            <div className="animate-fade-in-up delay-400">
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                onClick={() => {
                  console.log('Development button clicked - navigating to /development');
                  navigate('/development');
                }}
              >
                Development
                <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Philosophy Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={principle.title}
                  className={`group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {principle.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Bottom Quote */}
          <div className="mt-20 text-center animate-fade-in-up delay-1400">
            <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
              "Success in global markets isn't about luck—it's about building systems that work consistently, everywhere."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
