import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { getCategoryProducts, getProductsByCategory, categoryDisplayNames } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cake, Cookie, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const specialProducts = getCategoryProducts('special');
  const sugarlessProducts = getCategoryProducts('sugarless');
  const kidsProducts = getCategoryProducts('kids');

  // Get products by food category for the new sections
  const cupcakes = getProductsByCategory('cupcakes').slice(0, 4);
  const pastries = getProductsByCategory('pastries').slice(0, 4);
  const cookies = getProductsByCategory('cookies').slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Product Categories by Type */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Menu
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our carefully curated selection of handcrafted desserts, 
              organized by category to help you find exactly what you're craving.
            </p>
          </div>

          {/* Cupcakes Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                  <Cake className="h-8 w-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-foreground">{categoryDisplayNames.cupcakes}</h3>
                  <p className="text-muted-foreground mt-1">Individual treats perfect for any occasion</p>
                </div>
              </div>
              <Button variant="outline" size="lg" asChild className="hidden md:flex">
                <Link to="/special-bites">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cupcakes.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard
                    {...product}
                    price={product.basePrice}
                    categoryType="special"
                    dietaryOptions={product.dietaryOptions}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pastries Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <ChefHat className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-foreground">{categoryDisplayNames.pastries}</h3>
                  <p className="text-muted-foreground mt-1">Elegant cakes for celebrations and special moments</p>
                </div>
              </div>
              <Button variant="outline" size="lg" asChild className="hidden md:flex">
                <Link to="/special-bites">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pastries.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard
                    {...product}
                    price={product.basePrice}
                    categoryType="special"
                    dietaryOptions={product.dietaryOptions}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cookies Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Cookie className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-foreground">{categoryDisplayNames.cookies}</h3>
                  <p className="text-muted-foreground mt-1">Perfect companions for tea time and snacking</p>
                </div>
              </div>
              <Button variant="outline" size="lg" asChild className="hidden md:flex">
                <Link to="/special-bites">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cookies.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard
                    {...product}
                    price={product.basePrice}
                    categoryType="special"
                    dietaryOptions={product.dietaryOptions}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Bites Section */}
      <CategorySection
        title="Special Bites"
        description="Our signature collection of premium handcrafted desserts made with the finest ingredients. Each creation is a masterpiece designed to make your special moments truly unforgettable."
        products={specialProducts}
        categoryType="special"
        linkTo="/special-bites"
      />
      
      {/* Guilt Free Bites Section */}
      <CategorySection
        title="Guilt Free Bites"
        description="Indulge without compromise with our health-conscious collection made with natural sweeteners and wholesome ingredients. Perfect for diabetics, fitness enthusiasts, and anyone who values their well-being."
        products={sugarlessProducts}
        categoryType="sugarless"
        linkTo="/sugarless-bites"
      />
      
      {/* Kids Edition Section */}
      <CategorySection
        title="Kids Edition"
        description="Magical treats designed especially for little ones with playful designs, kid-friendly flavors, and pocket-friendly prices. Every bite brings joy and creates sweet childhood memories."
        products={kidsProducts}
        categoryType="kids"
        linkTo="/kids-edition"
      />
      
      <Footer />
    </div>
  );
};

export default Index;