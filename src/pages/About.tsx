import { Link } from "react-router-dom";
import { Users, Truck, Award, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 🔹 Logo
import NevilleLogo from "@/assets/images/jc-logo.png";

const About = () => {
  const reasons = [
    {
      icon: Users,
      title: "Local & Personal",
      description:
        "We're a local family business that takes pride in knowing our customers by name. You'll always receive friendly, personal service.",
    },
    {
      icon: Award,
      title: "Quality Materials",
      description:
        "We stock only quality materials from trusted suppliers. Our reputation depends on the products we supply.",
    },
    {
      icon: Truck,
      title: "Delivery Service",
      description:
        "Can't collect? No problem. We offer reliable delivery service to Roscrea and surrounding areas.",
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description:
        "Located on Limerick Street in the heart of Roscrea, we're easy to find with ample space for loading.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header – matches Home page layout */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-10 md:grid-cols-2">
              {/* LEFT SIDE – TEXT */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                  About <span className="text-accent">J &amp; C Neville</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 max-w-xl">
                  Your trusted local steel and timber merchants in Roscrea, County
                  Tipperary.
                </p>
                <p className="text-primary-foreground/70 max-w-xl">
                  Serving builders, farmers, tradespeople and DIY customers with reliable
                  materials and friendly service.
                </p>
              </div>

              {/* RIGHT SIDE – LARGE LOGO */}
              <div className="flex justify-center">
                <img
                  src={NevilleLogo}
                  alt="J & C Neville Logo"
                  className="w-64 md:w-80 lg:w-[350px] drop-shadow-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Your Local Building Merchants
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  J&amp;C Neville is a family-run steel and timber merchant based in
                  Roscrea, County Tipperary. We supply quality building materials
                  to builders, contractors, farmers, and DIY enthusiasts
                  throughout the local area and beyond.
                </p>
              </div>

              <div className="bg-muted rounded-2xl p-8 md:p-12">
                <p className="text-foreground leading-relaxed mb-4">
                  At J&amp;C Neville, we understand that every project is different.
                  Whether you're a professional contractor working on a large
                  development or a homeowner tackling a weekend project, we're
                  here to help you find the right materials at competitive
                  prices.
                </p>
                <p className="text-foreground leading-relaxed">
                  Visit our yard on Limerick Street to browse our extensive range
                  of timber, steel, and roofing materials. Our knowledgeable team
                  is always on hand to offer advice and help you choose the right
                  products for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose J&amp;C Neville?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing quality products and excellent
                service to every customer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reasons.map((reason) => (
                <Card key={reason.title} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <reason.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Visit Us Today
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Drop into our yard on Limerick Street or give us a call. We're here
              to help with all your steel, timber, and roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="tel:0862621275">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 086 262 1275
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/contact">
                  Get Directions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
