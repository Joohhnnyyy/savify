import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Users, Heart, Trophy, Zap, Brain, Target, Star, ArrowRight, Mail, MapPin } from "lucide-react";

const CareerPage = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to help you maintain a healthy balance."
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description: "Continuous learning and development programs to advance your career in fintech."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive and inclusive environment."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Be part of cutting-edge AI projects that revolutionize personal finance coaching."
    },
    {
      icon: Brain,
      title: "AI Impact",
      description: "Help build intelligent systems that transform how people manage their finances."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Work in an environment where your contributions directly impact users' financial wellness."
    }
  ];

  const teamMembers = [
    {
      name: "Aram Abdulla",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years of experience in fintech and AI-powered financial solutions."
    },
    {
      name: "Saman Salih",
      role: "Co-Founder & CTO",
      description: "AI expert driving innovation in machine learning and personalized financial coaching technology."
    },
    {
      name: "Hama Salih",
      role: "Co-Founder & COO",
      description: "Operations specialist ensuring seamless execution of expansion strategies."
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional results for our clients and team."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an environment of mutual respect and support."
    },
    {
      icon: Brain,
      title: "AI-First Mindset",
      description: "We embrace artificial intelligence and think innovatively about personalized financial solutions."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously innovate and adapt to stay ahead in the rapidly evolving fintech landscape."
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
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">career</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-muted-foreground animate-fade-in-up delay-200">
            Join Our Mission to Transform Financial Wellness
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12 animate-fade-in-up delay-400">
            At Savify, we're building the future of AI-powered financial coaching. Join our dynamic team of innovators, data scientists, and financial experts who are passionate about helping people achieve financial freedom through intelligent, personalized guidance.
          </p>

          <div className="animate-fade-in-up delay-600">
            <LiquidButton size="lg" className="font-medium">
              <Mail className="w-5 h-5 mr-2" />
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Savify?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer more than just a job – we provide a platform for growth, innovation, and meaningful impact in transforming how people manage their finances through AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  className={`p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in-up`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These values guide everything we do and shape the culture we've built at Savify.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group text-center animate-fade-in-up`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings together decades of expertise in international business, technology, and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group text-center animate-fade-in-up`}
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're always looking for talented individuals who share our passion for helping businesses expand globally.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 text-center animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Even if you don't see a specific role that matches your skills, we'd love to hear from you. 
                Send us your resume and tell us how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LiquidButton size="lg" className="font-medium">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </LiquidButton>
                <LiquidButton size="lg" variant="outline" asChild className="font-medium">
                  <a href="/contact" className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Visit Our Office
                  </a>
                </LiquidButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Savify and be part of a team that's transforming how businesses expand globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LiquidButton size="lg" asChild className="font-medium">
                <a href="/contact" className="flex items-center gap-2">
                  Get in Touch
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

export default CareerPage;
