import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  BookOpen, 
  Calendar, 
  Play,
  Send,
  Bot,
  User,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";

const Demo = () => {
  const [activeChat, setActiveChat] = useState(0);
  
  const chatMessages = [
    {
      type: "user",
      content: "Can you explain photosynthesis in simple terms?",
      timestamp: "2:34 PM"
    },
    {
      type: "ai",
      content: "Absolutely! Think of photosynthesis as nature's way of cooking. Plants use sunlight as energy, carbon dioxide from air as an ingredient, and water from their roots to 'cook up' glucose (sugar) for food. The amazing part? They release oxygen as a bonus - which is exactly what we need to breathe!",
      timestamp: "2:34 PM"
    },
    {
      type: "user", 
      content: "What's the chemical equation?",
      timestamp: "2:35 PM"
    },
    {
      type: "ai",
      content: "The equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nBreaking it down:\n• 6 molecules of carbon dioxide\n• 6 molecules of water  \n• Plus sunlight energy\n• Produces 1 glucose molecule + 6 oxygen molecules\n\nWould you like me to create a visual diagram to help you remember this?",
      timestamp: "2:35 PM"
    }
  ];

  const studyPlan = [
    { subject: "Biology", topic: "Photosynthesis", time: "30 min", status: "completed", progress: 100 },
    { subject: "Math", topic: "Quadratic Equations", time: "45 min", status: "in-progress", progress: 60 },
    { subject: "History", topic: "World War II", time: "25 min", status: "scheduled", progress: 0 },
    { subject: "Chemistry", topic: "Ionic Bonding", time: "35 min", status: "scheduled", progress: 0 }
  ];

  const explorations = [
    {
      title: "Climate Change & Ecosystems",
      connections: ["Biology", "Geography", "Chemistry"],
      confidence: 95
    },
    {
      title: "Mathematical Patterns in Nature",
      connections: ["Math", "Biology", "Physics"],
      confidence: 88
    },
    {
      title: "Historical Impact of Scientific Discoveries",
      connections: ["History", "Science", "Philosophy"],
      confidence: 92
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            See Copilot
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how our AI assistant transforms learning through intelligent conversations, 
            smart organization, and knowledge exploration.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Smart Tutoring
              </TabsTrigger>
              <TabsTrigger value="organize" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Organization
              </TabsTrigger>
              <TabsTrigger value="explore" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Exploration
              </TabsTrigger>
            </TabsList>

            {/* Chat Demo */}
            <TabsContent value="chat">
              <Card className="overflow-hidden animate-fade-in">
                <CardHeader className="bg-gradient-primary text-primary-foreground">
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    AI Learning Assistant
                    <Badge variant="secondary" className="ml-auto bg-primary-foreground/20 text-primary-foreground">
                      Online
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96 overflow-y-auto p-6 space-y-4">
                    {chatMessages.map((message, index) => (
                      <div 
                        key={index}
                        className={`flex gap-3 animate-fade-in ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        style={{ animationDelay: `${index * 0.3}s` }}
                      >
                        {message.type === 'ai' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </div>
                        )}
                        <div 
                          className={`max-w-lg p-3 rounded-xl ${
                            message.type === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}
                        >
                          <p className="whitespace-pre-line">{message.content}</p>
                          <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                            {message.timestamp}
                          </p>
                        </div>
                        {message.type === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-secondary-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="border-t p-4 bg-background/50">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Ask anything about your studies..." 
                        className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      />
                      <Button size="icon">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Organization Demo */}
            <TabsContent value="organize">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Today's Study Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studyPlan.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl border border-muted animate-fade-in hover:shadow-soft transition-all"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.status === 'completed' 
                            ? 'bg-green-100 text-green-600' 
                            : item.status === 'in-progress'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.status === 'completed' ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : item.status === 'in-progress' ? (
                            <Play className="w-5 h-5" />
                          ) : (
                            <Clock className="w-5 h-5" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{item.topic}</h4>
                            <Badge variant="outline" className="text-xs">
                              {item.subject}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{item.time}</span>
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-primary transition-all duration-1000"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium">{item.progress}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Exploration Demo */}
            <TabsContent value="explore">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Knowledge Connections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {explorations.map((item, index) => (
                      <div 
                        key={index}
                        className="p-6 rounded-xl border border-muted hover:shadow-soft transition-all animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-secondary fill-current" />
                            <span className="text-sm font-medium">{item.confidence}%</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.connections.map((connection, idx) => (
                            <Badge 
                              key={idx} 
                              variant="soft" 
                              className="bg-gradient-to-r from-primary/10 to-secondary/10"
                            >
                              {connection}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                          Explore This Path →
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Demo;