import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LiquidButton } from "../components/ui/liquid-glass-button";
import { AnimatedBeamDemo } from "../components/animated-beam-demo";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  TrendingUp, 
  Target, 
  Users, 
  Brain, 
  BarChart3, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  Building,
  Rocket,
  Shield
} from "lucide-react";

const DevelopmentPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleStartJourney = () => {
    if (currentUser) {
      // User is logged in, redirect to financial dashboard
      navigate('/dashboard');
    } else {
      // User is not logged in, redirect to login page
      navigate('/login');
    }
  };

  const developmentAreas = [
    {
      icon: TrendingUp,
      title: "Financial Pattern Analysis",
      description: "Advanced AI algorithms analyze your spending, income, and financial behaviors to identify patterns and opportunities for improvement.",
      features: ["Income pattern recognition", "Spending behavior analysis", "Financial trend identification", "Risk pattern detection"]
    },
    {
      icon: Target,
      title: "Personalized Goal Setting",
      description: "AI-powered goal setting that adapts to your unique financial situation and irregular income patterns.",
      features: ["Smart goal recommendations", "Adaptive milestone planning", "Progress tracking optimization", "Resource allocation guidance"]
    },
    {
      icon: Users,
      title: "Behavioral Learning Engine",
      description: "Our AI learns from your financial decisions and behaviors to provide increasingly personalized recommendations.",
      features: ["Decision pattern analysis", "Habit formation tracking", "Personalized coaching adaptation", "Continuous learning optimization"]
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Intelligent analysis of your financial data to provide actionable insights and predictive recommendations.",
      features: ["Predictive financial modeling", "Risk assessment algorithms", "Opportunity identification", "Automated financial health scoring"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of your financial health with real-time alerts and recommendations.",
      features: ["Smart financial tracking", "Automated alert systems", "Performance analytics", "Continuous optimization suggestions"]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Adaptation",
      description: "Stay ahead of market trends and continuously evolve your expansion strategy.",
      features: ["Trend analysis and forecasting", "Product/service adaptation", "Technology integration", "Innovation opportunity identification"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Accelerated Growth",
      description: "Fast-track your financial progress with AI-powered insights and recommendations"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification and mitigation of financial risks through intelligent monitoring"
    },
    {
      icon: Building,
      title: "Sustainable Habits",
      description: "Build lasting financial habits with personalized coaching and behavioral insights"
    },
    {
      icon: Zap,
      title: "Smart Optimization",
      description: "Optimize your financial decisions with data-driven AI recommendations"
    }
  ];

  const stats = [
    { number: "10K+", label: "Users Coached" },
    { number: "85%", label: "Improved Savings" },
    { number: "24/7", label: "AI Monitoring" },
    { number: "99%", label: "Data Security" }
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-wider animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">development</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-muted-foreground animate-fade-in-up delay-200">
            Building Your Financial Future Through AI Development
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12 animate-fade-in-up delay-400">
            Transform your financial wellness journey with our comprehensive AI-powered development platform. We provide the intelligent insights, personalized coaching, and adaptive learning needed to achieve lasting financial success.
          </p>

          <div className="animate-fade-in-up delay-600">
            <LiquidButton size="lg" className="font-medium" onClick={handleStartJourney}>
              Start Your Financial Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center animate-fade-in-up`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Areas Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We cover every aspect of business development to ensure your expansion is comprehensive, strategic, and successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {developmentAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={area.title}
                  className={`p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in-up`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{area.description}</p>
                  
                  <div className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI System Architecture Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI System Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our intelligent multi-agent system works collaboratively to provide comprehensive financial guidance and personalized recommendations.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <AnimatedBeamDemo />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Development Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive approach ensures your business development initiatives deliver measurable results and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  className={`text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in-up`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A structured, proven approach that transforms your expansion goals into actionable strategies and measurable results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "Deep dive into your business goals, market opportunities, and expansion requirements."
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Create comprehensive development plans tailored to your specific market and objectives."
                },
                {
                  step: "03",
                  title: "Implementation & Growth",
                  description: "Execute strategies with ongoing support, monitoring, and optimization for sustained success."
                }
              ].map((phase, index) => (
                <div 
                  key={phase.step}
                  className={`text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-fade-in-up`}
                  style={{ animationDelay: `${500 + index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our development services can transform your expansion vision into a successful reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LiquidButton size="lg" asChild className="font-medium">
                <a href="/contact" className="flex items-center gap-2">
                  Start Your Development Journey
                  <ArrowRight className="w-5 h-5" />
                </a>
              </LiquidButton>
              <LiquidButton size="lg" variant="outline" asChild className="font-medium">
                <a href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <Brain className="w-5 h-5" />
                </a>
              </LiquidButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevelopmentPage;
