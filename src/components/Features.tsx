import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  BrainCircuit, 
  CalendarDays, 
  MessageSquare, 
  Search, 
  TrendingUp,
  Lightbulb,
  Users,
  Target
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "Intelligent Tutoring",
      description: "Get personalized explanations and step-by-step guidance tailored to your learning style.",
      color: "primary"
    },
    {
      icon: CalendarDays,
      title: "Smart Organization",
      description: "AI-powered study planning that adapts to your schedule and optimizes your learning path.",
      color: "secondary"
    },
    {
      icon: Search,
      title: "Knowledge Explorer",
      description: "Discover connections between topics and explore related concepts with intelligent recommendations.",
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Interactive Q&A",
      description: "Ask questions in natural language and get instant, contextual answers with examples.",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and personalized insights.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with study groups and share knowledge with AI-facilitated discussions.",
      color: "secondary"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Faster Learning",
      stat: "3x",
      description: "Students learn concepts 3x faster with AI assistance"
    },
    {
      icon: Lightbulb,
      title: "Better Retention",
      stat: "85%",
      description: "Improved long-term knowledge retention rate"
    },
    {
      icon: BookOpen,
      title: "Study Efficiency",
      stat: "60%",
      description: "Reduction in study time while maintaining quality"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered features transform the way you study, organize, and explore knowledge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-muted/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Proven Results
            </h3>
            <p className="text-lg text-muted-foreground">
              Join thousands of students who have transformed their learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
                <div className="text-lg font-semibold mb-2">{benefit.title}</div>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="hero">
              Experience the Difference
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;