import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategorySectionProps {
  title: string;
  description: string;
  products: Array<{
    id: string;
    name: string;
    price: number;
    basePrice: number;
    image: string;
    description: string;
    categoryType: 'special' | 'sugarless' | 'kids';
    dietaryOptions?: {
      containsEgg: boolean;
      vegan: boolean;
      glutenFree?: boolean;
    };
  }>;
  categoryType: 'special' | 'sugarless' | 'kids';
  linkTo: string;
}

const CategorySection = ({ 
  title, 
  description, 
  products, 
  categoryType, 
  linkTo 
}: CategorySectionProps) => {
  // Show only first 4 products for homepage preview
  const displayProducts = products.slice(0, 4);

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {displayProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.15}s` }}>
              <ProductCard
                {...product}
                categoryType={categoryType}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="elegant" 
            size="xl"
            asChild
            className="group px-12 py-6 text-lg hover:shadow-2xl transition-all duration-500"
          >
            <Link to={linkTo}>
              View All {title}
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;