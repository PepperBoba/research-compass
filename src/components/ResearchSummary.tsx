import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, Users } from "lucide-react";

interface ResearchSummaryProps {
  professorName: string;
}

export const ResearchSummary = ({ professorName }: ResearchSummaryProps) => {
  // Mock data - will be replaced with real API data
  const summary = {
    totalPublications: 127,
    recentPublications: 18,
    mainAreas: [
      "Cardiovascular Imaging",
      "Machine Learning in Cardiology",
      "Clinical Trials",
    ],
    recentInterests: [
      "AI-powered Cardiac MRI Analysis",
      "Predictive Models for Heart Failure",
      "Multimodal Imaging Integration",
    ],
    collaborators: 45,
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 border-l-4 border-l-primary bg-card hover:shadow-soft transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-accent">
              <BookOpen className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Publications</p>
              <p className="text-3xl font-bold text-foreground">{summary.totalPublications}</p>
              <p className="text-xs text-primary">{summary.recentPublications} in last 2 years</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-secondary bg-card hover:shadow-soft transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-accent">
              <TrendingUp className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Research Areas</p>
              <p className="text-3xl font-bold text-foreground">{summary.mainAreas.length}</p>
              <p className="text-xs text-secondary">Primary focus areas</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-primary bg-card hover:shadow-soft transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-accent">
              <Users className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Collaborators</p>
              <p className="text-3xl font-bold text-foreground">{summary.collaborators}</p>
              <p className="text-xs text-primary">Active co-authors</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Research Areas */}
      <Card className="p-6 shadow-soft">
        <h2 className="text-xl font-bold text-foreground mb-4">Main Research Areas</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {summary.mainAreas.map((area, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              {area}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Recent Interests (2023-2025)
        </h3>
        <div className="flex flex-wrap gap-2">
          {summary.recentInterests.map((interest, index) => (
            <Badge
              key={index}
              variant="default"
              className="px-4 py-2 text-sm bg-gradient-primary text-primary-foreground shadow-sm hover:shadow-md transition-all"
            >
              {interest}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};
