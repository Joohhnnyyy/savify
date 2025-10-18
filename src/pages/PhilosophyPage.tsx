import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { 
  Target, 
  Eye, 
  Compass, 
  Users, 
  Lightbulb, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Heart,
  Star,
  TrendingUp,
  Award,
  Brain
} from "lucide-react";

const PhilosophyPage = () => {
  const philosophyPillars = [
    {
      icon: Target,
      title: "Personalization",
      description: "We believe every individual's financial journey is unique. Our AI adapts to your specific income patterns, spending habits, and life circumstances to provide truly personalized guidance.",
      principles: ["Individualized coaching", "Adaptive algorithms", "Personal goal alignment", "Custom recommendations"]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Financial data requires the highest level of protection. We maintain rigorous security standards and privacy protocols to safeguard your sensitive information.",
      principles: ["Data encryption", "Privacy protection", "Secure processing", "Transparent policies"]
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We are committed to helping you achieve measurable financial improvement. Every feature is designed to create tangible value and sustainable financial wellness.",
      principles: ["Measurable progress", "Sustainable habits", "Financial wellness", "Continuous improvement"]
    }
  ];

  const coreValues = [
    {
      icon: Compass,
      title: "Intelligent",
      description: "Every recommendation is powered by advanced AI and machine learning. We don't just track your finances – we learn from your patterns to provide smarter guidance.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Transparent",
      description: "Open communication builds trust. We maintain complete transparency in our processes, progress, and challenges, ensuring you're always informed.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      description: "We embrace cutting-edge solutions and creative approaches. Innovation isn't just about technology – it's about finding better ways to achieve your goals.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Your success is our success. Every strategy, every solution, and every recommendation is designed with your specific needs and objectives at the center.",
      color: "from-red-500 to-red-600"
    }
  ];

  const achievements = [
    { icon: Award, number: "10K+", label: "Users Coached" },
    { icon: Users, number: "85%", label: "Improved Finances" },
    { icon: Brain, number: "24/7", label: "AI Monitoring" },
    { icon: Star, number: "98%", label: "User Satisfaction" }
  ];

  const principles = [
    {
      title: "Excellence in Execution",
      description: "We don't just plan – we execute with precision and dedication until objectives are achieved."
    },
    {
      title: "Continuous Learning",
      description: "Markets evolve, and so do we. We continuously adapt our strategies based on new insights and changing conditions."
    },
    {
      title: "Partnership Mindset",
      description: "We're not just service providers – we're strategic partners invested in your long-term success."
    },
    {
      title: "Ethical Leadership",
      description: "We conduct business with integrity, respect, and responsibility toward all stakeholders."
    },
    {
      title: "Innovation Drive",
      description: "We constantly seek new and better ways to solve challenges and create value for our clients."
    },
    {
      title: "Results Accountability",
      description: "We take full ownership of outcomes and are accountable for delivering the results we promise."
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-wider animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">philosophy</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-muted-foreground animate-fade-in-up delay-200">
            Clarity, Discipline, Results
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12 animate-fade-in-up delay-400">
            Our philosophy is built on three fundamental pillars that guide every decision, every strategy, and every action we take. These principles ensure that we deliver exceptional value while maintaining the highest standards of integrity and excellence.
          </p>

          <div className="animate-fade-in-up delay-600">
            <LiquidButton size="lg" className="font-medium">
              Discover Our Approach
              <ArrowRight className="w-5 h-5 ml-2" />
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.label}
                  className={`text-center animate-fade-in-up`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground text-sm">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Pillars Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Three Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These foundational principles shape our approach to every client relationship and project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {philosophyPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className={`p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in-up`}
                  style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>
                  
                  <div className="space-y-3">
                    {pillar.principles.map((principle, principleIndex) => (
                      <div key={principleIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These values define who we are and how we approach every challenge, ensuring consistent excellence in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className={`p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in-up`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Guiding Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide our daily operations and long-term strategic decisions, ensuring we consistently deliver exceptional value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className={`p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md group animate-fade-in-up`}
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-3 h-3 bg-primary rounded-full mb-4 group-hover:scale-125 transition-transform duration-300"></div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              To empower businesses with the strategic insights, operational excellence, and innovative solutions they need to achieve sustainable growth and market leadership.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ready to Experience Our Philosophy in Action?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our principles and values can drive exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LiquidButton size="lg" asChild className="font-medium">
                <a href="/contact" className="flex items-center gap-2">
                  Start Your Journey
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

export default PhilosophyPage;
