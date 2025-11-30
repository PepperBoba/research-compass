import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SearchHero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Please enter a name",
        description: "Enter a professor's name to analyze their research.",
        variant: "destructive",
      });
      return;
    }

    navigate(`/results?query=${encodeURIComponent(query.trim())}`);
  };

  const exampleSearches = [
    "Jane Smith, Yale Cardiology",
    "John Doe, Stanford Neuroscience",
    "Sarah Johnson, MIT Computer Science",
  ];

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-accent opacity-50 -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 py-20 px-4">
        {/* Header */}
        <div className="space-y-4 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium shadow-soft">
            <Sparkles className="h-4 w-4" />
            Research Profile Analyzer
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Understand Research
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Before You Connect
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instantly analyze any professor's research areas, recent interests, and publication history 
            to prepare for clerkships, collaborations, or cold outreach.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="space-y-4 animate-in fade-in duration-700 delay-150">
          <div className="relative max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter professor name (e.g., Jane Smith, Yale Cardiology)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card shadow-medium border-border focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-gradient-primary hover:opacity-90 shadow-medium transition-all hover:scale-105"
              >
                Analyze
              </Button>
            </div>
          </div>

          {/* Example searches */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Try:</span>
            {exampleSearches.map((example, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setQuery(example)}
                className="text-sm text-primary hover:text-primary hover:bg-accent"
              >
                {example}
              </Button>
            ))}
          </div>
        </form>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 pt-12 animate-in fade-in duration-700 delay-300">
          {[
            {
              title: "Research Areas",
              description: "Identify main research focus and expertise domains",
            },
            {
              title: "Recent Interests",
              description: "Track evolving research directions over time",
            },
            {
              title: "Key Publications",
              description: "Discover influential papers and citations",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
