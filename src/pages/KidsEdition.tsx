import { getCategoryProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Gift, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const KidsEdition = () => {
  const products = getCategoryProducts('kids');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center gap-2 bg-blue-100 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-6">
              <Star className="h-4 w-4" />
              Kid-Friendly Treats
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kids Edition
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sweet treats designed especially for little ones! Our kids edition features 
              smaller portions, fun designs, and child-friendly flavors at pocket-friendly 
              prices. Perfect for birthday parties and special treats.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Perfect Portions</h3>
              <p className="text-sm text-muted-foreground">Right-sized treats for little hands</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Fun Designs</h3>
              <p className="text-sm text-muted-foreground">Colorful and playful presentations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Budget Friendly</h3>
              <p className="text-sm text-muted-foreground">30% off regular prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                categoryType="kids"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsEdition;