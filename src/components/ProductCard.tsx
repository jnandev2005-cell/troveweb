import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart, Leaf, Egg } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  categoryType: 'special' | 'sugarless' | 'kids';
  basePrice?: number;
  dietaryOptions?: {
    containsEgg: boolean;
    vegan: boolean;
    glutenFree?: boolean;
  };
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  description, 
  categoryType, 
  basePrice,
  dietaryOptions
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
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 bg-card rounded-xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Heart Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full shadow-lg"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
        </Button>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          {getCategoryBadge()}
        </div>

        {/* Dietary Options */}
        {dietaryOptions && (
          <div className="absolute bottom-4 left-4 flex gap-2">
            {dietaryOptions.vegan && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs px-2 py-1">
                <Leaf className="h-3 w-3 mr-1" />
                Vegan
              </Badge>
            )}
            {dietaryOptions.containsEgg && (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1">
                <Egg className="h-3 w-3 mr-1" />
                Contains Egg
              </Badge>
            )}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl text-card-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">₹{price}</span>
              {basePrice && basePrice !== price && (
                <span className="text-sm text-muted-foreground line-through">₹{basePrice}</span>
              )}
            </div>
            
            <Button 
              variant="default" 
              size="sm"
              className="group/btn hover:shadow-lg transition-all duration-300"
              onClick={() => console.log(`Adding ${name} to cart`)}
            >
              <ShoppingBag className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;