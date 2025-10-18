import { Brain, TrendingUp, Shield, Target, PieChart, AlertTriangle } from "lucide-react";

const services = [
  {
    title: "Smart Spending Analysis",
    description: "AI continuously monitors your spending patterns and identifies opportunities to save money without sacrificing your lifestyle.",
    icon: PieChart,
  },
  {
    title: "Personalized Investment Guidance",
    description: "Get investment recommendations tailored to your income patterns, risk tolerance, and financial goals - perfect for irregular earners.",
    icon: TrendingUp,
  },
  {
    title: "Risk Detection & Alerts",
    description: "Proactive monitoring identifies potential financial risks and sends timely alerts to help you avoid overspending or missed opportunities.",
    icon: AlertTriangle,
  },
  {
    title: "Goal-Based Financial Planning",
    description: "Set and track financial goals with AI-powered strategies that adapt to your changing income and life circumstances.",
    icon: Target,
  },
  {
    title: "Data Integration Hub",
    description: "Seamlessly connect bank accounts, gig platforms, and financial apps for a complete view of your financial landscape.",
    icon: Brain,
  },
  {
    title: "Financial Security Coaching",
    description: "Build emergency funds, improve credit scores, and create financial safety nets designed for modern work patterns.",
    icon: Shield,
  },
];

export const Services = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-64 h-64 bg-primary/60 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
              <Brain className="w-4 h-4" />
              AI Financial Features
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Intelligent Financial Coaching{" "}
              <span className="text-primary">That Learns You</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI adapts to your unique financial patterns, whether you're a freelancer, gig worker, or have irregular income streams.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-strong hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                        <span className="text-sm font-medium">Learn more</span>
                        <div className="w-6 h-px bg-primary"></div>
                        <div className="w-2 h-2 border-t-2 border-r-2 border-primary rotate-45"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
