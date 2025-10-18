import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const services = [
    {
      number: "01",
      title: "Market Entry",
      description: "Navigate regulations, establish presence, and launch with the right partners."
    },
    {
      number: "02",
      title: "Global Partnerships",
      description: "Build alliances that open distribution, improve pricing, and strengthen positioning."
    },
    {
      number: "03",
      title: "Franchising",
      description: "Match credible brands with capable operators to scale efficiently."
    },
    {
      number: "04",
      title: "Operations & Improvement",
      description: "Streamline processes and teams to raise performance and reduce cost."
    },
    {
      number: "05",
      title: "Market Positioning",
      description: "Clarify the offer, sharpen messaging, and build credibility in new regions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-primary">Influencing</span> How Companies Grow in the Future.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl leading-relaxed mb-12">
            Expansion shouldn't rely on guesswork. We help organizations adapt, innovate, and grow with clear strategies, disciplined execution, and measurable results. ALGON doesn't just adapt we lead. Research, collaboration, and a focus on quality guide every decision.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="text-primary">About</span>
          </h2>
          
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">What we do</h3>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl leading-relaxed">
              Every business has untapped potential. With the right vision, strategy, and execution, that potential becomes progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.number} className="border-t-2 border-primary pt-6">
                <div className="text-sm text-primary font-medium mb-3">{service.number}</div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Mission</h3>
              <p className="text-lg text-foreground leading-relaxed">
                Striving to offer the most convenient quality to our customers through market expansion, value addition and market knowledge. Delivering the needed insights, refinements and products for the smooth ongoing of our customers' businesses.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Vision</h3>
              <p className="text-lg text-foreground leading-relaxed">
                Creating a world where worldwide companies connect with local businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Always happy to connect.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Looking to grow? We make it easy.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Contact US</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
