import { useState } from 'react';
import { 
  Code, 
  Database, 
  Palette, 
  Briefcase,
  Users,
  Zap,
  Clock,
  Target,
  Star,
  TrendingUp,
  MessageSquare,
  Brain,
  ChevronRight
} from 'lucide-react';

type ChallengeType = 'all' | 'full-interview' | 'behavioral' | 'coding';
type Difficulty = 'beginner' | 'intermediate' | 'advanced';
type Category = 'software-engineering' | 'data-science' | 'ui-ux' | 'product-management' | 'business-analyst' | 'all';

interface Challenge {
  id: string;
  title: string;
  type: 'full-interview' | 'behavioral' | 'coding';
  category: string;
  difficulty: Difficulty;
  duration: number; // in minutes
  icon: typeof Code;
  description: string;
  questions: number;
  completedBy: number;
  rating: number;
}

const challenges: Challenge[] = [
  // Software Engineering
  {
    id: '1',
    title: 'Full Stack Developer Interview',
    type: 'full-interview',
    category: 'software-engineering',
    difficulty: 'intermediate',
    duration: 60,
    icon: Code,
    description: 'Complete interview covering behavioral questions, system design, and coding challenges',
    questions: 15,
    completedBy: 1247,
    rating: 4.8
  },
  {
    id: '2',
    title: 'React Coding Challenge',
    type: 'coding',
    category: 'software-engineering',
    difficulty: 'intermediate',
    duration: 45,
    icon: Code,
    description: 'Build a responsive component with hooks, state management, and API integration',
    questions: 3,
    completedBy: 2156,
    rating: 4.7
  },
  {
    id: '3',
    title: 'Leadership & Teamwork Assessment',
    type: 'behavioral',
    category: 'software-engineering',
    difficulty: 'beginner',
    duration: 30,
    icon: Users,
    description: 'Behavioral questions focusing on team collaboration and conflict resolution',
    questions: 10,
    completedBy: 3421,
    rating: 4.6
  },
  {
    id: '4',
    title: 'Algorithm Mastery Challenge',
    type: 'coding',
    category: 'software-engineering',
    difficulty: 'advanced',
    duration: 90,
    icon: Brain,
    description: 'Advanced data structures and algorithms including graphs, dynamic programming, and trees',
    questions: 5,
    completedBy: 892,
    rating: 4.9
  },
  // Data Science
  {
    id: '5',
    title: 'Data Scientist Full Interview',
    type: 'full-interview',
    category: 'data-science',
    difficulty: 'advanced',
    duration: 75,
    icon: Database,
    description: 'ML algorithms, statistical analysis, and business case studies',
    questions: 12,
    completedBy: 856,
    rating: 4.8
  },
  {
    id: '6',
    title: 'SQL & Data Analysis',
    type: 'coding',
    category: 'data-science',
    difficulty: 'intermediate',
    duration: 45,
    icon: Database,
    description: 'Complex SQL queries, data manipulation, and optimization problems',
    questions: 8,
    completedBy: 1534,
    rating: 4.7
  },
  {
    id: '7',
    title: 'Machine Learning Case Study',
    type: 'coding',
    category: 'data-science',
    difficulty: 'advanced',
    duration: 60,
    icon: TrendingUp,
    description: 'Build and evaluate ML models for real-world business problems',
    questions: 4,
    completedBy: 678,
    rating: 4.9
  },
  // UI/UX Designer
  {
    id: '8',
    title: 'UX Designer Interview',
    type: 'full-interview',
    category: 'ui-ux',
    difficulty: 'intermediate',
    duration: 60,
    icon: Palette,
    description: 'Portfolio review, design thinking, and user research methodologies',
    questions: 14,
    completedBy: 1123,
    rating: 4.7
  },
  {
    id: '9',
    title: 'Design Thinking Workshop',
    type: 'behavioral',
    category: 'ui-ux',
    difficulty: 'beginner',
    duration: 40,
    icon: Brain,
    description: 'Problem-solving scenarios and user-centered design approaches',
    questions: 8,
    completedBy: 2341,
    rating: 4.8
  },
  // Product Management
  {
    id: '10',
    title: 'Product Manager Full Interview',
    type: 'full-interview',
    category: 'product-management',
    difficulty: 'advanced',
    duration: 75,
    icon: Briefcase,
    description: 'Product strategy, roadmap planning, and stakeholder management',
    questions: 16,
    completedBy: 945,
    rating: 4.9
  },
  {
    id: '11',
    title: 'Product Strategy Case Study',
    type: 'behavioral',
    category: 'product-management',
    difficulty: 'intermediate',
    duration: 50,
    icon: Target,
    description: 'Real-world product scenarios requiring strategic thinking',
    questions: 6,
    completedBy: 1567,
    rating: 4.8
  },
  {
    id: '12',
    title: 'Communication & Influence',
    type: 'behavioral',
    category: 'product-management',
    difficulty: 'intermediate',
    duration: 35,
    icon: MessageSquare,
    description: 'Stakeholder management and cross-functional collaboration scenarios',
    questions: 9,
    completedBy: 1892,
    rating: 4.6
  },
  // Business Analyst
  {
    id: '13',
    title: 'Business Analyst Interview',
    type: 'full-interview',
    category: 'business-analyst',
    difficulty: 'intermediate',
    duration: 60,
    icon: TrendingUp,
    description: 'Requirements gathering, data analysis, and process improvement',
    questions: 13,
    completedBy: 1234,
    rating: 4.7
  },
];

export function ExplorePage() {
  const [selectedType, setSelectedType] = useState<ChallengeType>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  const filteredChallenges = challenges.filter(challenge => {
    const typeMatch = selectedType === 'all' || challenge.type === selectedType;
    const categoryMatch = selectedCategory === 'all' || challenge.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
    return typeMatch && categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-success bg-success/10 border-success/20';
      case 'intermediate':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'advanced':
        return 'text-destructive bg-destructive/10 border-destructive/20';
    }
  };

  const getTypeIcon = (type: 'full-interview' | 'behavioral' | 'coding') => {
    switch (type) {
      case 'full-interview':
        return <Zap className="size-4" />;
      case 'behavioral':
        return <Users className="size-4" />;
      case 'coding':
        return <Code className="size-4" />;
    }
  };

  const getTypeLabel = (type: 'full-interview' | 'behavioral' | 'coding') => {
    switch (type) {
      case 'full-interview':
        return 'Full Interview';
      case 'behavioral':
        return 'Behavioral';
      case 'coding':
        return 'Coding Challenge';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">Explore Challenges</h1>
          <p className="text-xl text-muted-foreground">
            Practice with {challenges.length}+ interview challenges across multiple categories
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Challenge Type Filter */}
          <div>
            <h3 className="text-sm mb-3 text-muted-foreground">Challenge Type</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedType === 'all'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                All Types
              </button>
              <button
                onClick={() => setSelectedType('full-interview')}
                className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-2 ${
                  selectedType === 'full-interview'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                <Zap className="size-4" />
                Full Interview
              </button>
              <button
                onClick={() => setSelectedType('behavioral')}
                className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-2 ${
                  selectedType === 'behavioral'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                <Users className="size-4" />
                Behavioral
              </button>
              <button
                onClick={() => setSelectedType('coding')}
                className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-2 ${
                  selectedType === 'coding'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                <Code className="size-4" />
                Coding
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm mb-3 text-muted-foreground">Category</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === 'all'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setSelectedCategory('software-engineering')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === 'software-engineering'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                Software Engineering
              </button>
              <button
                onClick={() => setSelectedCategory('data-science')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === 'data-science'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                Data Science
              </button>
              <button
                onClick={() => setSelectedCategory('ui-ux')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === 'ui-ux'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                UI/UX Design
              </button>
              <button
                onClick={() => setSelectedCategory('product-management')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === 'product-management'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                Product Management
              </button>
              <button
                onClick={() => setSelectedCategory('business-analyst')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === 'business-analyst'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                Business Analyst
              </button>
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <h3 className="text-sm mb-3 text-muted-foreground">Difficulty</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedDifficulty('all')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedDifficulty === 'all'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                All Levels
              </button>
              <button
                onClick={() => setSelectedDifficulty('beginner')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedDifficulty === 'beginner'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setSelectedDifficulty('intermediate')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedDifficulty === 'intermediate'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                Intermediate
              </button>
              <button
                onClick={() => setSelectedDifficulty('advanced')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedDifficulty === 'advanced'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:bg-accent'
                }`}
              >
                Advanced
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredChallenges.length}</span> challenge{filteredChallenges.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <div
                key={challenge.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className={`px-2 py-1 rounded-md text-xs border capitalize ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </div>
                </div>

                {/* Title & Type */}
                <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">
                  {challenge.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                    {getTypeIcon(challenge.type)}
                    {getTypeLabel(challenge.type)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {challenge.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    {challenge.duration}m
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="size-4" />
                    {challenge.questions} questions
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="size-3 fill-warning text-warning" />
                      {challenge.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="size-3" />
                      {challenge.completedBy.toLocaleString()}
                    </div>
                  </div>
                  <button className="text-primary flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                    Start
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredChallenges.length === 0 && (
          <div className="text-center py-16">
            <div className="size-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <Target className="size-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl mb-2">No challenges found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
