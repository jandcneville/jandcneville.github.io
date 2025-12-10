import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Get in touch for availability, pricing, or any questions. We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      <Phone className="h-5 w-5 text-accent" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a 
                      href="tel:0862621275" 
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <span className="text-foreground font-medium">Mobile</span>
                      <span className="text-primary font-semibold">086 262 1275</span>
                    </a>
                    <a 
                      href="tel:050521741" 
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <span className="text-foreground font-medium">Landline</span>
                      <span className="text-primary font-semibold">0505 21741</span>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      <Mail className="h-5 w-5 text-accent" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="mailto:jandcnevilleroscrea@gmail.com" 
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <span className="text-primary font-medium break-all">jandcnevilleroscrea@gmail.com</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-foreground font-medium">J&C Neville</p>
                      <p className="text-muted-foreground">Limerick Street</p>
                      <p className="text-muted-foreground">Roscrea, Co. Tipperary</p>
                      <p className="text-primary font-medium mt-1">E53 VK64</p>
                    </div>
                    <Button asChild className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Limerick+Street+Roscrea+Tipperary+E53+VK64" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      Opening Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="text-foreground font-medium">Monday - Friday</span>
                        <span className="text-primary font-semibold">9:00 AM - 5:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="text-foreground font-medium">Saturday</span>
                        <span className="text-primary font-semibold">10:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-muted-foreground font-medium">Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="h-full min-h-[500px]">
                <div className="bg-card border border-border rounded-lg overflow-hidden h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2415.8!2d-7.8!3d52.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485c44c8a47e0b5d%3A0x1!2sLimerick%20Street%2C%20Roscrea%2C%20Co.%20Tipperary!5e0!3m2!1sen!2sie!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "500px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="J&C Neville Location"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Call CTA */}
        <section className="py-12 bg-accent">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-2">
                  Need Materials Fast?
                </h2>
                <p className="text-accent-foreground/80">
                  Give us a call and we'll check availability for you right away.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="tel:0862621275">
                    <Phone className="mr-2 h-5 w-5" />
                    086 262 1275
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                  <a href="tel:050521741">
                    <Phone className="mr-2 h-5 w-5" />
                    0505 21741
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
