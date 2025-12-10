import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import NevilleLogo from "../assets/images/jc-logo.png"; // <- logo import

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={NevilleLogo}
                alt="J & C Neville Logo"
                className="h-12 w-auto object-contain drop-shadow-sm"
              />
              <div className="leading-tight">
                <span className="block font-bold text-lg">J &amp; C Neville</span>
                <span className="block text-xs text-primary-foreground/70">
                  Steel &amp; Timber Merchants
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted local supplier of quality steel, timber, and roofing
              materials in Roscrea and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Products &amp; Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0862621275"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  086 262 1275
                </a>
              </li>
              <li>
                <a
                  href="tel:050521741"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  0505 21741
                </a>
              </li>
              <li>
                <a
                  href="mailto:jandcnevilleroscrea@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  jandcnevilleroscrea@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Limerick Street, Roscrea,
                  <br />
                  Tipperary E53 VK64
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="h-4 w-4 text-accent" />
                <div>
                  <span className="block font-medium">Monday - Friday</span>
                  <span className="text-sm">9:00 AM - 5:30 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="h-4 w-4 text-accent" />
                <div>
                  <span className="block font-medium">Saturday</span>
                  <span className="text-sm">10:00 AM - 1:00 PM</span>
                </div>
              </li>
              <li className="text-primary-foreground/60 text-sm mt-2">
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} J&amp;C Neville. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
