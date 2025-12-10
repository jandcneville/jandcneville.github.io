import { Link } from "react-router-dom";
import { TreeDeciduous, Wrench, Home as HomeIcon, Truck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const productCategories = [
    {
      icon: TreeDeciduous,
      title: "Timber",
      description: "Quality timber for all your construction and DIY projects.",
      items: [
        "Structural timber & joists",
        "Fencing materials & posts",
        "Decking boards",
        "Plywood & sheet materials",
        "Skirting & architrave",
        "Treated timber",
      ],
    },
    {
      icon: Wrench,
      title: "Steel",
      description: "A wide range of steel products for structural and general use.",
      items: [
        "I-beams & RSJs",
        "Galvanized pipes",
        "Steel plates & sheets",
        "Angle brackets & fixings",
        "Box sections",
        "Flat bars & round bars",
      ],
    },
    {
      icon: HomeIcon,
      title: "Roofing & Sheeting",
      description: "Everything you need for roofing and cladding projects.",
      items: [
        "Corrugated roofing sheets",
        "Box profile sheets",
        "Ridge caps & flashings",
        "Roof fixings & accessories",
        "Guttering supplies",
        "Insulation materials",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Products & <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Quality steel, timber, and roofing materials for builders, contractors, and DIY enthusiasts.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <Card key={category.title} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-foreground">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Notice */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Contact Us for <span className="text-accent">Availability & Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Stock and prices vary. Give us a call or visit our yard on Limerick Street to discuss your requirements. 
                We're always happy to help with advice and quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="tel:0862621275">
                    <Phone className="mr-2 h-5 w-5" />
                    086 262 1275
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:050521741">
                    <Phone className="mr-2 h-5 w-5" />
                    0505 21741
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                  <Truck className="h-5 w-5" />
                  <span className="font-medium">Delivery Available</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  We Deliver to <span className="text-accent">Your Site</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Don't have transport? No problem! We offer a convenient delivery service to Roscrea and the surrounding areas. 
                  Whether it's a small order or a full load, we can arrange delivery to suit your schedule.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="h-2 w-2 bg-primary rounded-full" />
                    </span>
                    Flexible delivery times
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="h-2 w-2 bg-primary rounded-full" />
                    </span>
                    Careful handling of all materials
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="h-2 w-2 bg-primary rounded-full" />
                    </span>
                    Competitive delivery rates
                  </li>
                </ul>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/contact">
                    Enquire About Delivery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-primary/10 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                  <Truck className="h-32 w-32 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
