import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  categoryType: 'special' | 'sugarless' | 'kids';
  basePrice?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  description, 
  categoryType, 
  basePrice 
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const getCategoryBadge = () => {
    switch (categoryType) {
      case 'sugarless':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Guilt-Free</Badge>;
      case 'kids':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Kids Special</Badge>;
      default:
        return <Badge variant="secondary" className="bg-primary-light text-primary-dark">Premium</Badge>;
    }
  };

  const getDiscountPercentage = () => {
    if (!basePrice || basePrice === price) return null;
    const discount = Math.round(((basePrice - price) / basePrice) * 100);
    return discount > 0 ? discount : null;
  };

  const discount = getDiscountPercentage();

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-card">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Heart Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-all duration-300"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
        </Button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          {getCategoryBadge()}
        </div>

      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">₹{price}</span>
            </div>
            
            <Button 
              variant="default" 
              size="sm" 
              className="group/btn"
              onClick={() => console.log(`Adding ${name} to cart`)}
            >
              <ShoppingBag className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;