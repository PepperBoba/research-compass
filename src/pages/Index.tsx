import { SearchHero } from "@/components/SearchHero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
              <span className="text-xl font-bold text-foreground">ResearchLens</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <SearchHero />

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Powered by PubMed and Google Scholar • Built for Medical Students & Researchers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
