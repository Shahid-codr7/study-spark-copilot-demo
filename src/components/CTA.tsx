import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Your Learning?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already learning smarter, not harder, 
              with StudySpark Copilot.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="hero" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="soft" size="hero">
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="group hover:shadow-soft transition-all animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-soft transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Questions Answered</div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-soft transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="bg-gradient-hero border-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl italic text-foreground mb-4">
                "StudySpark Copilot completely changed how I study. I went from struggling with 
                complex topics to actually enjoying learning. My grades improved by a full letter grade!"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">SM</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Sarah Martinez</div>
                  <div className="text-sm text-muted-foreground">Computer Science Student, MIT</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;