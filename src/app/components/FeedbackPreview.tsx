import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';

export function FeedbackPreview() {
  return (
    <div className="relative">
      {/* Main Feedback Card */}
      <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
          <div>
            <h3 className="text-2xl mb-1">Interview Performance Report</h3>
            <p className="text-sm text-muted-foreground">Software Engineering - Technical Round</p>
          </div>
          <div className="text-center">
            <div className="size-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-2">
              <span className="text-3xl text-green-600">A-</span>
            </div>
            <p className="text-xs text-muted-foreground">Overall Score</p>
          </div>
        </div>

        {/* Strengths Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="size-5 text-green-600" />
            <h4 className="text-lg">Strengths</h4>
          </div>
          <div className="space-y-3 ml-7">
            <div className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Excellent problem-solving approach with clear explanation of algorithmic complexity
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Strong communication skills when discussing trade-offs between different solutions
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Demonstrated solid understanding of data structures and their applications
              </p>
            </div>
          </div>
        </div>

        {/* Areas for Improvement Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="size-5 text-amber-600" />
            <h4 className="text-lg">Areas for Improvement</h4>
          </div>
          <div className="space-y-3 ml-7">
            <div className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Consider edge cases earlier in your problem-solving process
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Practice optimizing code for space complexity alongside time complexity
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
          <div className="text-center">
            <div className="text-2xl mb-1">8.5/10</div>
            <p className="text-xs text-muted-foreground">Technical Skills</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">9/10</div>
            <p className="text-xs text-muted-foreground">Communication</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">7.5/10</div>
            <p className="text-xs text-muted-foreground">Problem Solving</p>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-start gap-3">
            <TrendingUp className="size-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="mb-1">Recommendation</h4>
              <p className="text-sm text-muted-foreground">
                You're interview-ready! Focus on practicing more edge case scenarios and you'll be in excellent shape.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 size-24 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-4 -left-4 size-32 bg-accent/50 rounded-full blur-3xl -z-10" />
    </div>
  );
}
