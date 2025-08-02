import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-3">TROVE</h3>
              <p className="text-primary-light text-base font-medium">For the Love of Desserts</p>
            </div>
            <p className="text-primary-light leading-relaxed text-base">
              Crafting sweet memories one dessert at a time. Experience the finest 
              handmade cupcakes, cakes, and cookies made with love and premium ingredients.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-light hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-light hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-light hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <nav className="space-y-3">
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
                  className="block text-primary-light hover:text-primary-foreground transition-colors duration-300 font-medium hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Our Categories</h4>
            <nav className="space-y-3">
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
                  className="block text-primary-light hover:text-primary-foreground transition-colors duration-300 cursor-pointer font-medium hover:translate-x-1 transform"
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                <div className="text-primary-light">
                  <p className="font-medium">123 Sweet Street</p>
                  <p className="font-medium">Dessert District, Mumbai 400001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary-light flex-shrink-0" />
                <span className="text-primary-light font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary-light flex-shrink-0" />
                <span className="text-primary-light font-medium">hello@trove.com</span>
              </div>
            </div>
            
            <div className="pt-6">
              <Button variant="hero" size="lg" className="w-full py-4 text-base font-semibold hover:shadow-xl transition-all duration-300">
                Order Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-primary-light text-base font-medium">
              © 2024 Trove Desserts. All rights reserved.
            </p>
            <div className="flex gap-8 text-base">
              <Link to="/privacy" className="text-primary-light hover:text-primary-foreground transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-light hover:text-primary-foreground transition-colors font-medium">
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