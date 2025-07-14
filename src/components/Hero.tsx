import { Button } from "@/components/ui/button";
import { Brain, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-copilot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 rounded-full bg-gradient-primary opacity-20 blur-sm" />
      </div>
      <div className="absolute bottom-32 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 rounded-full bg-gradient-secondary opacity-30 blur-sm" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-8 h-8 text-primary/30" />
      </div>
      
      <div className="container px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-primary">StudySpark Copilot</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Your AI
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Learning </span>
              Companion
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your study experience with AI-powered assistance that helps you learn faster, 
              organize better, and explore knowledge like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="hero" className="group">
                Start Learning Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="soft" size="hero">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-muted">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI Learning Assistant Dashboard" 
                className="w-full rounded-2xl shadow-soft hover:shadow-primary transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 shadow-soft animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium">AI Active</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-soft animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-sm font-medium text-muted-foreground">Learning Progress</div>
              <div className="text-2xl font-bold text-primary">87%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;