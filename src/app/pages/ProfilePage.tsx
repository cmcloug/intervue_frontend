import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  User, 
  Settings, 
  TrendingUp, 
  Calendar, 
  Award,
  Bell,
  Clock,
  Lock,
  Trash2,
  Code,
  Database,
  Palette,
  Briefcase,
  Target,
  CheckCircle2,
  AlertCircle,
  Sun,
  Moon
} from 'lucide-react';

// Mock interview data
const mockInterviews = [
  {
    id: '1',
    category: 'Software Engineering',
    icon: Code,
    date: '2026-02-28',
    score: 87,
    status: 'completed',
    technicalScore: 90,
    behavioralScore: 84,
  },
  {
    id: '2',
    category: 'Data Science',
    icon: Database,
    date: '2026-02-26',
    score: 82,
    status: 'completed',
    technicalScore: 85,
    behavioralScore: 79,
  },
  {
    id: '3',
    category: 'UI/UX Designer',
    icon: Palette,
    date: '2026-02-24',
    score: 91,
    status: 'completed',
    technicalScore: 93,
    behavioralScore: 89,
  },
  {
    id: '4',
    category: 'Product Manager',
    icon: Briefcase,
    date: '2026-02-20',
    score: 78,
    status: 'completed',
    technicalScore: 75,
    behavioralScore: 81,
  },
];

export function ProfilePage() {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'progress' | 'settings'>('progress');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [interviewReminders, setInterviewReminders] = useState(true);
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [duration, setDuration] = useState<'30' | '45' | '60'>('45');

  if (!user) {
    return null;
  }

  const totalInterviews = mockInterviews.length;
  const averageScore = Math.round(
    mockInterviews.reduce((acc, interview) => acc + interview.score, 0) / totalInterviews
  );

  const categoryStats = mockInterviews.reduce((acc, interview) => {
    acc[interview.category] = (acc[interview.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl mb-2">My Profile</h1>
              <p className="text-muted-foreground">
                Track your progress and manage your account settings
              </p>
            </div>
            <button
              onClick={signOut}
              className="px-6 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* User Info Card */}
        <div className="bg-background rounded-xl p-6 mb-8 border border-border">
          <div className="flex items-center gap-6">
            <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="size-10 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl mb-1">{user.name}</h2>
              <p className="text-muted-foreground mb-3">{user.email}</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award className="size-5 text-primary" />
                  <span className="text-sm">
                    <strong>{totalInterviews}</strong> Interviews Completed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="size-5 text-primary" />
                  <span className="text-sm">
                    <strong>{averageScore}%</strong> Average Score
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-6 py-3 transition-colors relative ${
              activeTab === 'progress'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="size-5" />
              Progress
            </div>
            {activeTab === 'progress' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 transition-colors relative ${
              activeTab === 'settings'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <Settings className="size-5" />
              Settings
            </div>
            {activeTab === 'settings' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'progress' && (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">Total Interviews</h3>
                  <Calendar className="size-8 text-primary" />
                </div>
                <p className="text-4xl mb-2">{totalInterviews}</p>
                <p className="text-sm text-muted-foreground">
                  Across all categories
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">Average Score</h3>
                  <TrendingUp className="size-8 text-primary" />
                </div>
                <p className="text-4xl mb-2">{averageScore}%</p>
                <p className="text-sm text-muted-foreground">
                  Keep up the great work!
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">Top Category</h3>
                  <Award className="size-8 text-primary" />
                </div>
                <p className="text-4xl mb-2">91%</p>
                <p className="text-sm text-muted-foreground">
                  UI/UX Designer
                </p>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl mb-6">Interviews by Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(categoryStats).map(([category, count]) => (
                  <div
                    key={category}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                  >
                    <span>{category}</span>
                    <span className="text-primary">{count} interview{count > 1 ? 's' : ''}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Interviews */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl mb-6">Recent Interview History</h3>
              <div className="space-y-4">
                {mockInterviews.map((interview) => {
                  const Icon = interview.icon;
                  const formattedDate = new Date(interview.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  });

                  return (
                    <div
                      key={interview.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="size-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-1">{interview.category}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="size-4" />
                              {formattedDate}
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="size-4" />
                              Completed
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl mb-1">{interview.score}%</div>
                        <div className="text-xs text-muted-foreground space-y-0.5">
                          <div>Technical: {interview.technicalScore}%</div>
                          <div>Behavioral: {interview.behavioralScore}%</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8">
            {/* Profile Settings */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <User className="size-5" />
                Profile Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <Bell className="size-5" />
                Notification Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <h4 className="mb-1">Push Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about interview updates
                    </p>
                  </div>
                  <button
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      notificationsEnabled ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div
                      className={`size-5 bg-white rounded-full transition-transform ${
                        notificationsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <h4 className="mb-1">Email Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      Get weekly progress reports via email
                    </p>
                  </div>
                  <button
                    onClick={() => setEmailUpdates(!emailUpdates)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      emailUpdates ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div
                      className={`size-5 bg-white rounded-full transition-transform ${
                        emailUpdates ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <h4 className="mb-1">Interview Reminders</h4>
                    <p className="text-sm text-muted-foreground">
                      Remind me to practice regularly
                    </p>
                  </div>
                  <button
                    onClick={() => setInterviewReminders(!interviewReminders)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      interviewReminders ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div
                      className={`size-5 bg-white rounded-full transition-transform ${
                        interviewReminders ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Appearance Settings */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                {theme === 'dark' ? <Moon className="size-5" /> : <Sun className="size-5" />}
                Appearance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <h4 className="mb-1">Dark Mode</h4>
                    <p className="text-sm text-muted-foreground">
                      Switch between light and dark themes
                    </p>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      theme === 'dark' ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div
                      className={`size-5 bg-white rounded-full transition-transform flex items-center justify-center ${
                        theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    >
                      {theme === 'dark' ? (
                        <Moon className="size-3 text-primary" />
                      ) : (
                        <Sun className="size-3 text-muted" />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Interview Preferences */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <Clock className="size-5" />
                Interview Preferences
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">
                    Default Difficulty Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['beginner', 'intermediate', 'advanced'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`px-4 py-3 rounded-lg border transition-colors capitalize ${
                          difficulty === level
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:bg-accent'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">
                    Interview Duration (minutes)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['30', '45', '60'] as const).map((mins) => (
                      <button
                        key={mins}
                        onClick={() => setDuration(mins)}
                        className={`px-4 py-3 rounded-lg border transition-colors ${
                          duration === mins
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:bg-accent'
                        }`}
                      >
                        {mins} min
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <Lock className="size-5" />
                Account Security
              </h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 rounded-lg border border-border hover:bg-accent transition-colors text-left">
                  Change Password
                </button>
                <button className="w-full px-4 py-3 rounded-lg border border-border hover:bg-accent transition-colors text-left">
                  Enable Two-Factor Authentication
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-background rounded-xl p-6 border border-destructive/50">
              <h3 className="text-xl mb-6 flex items-center gap-2 text-destructive">
                <AlertCircle className="size-5" />
                Danger Zone
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-destructive/5">
                  <div>
                    <h4 className="mb-1">Delete Account</h4>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <button className="px-6 py-2 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                    <Trash2 className="size-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}