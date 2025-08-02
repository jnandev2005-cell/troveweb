import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { getCategoryProducts } from "@/data/products";

const Index = () => {
  const specialProducts = getCategoryProducts('special');
  const sugarlessProducts = getCategoryProducts('sugarless');
  const kidsProducts = getCategoryProducts('kids');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
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
