import { Link } from "react-router-dom";
import { Phone, Truck, TreeDeciduous, Wrench, Home as HomeIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeliveryPhoto from "@/assets/images/513996038_17965907039921830_1845991543912969019_n.jpg";


// Import your logo
import NevilleLogo from "@/assets/images/jc-logo.png";

const Index = () => {
  const features = [
    {
      icon: TreeDeciduous,
      title: "Timber",
      description: "Structural timber, fencing, decking, and boards for all your building needs.",
    },
    {
      icon: Wrench,
      title: "Steel",
      description: "I-beams, RSJs, galvanized pipes, steel plates, and angle brackets.",
    },
    {
      icon: HomeIcon,
      title: "Roofing",
      description: "Corrugated sheets, flashings, and quality roofing materials.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* ====================================================== */}
        {/* HERO SECTION WITH BIG LOGO ON THE RIGHT */}
        {/* ====================================================== */}
        <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* LEFT SIDE – TEXT */}
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Your Local{" "}
                  <span className="text-accent">Steel & Timber</span>{" "}
                  Merchants in Roscrea
                </h1>

                <p className="text-xl text-primary-foreground/80 mb-8">
                  Quality building materials, expert advice, and reliable delivery service. 
                  Serving Roscrea and surrounding areas for all your construction needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/products">
                      View Our Products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="tel:0862621275">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* RIGHT SIDE – BIG LOGO */}
              <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                <img
                  src={NevilleLogo}
                  alt="J & C Neville Logo"
                  className="w-64 md:w-80 lg:w-[350px] drop-shadow-2xl object-contain"
                />
              </div>

            </div>
          </div>
        </section>

        {/* QUICK CONTACT STRIP */}
        <section className="bg-accent py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-accent-foreground">
              <a href="tel:0862621275" className="flex items-center gap-2 font-medium hover:underline">
                <Phone className="h-5 w-5" />
                086 262 1275
              </a>
              <a href="tel:050521741" className="flex items-center gap-2 font-medium hover:underline">
                <Phone className="h-5 w-5" />
                0505 21741
              </a>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                <span className="font-medium">Delivery Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From structural materials to finishing touches, we stock everything you need for your building project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/products">
                  See All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* DELIVERY SECTION */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="bg-primary/10 rounded-2xl p-0 overflow-hidden flex items-center justify-center min-h-[300px]">
                  <img
                    src={DeliveryPhoto}
                    alt="Delivery truck"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Delivery Service Available
                </h2>
                <p className="text-muted-foreground mb-6">
                  Can't collect? No problem! We offer reliable delivery service to Roscrea and surrounding areas. 
                  Our experienced team will ensure your materials arrive safely at your site.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="h-2 w-2 bg-primary rounded-full" />
                    </span>
                    Local delivery available
                  </li>

                  <li className="flex items-center gap-3 text-foreground">
                    <span className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="h-2 w-2 bg-primary rounded-full" />
                    </span>
                    Flexible scheduling
                  </li>

                  <li className="flex items-center gap-3 text-foreground">
                    <span className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="h-2 w-2 bg-primary rounded-full" />
                    </span>
                    Safe handling of all materials
                  </li>
                </ul>

                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/contact">
                    Contact Us for Delivery
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Get in touch today for availability and pricing. Our friendly team is here to help with all your steel, timber, and roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:0862621275">
                  <Phone className="mr-2 h-5 w-5" />
                  086 262 1275
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Get Directions
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

export default Index;
