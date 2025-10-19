import { Brain, TrendingUp, Shield, Target, PieChart, AlertTriangle, X } from "lucide-react";
import { useState, createElement } from "react";

const services = [
  {
    title: "Smart Spending Analysis",
    description: "AI continuously monitors your spending patterns and identifies opportunities to save money without sacrificing your lifestyle.",
    icon: PieChart,
    learnMore: {
      overview: "Our advanced AI algorithms analyze every transaction to understand your unique spending behavior and identify personalized savings opportunities.",
      features: [
        "Real-time transaction categorization and analysis",
        "Personalized spending pattern recognition",
        "Smart savings recommendations without lifestyle compromise",
        "Subscription and recurring payment optimization",
        "Seasonal spending trend analysis",
        "Merchant-specific insights and alternatives"
      ],
      benefits: [
        "Save 15-30% on monthly expenses without changing your lifestyle",
        "Identify forgotten subscriptions and unnecessary charges",
        "Get personalized recommendations for better deals",
        "Track spending efficiency across different categories"
      ]
    }
  },
  {
    title: "Personalized Investment Guidance",
    description: "Get investment recommendations tailored to your income patterns, risk tolerance, and financial goals - perfect for irregular earners.",
    icon: TrendingUp,
    learnMore: {
      overview: "Designed specifically for freelancers, gig workers, and those with variable income, our AI creates investment strategies that adapt to your unique financial situation.",
      features: [
        "Income volatility-adjusted portfolio recommendations",
        "Risk tolerance assessment based on irregular earnings",
        "Dollar-cost averaging strategies for variable income",
        "Tax-efficient investment planning for freelancers",
        "Emergency fund integration with investment goals",
        "Market timing guidance for irregular income patterns"
      ],
      benefits: [
        "Build wealth even with unpredictable income",
        "Optimize investments for tax efficiency",
        "Balance growth with financial security",
        "Access professional-grade investment strategies"
      ]
    }
  },
  {
    title: "Risk Detection & Alerts",
    description: "Proactive monitoring identifies potential financial risks and sends timely alerts to help you avoid overspending or missed opportunities.",
    icon: AlertTriangle,
    learnMore: {
      overview: "Stay ahead of financial challenges with intelligent monitoring that learns your patterns and predicts potential issues before they become problems.",
      features: [
        "Predictive cash flow analysis and warnings",
        "Unusual spending pattern detection",
        "Bill due date reminders and payment optimization",
        "Credit score monitoring and improvement alerts",
        "Market volatility impact assessments",
        "Identity theft and fraud protection monitoring"
      ],
      benefits: [
        "Prevent overdrafts and late payment fees",
        "Protect your credit score proactively",
        "Avoid financial stress through early warnings",
        "Maintain financial stability during income fluctuations"
      ]
    }
  },
  {
    title: "Goal-Based Financial Planning",
    description: "Set and track financial goals with AI-powered strategies that adapt to your changing income and life circumstances.",
    icon: Target,
    learnMore: {
      overview: "Transform your financial dreams into achievable milestones with adaptive planning that evolves with your changing circumstances and income patterns.",
      features: [
        "Adaptive goal setting for irregular income",
        "Milestone tracking with flexible timelines",
        "Priority-based goal management",
        "Income-adjusted savings strategies",
        "Progress visualization and motivation tools",
        "Goal interconnection and optimization analysis"
      ],
      benefits: [
        "Achieve financial goals despite income variability",
        "Stay motivated with clear progress tracking",
        "Optimize multiple goals simultaneously",
        "Adapt plans as life circumstances change"
      ]
    }
  },
  {
    title: "Data Integration Hub",
    description: "Seamlessly connect bank accounts, gig platforms, and financial apps for a complete view of your financial landscape.",
    icon: Brain,
    learnMore: {
      overview: "Unify your entire financial ecosystem in one secure platform, automatically syncing data from banks, gig platforms, investment accounts, and financial apps.",
      features: [
        "Bank-level security with 256-bit encryption",
        "Automatic transaction categorization across all accounts",
        "Gig platform income tracking (Uber, DoorDash, Fiverr, etc.)",
        "Investment account portfolio monitoring",
        "Credit card and loan balance tracking",
        "Real-time net worth calculations"
      ],
      benefits: [
        "Complete financial picture in one dashboard",
        "Eliminate manual data entry and tracking",
        "Secure, read-only access to your accounts",
        "Comprehensive insights across all financial platforms"
      ]
    }
  },
  {
    title: "Financial Security Coaching",
    description: "Build emergency funds, improve credit scores, and create financial safety nets designed for modern work patterns.",
    icon: Shield,
    learnMore: {
      overview: "Develop robust financial security tailored to the unique challenges of irregular income, with personalized strategies for building wealth and protecting your future.",
      features: [
        "Variable income emergency fund strategies",
        "Credit score improvement action plans",
        "Insurance needs assessment and optimization",
        "Debt payoff strategies for irregular earners",
        "Retirement planning for freelancers and gig workers",
        "Tax planning and quarterly payment strategies"
      ],
      benefits: [
        "Build financial resilience against income volatility",
        "Improve creditworthiness and access to better rates",
        "Create comprehensive financial safety nets",
        "Plan for long-term financial independence"
      ]
    }
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openModal = (index: number) => {
    console.log('Opening modal for service index:', index);
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };
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
                  className="group p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-strong hover:-translate-y-2 animate-fade-in-up relative"
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
                      
                      {/* Learn more button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Button clicked, index:', index);
                          openModal(index);
                        }}
                        className="mt-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 group/btn cursor-pointer z-10 relative"
                        type="button"
                      >
                        <span className="text-sm font-medium">Learn more</span>
                        <div className="w-4 h-4 text-primary/70 group-hover/btn:text-primary transition-colors duration-300">
                          →
                        </div>
                      </button>
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

      {/* Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl border border-border/50 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                   {createElement(services[selectedService].icon, { className: "w-5 h-5 text-primary" })}
                 </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {services[selectedService].title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 bg-muted/50 hover:bg-muted rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {services[selectedService].learnMore.overview}
                </p>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {services[selectedService].learnMore.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {services[selectedService].learnMore.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
