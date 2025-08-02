import { getCategoryProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const SpecialBites = () => {
  const products = getCategoryProducts('special');

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
            
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              Premium Collection
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Special Bites
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our signature collection of premium handcrafted desserts. Each piece is made with 
              the finest ingredients and attention to detail, perfect for special occasions 
              and memorable moments.
            </p>
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
                categoryType="special"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialBites;