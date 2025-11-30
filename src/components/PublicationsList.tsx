import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

export const PublicationsList = () => {
  // Mock data - key publications
  const publications = [
    {
      title: "Deep Learning-Based Automated Cardiac MRI Analysis for Risk Stratification in Heart Failure Patients",
      journal: "Journal of the American College of Cardiology",
      year: 2024,
      citations: 45,
      type: "Original Research",
      impact: "High Impact",
      abstract: "This study demonstrates the application of deep learning models for automated cardiac MRI analysis...",
    },
    {
      title: "Multimodal Imaging Integration Using Machine Learning for Enhanced Cardiovascular Disease Prediction",
      journal: "Circulation",
      year: 2023,
      citations: 78,
      type: "Clinical Trial",
      impact: "High Impact",
      abstract: "We developed a novel multimodal imaging integration approach combining CT, MRI, and PET data...",
    },
    {
      title: "Predictive Models for Heart Failure Readmission: A Multi-Center Validation Study",
      journal: "European Heart Journal",
      year: 2023,
      citations: 62,
      type: "Multicenter Study",
      impact: "High Impact",
      abstract: "This multicenter study validates predictive models for heart failure readmission across diverse populations...",
    },
    {
      title: "AI-Powered Cardiac Function Assessment: Validation Against Expert Cardiologists",
      journal: "JAMA Cardiology",
      year: 2022,
      citations: 134,
      type: "Validation Study",
      impact: "Very High Impact",
      abstract: "We compared AI-powered cardiac function assessment against expert cardiologist evaluations...",
    },
  ];

  return (
    <Card className="p-6 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Key Publications</h2>
        <Button variant="outline" size="sm">
          View All ({publications.length * 4})
        </Button>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card
            key={index}
            className="p-5 border-l-4 border-l-primary hover:shadow-medium transition-all duration-300 bg-card"
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground leading-tight mb-2 hover:text-primary transition-colors cursor-pointer">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                    <span>•</span>
                    <span>{pub.citations} citations</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-shrink-0"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  {pub.type}
                </Badge>
                <Badge variant="default" className="bg-gradient-primary text-primary-foreground">
                  {pub.impact}
                </Badge>
              </div>

              {/* Abstract */}
              <p className="text-sm text-muted-foreground line-clamp-2">
                {pub.abstract}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <FileText className="h-3 w-3" />
                  Read Full Text
                </Button>
                <Button variant="ghost" size="sm">
                  View Citations
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};
