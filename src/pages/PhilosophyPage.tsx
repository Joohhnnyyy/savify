import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PhilosophyPage = () => {
  const values = [
    {
      title: "Strategic",
      description: "Every solution is thoughtfully designed to align with business goals and drive meaningful results."
    },
    {
      title: "Transparent",
      description: "Clear communication and honesty are at the heart of every project, ensuring trust and reliability"
    },
    {
      title: "Innovative",
      description: "Constantly pushing boundaries to create modern, high-impact digital experiences."
    },
    {
      title: "User-Centric",
      description: "Committed to providing smooth, user-friendly experiences that satisfy the demands and expectations of the audience"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Our Philosophy <span className="text-primary">Clarity, Discipline, Results</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl leading-relaxed">
            Progress matters; how we achieve it matters more. We help businesses adapt and innovate with clear strategies that raise productivity and create durable value. Research and collaboration turn change into an advantage. ALGON doesn't just adapt we lead.
          </p>
        </div>
      </section>

      {/* Built on Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Built on Experience
          </h2>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Core Values</h3>
            <p className="text-2xl text-foreground">
              Our values ​​are not just a script, it's our Philosophy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
            {values.map((value, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">WHAT WE BELIEVE?</h3>
            <p className="text-2xl text-foreground leading-relaxed">
              At ALGON, we turn challenges into opportunities and growth into transformation with the right strategy
            </p>
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

export default PhilosophyPage;
