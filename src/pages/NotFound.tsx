import { useEffect } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Mail, 
  Phone, 
  MapPin,
  AlertTriangle,
  Compass,
  RefreshCw
} from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    // Log the 404 error for analytics
    console.log("404 - Page not found:", window.location.pathname);
  }, []);

  const quickLinks = [
    { href: "/", label: "Home", icon: Home, description: "Return to our homepage" },
    { href: "/about", label: "About Us", icon: Compass, description: "Learn about our company" },
    { href: "/services", label: "Services", icon: Search, description: "Explore our services" },
    { href: "/contact", label: "Contact", icon: Mail, description: "Get in touch with us" }
  ];

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Visual */}
            <div className="mb-12 animate-fade-in-up">
              <div className="relative inline-block">
                <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-primary/20 select-none">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                    <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-12 animate-fade-in-up delay-200">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Page Not Found
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Oops! The page you're looking for seems to have wandered off into the digital wilderness.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't worry though – we'll help you find your way back to where you need to be.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mb-16 animate-fade-in-up delay-400">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <LiquidButton size="lg" asChild className="font-medium">
                  <a href="/" className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Go Home
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </LiquidButton>
                <LiquidButton size="lg" variant="outline" onClick={handleGoBack} className="font-medium">
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </LiquidButton>
                <LiquidButton size="lg" variant="outline" onClick={handleRefresh} className="font-medium">
                  <RefreshCw className="w-5 h-5" />
                  Refresh Page
                </LiquidButton>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up delay-600">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
                Or explore these popular sections:
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in-up`}
                      style={{ animationDelay: `${700 + index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-20 animate-fade-in-up delay-800">
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Still need help?</h3>
                <p className="text-muted-foreground mb-6">
                  If you believe this is an error or you're looking for something specific, don't hesitate to reach out to our team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <LiquidButton variant="outline" asChild className="font-medium">
                    <a href="/contact" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact Support
                    </a>
                  </LiquidButton>
                  <LiquidButton variant="outline" asChild className="font-medium">
                    <a href="tel:+1234567890" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Us
                    </a>
                  </LiquidButton>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="mt-16 animate-fade-in-up delay-1000">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Not all who wander are lost, but this page definitely is." 
                  <br />
                  <span className="text-xs">– Error 404 Philosophy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
