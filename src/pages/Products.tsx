import { Link } from "react-router-dom";
import { TreeDeciduous, Wrench, Home as HomeIcon, Truck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeliveryPhoto from "@/assets/images/513996038_17965907039921830_1845991543912969019_n.jpg";

// 🔹 Logo
import NevilleLogo from "@/assets/images/jc-logo.png";

// 🔹 Yard / product photos
import Yard1 from "@/assets/images/unnamed.jpg";
import Yard2 from "@/assets/images/unnamed(1).jpg";
import Yard3 from "@/assets/images/unnamed(2).jpg";
import Yard4 from "@/assets/images/unnamed(3).jpg";
import Yard5 from "@/assets/images/unnamed(4).jpg";
import Yard6 from "@/assets/images/unnamed(5).jpg";

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

  const productPhotos = [
    { src: Yard1, alt: "Product photo 1" },
    { src: Yard2, alt: "Product photo 2" },
    { src: Yard3, alt: "Product photo 3" },
    { src: Yard4, alt: "Product photo 4" },
    { src: Yard5, alt: "Product photo 5" },
    { src: Yard6, alt: "Product photo 6" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HEADER WITH BIG LOGO */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-10 md:grid-cols-2">

              {/* LEFT SIDE */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                  Products & <span className="text-accent">Services</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 max-w-xl">
                  Quality steel, timber, and roofing materials for builders, contractors, and DIY customers.
                </p>
              </div>

              {/* RIGHT SIDE – BIG LOGO */}
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


        {/* PRODUCT CATEGORY CARDS */}
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
                          <span className="h-1.5 w-1.5 bg-accent rounded-full" />
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

        {/* PRODUCT PHOTO GALLERY */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Materials We Stock
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A look at some of the timber, steel, and roofing products available in our yard.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productPhotos.map((photo) => (
                <div key={photo.alt} className="rounded-xl overflow-hidden bg-primary/5 shadow-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* DELIVERY SECTION WITH TRUCK IMAGE */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">

            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* LEFT SIDE */}
              <div className="flex-1 order-2 lg:order-1">

                <div className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground mb-6">Delivery Available</span>
                </div>


                <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
                  We Deliver to Your Site
                </h2>

                <p className="text-muted-foreground mb-6">
                  We offer delivery to Roscrea and surrounding areas. Flexible, reliable, and careful transport of all materials.
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

              {/* RIGHT SIDE — TRUCK IMAGE */}
              <div className="flex-1 order-1 lg:order-2">
                 <div className="bg-primary/10 rounded-2xl p-0 overflow-hidden flex items-center justify-center min-h-[300px]">
                  <img
                    src={DeliveryPhoto}
                    alt="Delivery truck"
                    className="w-full h-full object-cover"
                  />
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
