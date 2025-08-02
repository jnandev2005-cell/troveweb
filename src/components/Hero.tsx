import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-desserts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious handcrafted desserts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-primary border border-primary/20 hover-scale">
              <Star className="h-4 w-4 text-primary fill-primary" />
              Premium Dessert Experience
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Trove</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-foreground/80 leading-relaxed">
                <span className="font-light">Sweet Treasures for</span><br />
                <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold text-3xl md:text-4xl">
                  Every Moment
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-primary/80 leading-relaxed max-w-xl font-medium">
              Discover our exquisite collection of handcrafted desserts, 
              guilt-free delights, and magical treats specially created for little 
              ones. Every bite tells a story of passion and perfection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" className="group text-base px-8 py-4">
                Explore Our Menu
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 gap-12 pt-12 border-t border-border/30 max-w-md">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Delicious Varieties</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Floating Quality Badges */}
            <div className="absolute -top-16 right-8 z-10">
              <div className="bg-background/95 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-elegant border border-primary/10 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <span className="text-base font-semibold text-foreground">Premium Quality</span>
                    <p className="text-sm text-muted-foreground">Fresh Daily Baking</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-16 right-12 z-10">
              <div className="bg-background/95 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-elegant border border-primary/10 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                  <div>
                    <span className="text-base font-semibold text-foreground">Made with Love</span>
                    <p className="text-sm text-muted-foreground">Handcrafted Perfection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-16 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-16 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Mobile Visual Enhancement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
        <div className="flex gap-4">
          <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
            <span className="text-xs font-medium text-primary">✨ Premium Quality</span>
          </div>
          <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
            <span className="text-xs font-medium text-primary">❤️ Made with Love</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;