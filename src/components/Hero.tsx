import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-desserts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/10 to-primary/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious handcrafted desserts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-8 py-4 rounded-full text-base font-semibold text-primary border border-primary/20 hover:shadow-lg transition-all duration-300">
              <Star className="h-4 w-4 text-primary fill-primary" />
              Premium Dessert Experience
            </div>

            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-8xl md:text-9xl font-bold leading-none tracking-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Trove</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-foreground/80 leading-relaxed">
                <span className="font-light">Sweet Treasures for</span><br />
                <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold text-4xl md:text-5xl">
                  Every Moment
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-primary/80 leading-relaxed max-w-2xl font-medium">
              Discover our exquisite collection of handcrafted desserts, 
              guilt-free delights, and magical treats specially created for little 
              ones. Every bite tells a story of passion and perfection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button variant="hero" size="xl" className="group text-base px-8 py-4">
                Explore Our Menu
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 border-t border-border/30 max-w-2xl">
              <div className="text-center group cursor-pointer">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm text-muted-foreground font-semibold">Delicious Varieties</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-muted-foreground font-semibold">Fresh Daily</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">5★</div>
                <div className="text-sm text-muted-foreground font-semibold">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Floating Quality Badges */}
            <div className="absolute -top-20 right-12 z-10">
              <div className="bg-background/95 backdrop-blur-sm px-10 py-8 rounded-3xl shadow-elegant border border-primary/10 animate-fade-in hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <span className="text-lg font-bold text-foreground">Premium Quality</span>
                    <p className="text-sm text-muted-foreground mt-1">Fresh Daily Baking</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-20 right-16 z-10">
              <div className="bg-background/95 backdrop-blur-sm px-10 py-8 rounded-3xl shadow-elegant border border-primary/10 animate-fade-in hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <div>
                    <span className="text-lg font-bold text-foreground">Made with Love</span>
                    <p className="text-sm text-muted-foreground mt-1">Handcrafted Perfection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-12 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Mobile Visual Enhancement */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 lg:hidden">
        <div className="flex gap-6">
          <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg">
            <span className="text-sm font-semibold text-primary">✨ Premium Quality</span>
          </div>
          <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg">
            <span className="text-sm font-semibold text-primary">❤️ Made with Love</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;