import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-wider">
            contact
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-muted-foreground">
            General Inquiries and
          </h2>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-foreground mb-12 leading-relaxed">
              We're thrilled that you're here! Let's make this as smooth and enjoyable as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3 text-muted-foreground">
                  Your name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 text-lg"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 text-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-muted-foreground">
                  Your message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[200px] text-lg resize-none"
                  placeholder="Tell us about your project or inquiry"
                />
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full md:w-auto min-w-[200px]"
                >
                  We look forward to connecting!
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Phone:</span>
              <a href="tel:+9647702950000" className="text-lg hover:text-primary transition-colors">
                +964 770 295 0000
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Email:</span>
              <a href="mailto:info@algon.iq" className="text-lg hover:text-primary transition-colors">
                info@algon.iq
              </a>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-muted-foreground">Address:</span>
              <a 
                href="https://maps.app.goo.gl/LzYYVmsVJoEu4aEo8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg hover:text-primary transition-colors"
              >
                Iraq, Sulaymaniyah, Malik Mahmud Street, District 305, Alley 10, Building 84
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
