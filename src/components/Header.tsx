import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import NevilleLogo from "../assets/images/jc-logo.png";   // ← your logo import

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/products", label: "Products" },
  { path: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      {/* Top bar with phone + hours */}
      <div className="border-b border-primary-foreground/20 bg-primary/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-primary-foreground/90">
          <a
            href="tel:050521741"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span>0505 21741</span>
          </a>
          <span>Mon–Fri: 9AM–5:30PM | Sat: 10AM–1PM</span>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-primary">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">

          {/* Logo + Brand Text */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={NevilleLogo}
              alt="J & C Neville Logo"
              className="h-16 w-17 object-contain drop-shadow-sm"
            />
            <div className="leading-tight text-primary-foreground">
              <span className="block font-bold text-xl">J &amp; C Neville</span>
              <span className="hidden sm:block text-xs text-primary-foreground/70">
                Steel &amp; Timber Merchants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={[
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  isActive(link.path)
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary-foreground/10",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              size="sm"
              className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Call the yard
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-primary-foreground/20 bg-primary/95 backdrop-blur">
            <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={[
                    "w-full rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive(link.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground hover:bg-primary-foreground/10",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:050521741"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call the yard
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
