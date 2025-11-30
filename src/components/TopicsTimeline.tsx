import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TopicsTimeline = () => {
  // Mock data - timeline showing topic evolution
  const timelineData = [
    {
      year: 2023,
      topics: [
        { name: "AI in Cardiac Imaging", count: 12, trend: "up" },
        { name: "Machine Learning Models", count: 8, trend: "up" },
        { name: "Clinical Trials", count: 6, trend: "stable" },
      ],
    },
    {
      year: 2022,
      topics: [
        { name: "Cardiovascular Imaging", count: 15, trend: "stable" },
        { name: "Deep Learning", count: 7, trend: "up" },
        { name: "Risk Prediction", count: 5, trend: "stable" },
      ],
    },
    {
      year: 2021,
      topics: [
        { name: "Cardiac MRI", count: 18, trend: "down" },
        { name: "Image Analysis", count: 10, trend: "stable" },
        { name: "Clinical Outcomes", count: 8, trend: "stable" },
      ],
    },
  ];

  return (
    <Card className="p-6 shadow-soft">
      <h2 className="text-xl font-bold text-foreground mb-6">Research Evolution Timeline</h2>
      
      <div className="space-y-8">
        {timelineData.map((yearData, yearIndex) => (
          <div key={yearData.year} className="relative">
            {/* Timeline connector */}
            {yearIndex !== timelineData.length - 1 && (
              <div className="absolute left-[47px] top-12 bottom-0 w-px bg-border" />
            )}
            
            <div className="flex gap-6">
              {/* Year marker */}
              <div className="flex-shrink-0 w-24">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg shadow-medium">
                  {yearData.year}
                </div>
              </div>

              {/* Topics for the year */}
              <div className="flex-1 pt-2">
                <div className="flex flex-wrap gap-3">
                  {yearData.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="group relative"
                      style={{
                        animationDelay: `${topicIndex * 0.1}s`,
                      }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm border-2 hover:shadow-soft transition-all duration-300 hover:scale-105 cursor-pointer bg-card"
                      >
                        <span className="font-medium">{topic.name}</span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          ({topic.count})
                        </span>
                        {topic.trend === "up" && (
                          <span className="ml-1 text-primary">↗</span>
                        )}
                        {topic.trend === "down" && (
                          <span className="ml-1 text-destructive">↘</span>
                        )}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary">↗</span>
            <span>Increasing focus</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-destructive">↘</span>
            <span>Decreasing focus</span>
          </div>
          <div className="flex items-center gap-2">
            <span>(#)</span>
            <span>Number of publications</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
