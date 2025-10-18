import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DevelopmentPage = () => {
  const developmentAreas = [
    {
      title: "Infrastructure & Logistics",
      description: "Design supply chains and distribution that stay reliable at scale."
    },
    {
      title: "Operational Efficiency",
      description: "Clarify workflows, roles, and tools to speed execution."
    },
    {
      title: "Investment & Growth Strategies",
      description: "Prioritize opportunities, structure deals, and plan for sustained returns."
    },
    {
      title: "Market Positioning",
      description: "Define the offer, sharpen messaging, and build credibility in new regions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary tracking-widest">
            DEVELOPMENT
          </h2>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Shaping Future Growth
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl leading-relaxed">
            <span className="text-foreground font-semibold">Build to scale</span>
            <br />
            ALGON brings strategy, operations, and partnerships together to create reliable momentum growth that's efficient, compliant, and sustainable.
          </p>
        </div>
      </section>

      {/* What Development Means Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
              What Development Means at algon
            </h3>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl leading-relaxed">
              We don't just support growth we engineer it. From market expansion to operational efficiency, ALGON helps businesses develop the right strategies to thrive in competitive industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {developmentAreas.map((area, index) => (
              <div key={index} className="bg-background p-8 rounded-lg border border-border">
                <h4 className="text-2xl font-bold mb-4">{area.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">sustainability</h3>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Responsible growth reduces waste and increases resilience. We choose materials, partners, and processes that protect both value and the environment.
            </p>
          </div>
          
          <div className="mt-12 border-l-4 border-primary pl-6">
            <h4 className="text-2xl font-bold mb-4">Environmentally Responsible Growth</h4>
            <p className="text-muted-foreground leading-relaxed">
              We integrate sustainable practices into every phase of development, ensuring long-term value creation while minimizing environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
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

export default DevelopmentPage;
