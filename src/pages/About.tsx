import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Award, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Trove
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              For the love of desserts - that's what drives us every day. 
              We're passionate about creating moments of joy through our handcrafted sweets.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Sweet Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded with a simple belief that every occasion deserves something sweet, 
                  Trove began as a small kitchen experiment and grew into a beloved destination 
                  for dessert lovers across the city.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our journey started when our founder, a passionate baker, decided to share 
                  her family recipes with the world. What began with cupcakes for friends 
                  has evolved into a treasure trove of handcrafted desserts.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to serve premium desserts that bring smiles to faces 
                  and sweetness to life's special moments.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="leading-relaxed">
                    To create exceptional desserts that celebrate life's sweet moments, 
                    using only the finest ingredients and time-honored techniques, 
                    while making our treats accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Makes Us Special</h2>
              <p className="text-muted-foreground">The values that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Made with Love</h3>
                <p className="text-sm text-muted-foreground">
                  Every dessert is crafted with passion and attention to detail
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  We use only the finest ingredients and proven recipes
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction and happiness is our top priority
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Always Fresh</h3>
                <p className="text-sm text-muted-foreground">
                  Baked fresh daily to ensure the best taste and quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Our Desserts?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of happy customers who have made Trove their go-to destination for sweet treats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/special-bites">Browse Our Menu</Link>
              </Button>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;