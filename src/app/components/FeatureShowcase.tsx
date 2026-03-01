import { Brain, Code2, ArrowRight } from 'lucide-react';

export function FeatureShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Experience Real Interview Conditions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered interviews mirror real-world hiring processes with comprehensive evaluation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Personality Screening */}
          <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/20 mb-6">
              <Brain className="size-7 text-primary" />
            </div>
            <h3 className="text-2xl mb-4">Personality Screening</h3>
            <p className="text-muted-foreground mb-6">
              Prepare for behavioral questions that assess your soft skills, cultural fit, and leadership potential. Practice common scenarios like:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Tell me about a time you faced a challenge</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <span>How do you handle conflict in a team?</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Describe your leadership style</span>
              </li>
            </ul>
          </div>

          {/* Technical Screening */}
          <div className="p-8 bg-gradient-to-br from-accent to-muted/50 rounded-2xl border border-border">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/20 mb-6">
              <Code2 className="size-7 text-primary" />
            </div>
            <h3 className="text-2xl mb-4">Technical Screening</h3>
            <p className="text-muted-foreground mb-6">
              Master role-specific technical questions tailored to your field. Get evaluated on your problem-solving approach and expertise:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Coding challenges and algorithm questions</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <span>System design and architecture discussions</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Domain-specific knowledge verification</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group px-10 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all inline-flex items-center gap-2">
            Start Mock Interview
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            Get personalized feedback on both personality and technical performance
          </p>
        </div>
      </div>
    </section>
  );
}
