import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LiquidButton } from "../components/ui/liquid-glass-button";
import { ArrowRight, Brain, Database, Shield, TrendingUp, AlertTriangle, Target } from "lucide-react";

const AboutPage = () => {
  const services = [
    {
      number: "01",
      title: "Behavioral Learning",
      description: "AI continuously analyzes your spending patterns, income fluctuations, and financial habits to understand your unique situation.",
      icon: Brain
    },
    {
      number: "02",
      title: "Data Integration",
      description: "Seamlessly connects bank accounts, gig platforms, and financial apps for a complete financial picture.",
      icon: Database
    },
    {
      number: "03",
      title: "Risk Analysis",
      description: "Proactively identifies potential financial risks and provides early warnings to prevent overspending.",
      icon: AlertTriangle
    },
    {
      number: "04",
      title: "Personalized Recommendations",
      description: "Delivers tailored advice for saving, investing, and spending based on your specific income patterns.",
      icon: Target
    },
    {
      number: "05",
      title: "Financial Security",
      description: "Helps build emergency funds and financial safety nets designed for irregular income earners.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Revolutionizing</span> Personal Finance with AI.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl leading-relaxed mb-12 animate-fade-in-up delay-200">
            Financial advice shouldn't be one-size-fits-all. We help individuals with diverse income patterns—gig workers, freelancers, and irregular earners—build financial security through intelligent, personalized AI coaching that learns and adapts to your unique situation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up delay-400">
            {[
              { number: "10K+", label: "Users Coached" },
              { number: "85%", label: "Improved Savings" },
              { number: "24/7", label: "AI Monitoring" },
              { number: "99%", label: "Data Security" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">How</span> Our AI Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="mb-16 text-center animate-fade-in-up delay-200">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Our Approach</h3>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl leading-relaxed mx-auto">
              Every financial journey is unique. Our AI learns your patterns, understands your goals, and provides guidance that evolves with your changing circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.number} 
                  className={`group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {service.number}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in-up delay-200">
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Mission</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Democratizing financial wellness by providing intelligent, personalized coaching that adapts to diverse income patterns. We believe everyone deserves access to financial guidance that understands their unique circumstances and helps them build lasting financial security.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-up delay-400">
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Vision</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Empowering everyone to achieve financial freedom through intelligent, personalized AI coaching. We envision a world where financial success isn't determined by traditional employment patterns, but where every individual—regardless of their income structure—has access to sophisticated financial guidance that grows with them and adapts to their evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ready to transform your finances?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands who've already improved their financial health with our AI-powered coaching. Start your personalized journey today.
            </p>
            <LiquidButton size="lg" asChild className="font-medium">
              <a href="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </LiquidButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
