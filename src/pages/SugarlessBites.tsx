import { getCategoryProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const SugarlessBites = () => {
  const products = getCategoryProducts('sugarless');

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
            
            <div className="inline-flex items-center gap-2 bg-green-100 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-green-800 mb-6">
              <Heart className="h-4 w-4" />
              Health Conscious
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Guilt Free Bites
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Indulge guilt-free with our collection. Made with natural sweeteners 
              and wholesome ingredients, these treats prove that healthy can be delicious. 
              Perfect for diabetics and health-conscious dessert lovers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Diabetic Friendly</h3>
              <p className="text-sm text-muted-foreground">Safe for diabetics with natural sweeteners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Same Great Taste</h3>
              <p className="text-sm text-muted-foreground">No compromise on flavor or texture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Natural Ingredients</h3>
              <p className="text-sm text-muted-foreground">Made with stevia and monk fruit</p>
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
                categoryType="sugarless"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SugarlessBites;