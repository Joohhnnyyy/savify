import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CareerPage = () => {
  const benefits = [
    {
      title: "Career Growth",
      description: "Opportunities to learn, lead, and grow. At ALGON, you'll find an environment where your skills are valued, and your growth is our priority."
    },
    {
      title: "Innovation Focus",
      description: "Work with cutting-edge strategies and technologies while contributing to meaningful market expansion initiatives."
    },
    {
      title: "Collaborative Culture",
      description: "Join a team that values collaboration, clear communication, and shared success in achieving business goals."
    },
    {
      title: "Impactful Work",
      description: "Make a real difference by helping global companies connect with local markets and drive sustainable growth."
    }
  ];

  const team = [
    "Sardar Waisi (Chairman)",
    "Chief Executive Officer",
    "Chief Operating Officer",
    "Account Manager",
    "Accountant"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-wider">
            CAREER
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Help move the market
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl leading-relaxed">
            Join a team that ships. Clear goals, honest feedback, and opportunities to learn fast and lead.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">WHY WORK WITH US</h3>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl leading-relaxed">
              We don't just hire employees we build a team of innovators, problem-solvers, and visionaries. At ALGON, you'll find an environment where your skills are valued, and your growth is our priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background p-8 rounded-lg border border-border">
                <div className="text-sm text-primary font-semibold mb-3">{index + 1}</div>
                <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">OPEN POSITIONS</h3>
          <div className="bg-muted/30 p-12 rounded-lg text-center">
            <p className="text-xl text-muted-foreground">
              No open positions available at the moment.
            </p>
          </div>
        </div>
      </section>

      {/* Life at ALGON Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">LIFE AT ALGON</h3>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl leading-relaxed">
              We believe in a workplace that inspires. Whether it's innovation, collaboration, or career growth, ALGON is a place where people thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {team.map((member, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <div className="text-sm text-primary font-semibold mb-2">{index + 1}</div>
                <p className="text-lg font-medium">{member}</p>
              </div>
            ))}
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

export default CareerPage;
