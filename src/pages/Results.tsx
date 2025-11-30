import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { ResearchSummary } from "@/components/ResearchSummary";
import { PublicationsList } from "@/components/PublicationsList";
import { TopicsTimeline } from "@/components/TopicsTimeline";

const Results = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const professorName = searchParams.get("query") || "Unknown Professor";

  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                New Search
              </Button>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-xl font-bold text-foreground">{professorName}</h1>
                <p className="text-sm text-muted-foreground">Research Profile Analysis</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Research Summary */}
        <ResearchSummary professorName={professorName} />

        {/* Topics Timeline */}
        <TopicsTimeline />

        {/* Key Publications */}
        <PublicationsList />
      </main>
    </div>
  );
};

export default Results;
