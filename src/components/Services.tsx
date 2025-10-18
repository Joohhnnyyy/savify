const services = [
  {
    title: "Operations & Improvement",
    description: "Streamline processes and teams to raise performance and reduce cost.",
  },
  {
    title: "Market Entry",
    description: "Navigate regulations, establish presence, and launch with the right partners.",
  },
  {
    title: "Global Partnerships",
    description: "Form alliances that open distribution, improve pricing, and strengthen positioning.",
  },
  {
    title: "Franchising",
    description: "Match credible brands with capable operators to scale efficiently.",
  },
];

export const Services = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
