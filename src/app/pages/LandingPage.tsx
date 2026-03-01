import { CategoryCard } from "../components/CategoryCard";
import { MetricsCarousel } from "../components/MetricsCarousel";
import { FeatureShowcase } from "../components/FeatureShowcase";
import { FeedbackPreview } from "../components/FeedbackPreview";
import { Code, Database, Palette, Briefcase, TrendingUp, Users, Megaphone, Shield, CheckCircle2, Brain, Target } from 'lucide-react';
import { useNavigate } from 'react-router';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl mb-6">
              Master Your Interview Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              Practice with AI-powered mock interviews. Get real-time feedback and ace your next interview with confidence.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
              <button 
                onClick={() => navigate('/explore')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Start Practicing
              </button>
              <button className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <CheckCircle2 className="size-6 text-primary" />
                </div>
                <h4 className="mb-1">Instant Feedback</h4>
                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  Get detailed reports immediately after each interview
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Brain className="size-6 text-primary" />
                </div>
                <h4 className="mb-1">AI-Powered</h4>
                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  Advanced AI evaluates both technical and soft skills
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Target className="size-6 text-primary" />
                </div>
                <h4 className="mb-1">Role-Specific</h4>
                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  Tailored questions for your target position
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Feedback Preview */}
          <div className="flex justify-center lg:justify-end">
            <FeedbackPreview />
          </div>
        </div>
      </div>

      {/* Metrics Carousel */}
      <MetricsCarousel />

      {/* Categories Section */}
      <section id="categories" className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Choose Your Interview Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select from a variety of roles and start practicing interviews tailored to your career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              icon={Code}
              title="Software Engineering"
              description="Practice coding interviews, system design, and technical problem-solving"
            />
            <CategoryCard
              icon={Database}
              title="Data Science"
              description="Master data analysis, ML algorithms, and statistics questions"
            />
            <CategoryCard
              icon={Palette}
              title="UI/UX Designer"
              description="Prepare for design critiques, portfolio reviews, and case studies"
            />
            <CategoryCard
              icon={Briefcase}
              title="Product Manager"
              description="Practice product strategy, prioritization, and stakeholder management"
            />
            <CategoryCard
              icon={TrendingUp}
              title="Business Analyst"
              description="Excel at requirements gathering, data analysis, and process improvement"
            />
            <CategoryCard
              icon={Users}
              title="Project Manager"
              description="Prepare for agile methodology, leadership, and project planning questions"
            />
            <CategoryCard
              icon={Megaphone}
              title="Marketing"
              description="Master campaign strategy, analytics, and brand management discussions"
            />
            <CategoryCard
              icon={Shield}
              title="Cybersecurity"
              description="Practice security protocols, threat analysis, and risk management"
            />
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <FeatureShowcase />
    </main>
  );
}