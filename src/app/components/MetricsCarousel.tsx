import { Users, Briefcase, Star, TrendingUp, Award, Target } from 'lucide-react';

const metrics = [
  { icon: Users, value: "10,000+", label: "Trusted Users" },
  { icon: Briefcase, value: "30,000+", label: "Offers Secured" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
  { icon: Award, value: "500+", label: "Companies Hiring" },
  { icon: Target, value: "1M+", label: "Practice Sessions" },
];

export function MetricsCarousel() {
  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {metrics.map((metric, index) => (
            <MetricCard key={`first-${index}`} {...metric} />
          ))}
          {/* Duplicate set for seamless loop */}
          {metrics.map((metric, index) => (
            <MetricCard key={`second-${index}`} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="flex-shrink-0 px-8 flex items-center gap-4 min-w-[300px]">
      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
        <Icon className="size-6 text-primary" />
      </div>
      <div>
        <div className="text-2xl">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
