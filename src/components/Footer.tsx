import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">TROVE</h3>
              <p className="text-primary-light text-sm">For the Love of Desserts</p>
            </div>
            <p className="text-primary-light leading-relaxed">
              Crafting sweet memories one dessert at a time. Experience the finest 
              handmade cupcakes, cakes, and cookies made with love and premium ingredients.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-light hover:text-primary-foreground hover:bg-primary/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-light hover:text-primary-foreground hover:bg-primary/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-light hover:text-primary-foreground hover:bg-primary/20">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Special Bites", href: "/special-bites" },
                { name: "Sugarless Bites", href: "/sugarless-bites" },
                { name: "Kids Edition", href: "/kids-edition" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-primary-light hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Categories</h4>
            <nav className="space-y-2">
              {[
                "Premium Cupcakes",
                "Signature Cakes",
                "Artisan Cookies",
                "Sugar-Free Options",
                "Kids Favorites",
                "Custom Orders",
              ].map((item) => (
                <div
                  key={item}
                  className="block text-primary-light hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                <div className="text-primary-light">
                  <p>123 Sweet Street</p>
                  <p>Dessert District, Mumbai 400001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light flex-shrink-0" />
                <span className="text-primary-light">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-light flex-shrink-0" />
                <span className="text-primary-light">hello@trove.com</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="hero" size="sm" className="w-full">
                Order Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-light text-sm">
              © 2024 Trove Desserts. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-light hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-light hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;