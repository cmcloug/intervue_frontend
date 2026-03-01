import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function CategoryCard({ icon: Icon, title, description }: CategoryCardProps) {
  return (
    <button className="group flex flex-col items-center p-8 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300">
      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="size-8 text-primary" />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">
        {description}
      </p>
    </button>
  );
}
