import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Special Bites", href: "/special-bites" },
    { name: "Sugarless Bites", href: "/sugarless-bites" },
    { name: "Kids Edition", href: "/kids-edition" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-elegant">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TROVE
            </div>
            <span className="text-base text-muted-foreground hidden sm:block font-medium">
              For the Love of Desserts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-base relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 transition-colors duration-300">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-bold shadow-lg">
                0
              </span>
            </Button>
            <Button variant="hero" size="lg" className="hidden sm:flex px-8 py-3 text-base font-semibold">
              Order Now
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md shadow-lg">
            <nav className="py-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-300 rounded-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-6 pt-4">
                <Button variant="hero" size="lg" className="w-full py-4 text-base font-semibold">
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;