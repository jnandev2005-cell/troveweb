// Product data organized by categories with pricing adjustments
import vanillaCupcake from "@/assets/vanilla-cupcake.jpg";
import chocolateCupcake from "@/assets/chocolate-cupcake.jpg";
import redVelvetCupcake from "@/assets/red-velvet-cupcake.jpg";
import strawberryCupcake from "@/assets/strawberry-cupcake.jpg";
import chocolateChipCookies from "@/assets/chocolate-chip-cookies.jpg";
import chocolateTruffleCake from "@/assets/chocolate-truffle-cake.jpg";
import vanillaCake from "@/assets/vanilla-cake.jpg";
import chocolateBrownies from "@/assets/chocolate-brownies.jpg";

export interface Product {
  id: string;
  name: string;
  basePrice: number;
  image: string;
  description: string;
  category: 'cupcakes' | 'pastries' | 'cookies';
}

// Base products from the menu
export const baseProducts: Product[] = [
  // Cupcakes
  {
    id: 'vanilla-cupcake',
    name: 'Vanilla Cupcake',
    basePrice: 50,
    image: vanillaCupcake,
    description: 'Classic vanilla cupcake with smooth vanilla cream frosting',
    category: 'cupcakes'
  },
  {
    id: 'chocolate-cupcake',
    name: 'Chocolate Cupcake',
    basePrice: 60,
    image: chocolateCupcake,
    description: 'Rich chocolate cupcake with decadent chocolate frosting',
    category: 'cupcakes'
  },
  {
    id: 'double-chochip-muffin',
    name: 'Double Chocolate Chip Muffin',
    basePrice: 40,
    image: chocolateCupcake,
    description: 'Moist muffin loaded with double chocolate chips',
    category: 'cupcakes'
  },
  {
    id: 'red-velvet-cupcake',
    name: 'Red Velvet Cupcake',
    basePrice: 60,
    image: redVelvetCupcake,
    description: 'Velvety red cupcake with cream cheese frosting',
    category: 'cupcakes'
  },
  {
    id: 'strawberry-cupcake',
    name: 'Strawberry Cupcake',
    basePrice: 60,
    image: strawberryCupcake,
    description: 'Fresh strawberry cupcake with strawberry buttercream',
    category: 'cupcakes'
  },
  
  // Pastries/Cakes
  {
    id: 'mawa-cake',
    name: 'Mawa Cake',
    basePrice: 600,
    image: vanillaCake,
    description: 'Traditional Indian milk cake with rich flavors',
    category: 'pastries'
  },
  {
    id: 'vanilla-cake',
    name: 'Vanilla Cake',
    basePrice: 500,
    image: vanillaCake,
    description: 'Classic vanilla sponge cake with vanilla frosting',
    category: 'pastries'
  },
  {
    id: 'chocolate-truffle-cake',
    name: 'Chocolate Truffle Cake',
    basePrice: 800,
    image: chocolateTruffleCake,
    description: 'Luxurious chocolate cake with truffle ganache',
    category: 'pastries'
  },
  {
    id: 'butterscotch-cake',
    name: 'Butterscotch Cake',
    basePrice: 600,
    image: vanillaCake,
    description: 'Buttery butterscotch flavored layer cake',
    category: 'pastries'
  },
  {
    id: 'rasmalai-cake',
    name: 'Rasmalai Cake',
    basePrice: 800,
    image: vanillaCake,
    description: 'Fusion cake inspired by traditional rasmalai',
    category: 'pastries'
  },
  {
    id: 'black-forest-cake',
    name: 'Black Forest Cake',
    basePrice: 600,
    image: chocolateTruffleCake,
    description: 'Classic German chocolate cake with cherries',
    category: 'pastries'
  },
  {
    id: 'strawberry-cake',
    name: 'Strawberry Cake',
    basePrice: 700,
    image: strawberryCupcake,
    description: 'Fresh strawberry layer cake with strawberry cream',
    category: 'pastries'
  },
  {
    id: 'irish-coffee-cake',
    name: 'Irish Coffee Cake',
    basePrice: 600,
    image: chocolateTruffleCake,
    description: 'Coffee-infused cake with Irish cream flavoring',
    category: 'pastries'
  },

  // Cookies
  {
    id: 'chocochip-cookies',
    name: 'Chocolate Chip Cookies',
    basePrice: 60,
    image: chocolateChipCookies,
    description: 'Classic cookies loaded with chocolate chips',
    category: 'cookies'
  },
  {
    id: 'double-chochip-cookies',
    name: 'Double Chocolate Chip Cookies',
    basePrice: 70,
    image: chocolateChipCookies,
    description: 'Double the chocolate, double the delight',
    category: 'cookies'
  },
  {
    id: 'coconut-cookies',
    name: 'Coconut Cookies',
    basePrice: 30,
    image: chocolateChipCookies,
    description: 'Crispy cookies with coconut flakes',
    category: 'cookies'
  },
  {
    id: 'salted-tea-cookie',
    name: 'Salted Tea Cookie',
    basePrice: 30,
    image: chocolateChipCookies,
    description: 'Perfect tea-time companion with a hint of salt',
    category: 'cookies'
  },
  {
    id: 'banana-cake',
    name: 'Banana Cake',
    basePrice: 60,
    image: vanillaCake,
    description: 'Moist banana flavored cake',
    category: 'cookies'
  },
  {
    id: 'chocolate-brownies',
    name: 'Chocolate Brownies',
    basePrice: 80,
    image: chocolateBrownies,
    description: 'Fudgy chocolate brownies with nuts',
    category: 'cookies'
  },
  {
    id: 'red-velvet-brownies',
    name: 'Red Velvet Cream Cheese Brownies',
    basePrice: 80,
    image: chocolateBrownies,
    description: 'Red velvet brownies with cream cheese swirl',
    category: 'cookies'
  }
];

// Function to calculate prices for different categories
export const calculatePrice = (basePrice: number, category: 'special' | 'sugarless' | 'kids') => {
  let price;
  switch (category) {
    case 'sugarless':
      price = Math.round(basePrice * 1.2); // +20%
      break;
    case 'kids':
      price = Math.round(basePrice * 0.7); // -30%
      break;
    default:
      price = basePrice;
  }
  // Round to nearest 10
  return Math.round(price / 10) * 10;
};

export const getCategoryProducts = (category: 'special' | 'sugarless' | 'kids') => {
  return baseProducts.map(product => ({
    ...product,
    price: calculatePrice(product.basePrice, category),
    categoryType: category
  }));
};