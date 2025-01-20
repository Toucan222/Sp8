import TikTokTrendGenerator from './TikTokTrendGenerator'
import BlankTool from './BlankTool'

export const tools = [
  // First tool with full implementation
  {
    id: 1,
    title: 'TikTok Trend Generator',
    description: 'Generate viral-worthy TikTok video ideas for any topic',
    icon: '🎵',
    component: TikTokTrendGenerator,
    tags: [
      { name: 'TikTok', icon: '📱' },
      { name: 'Viral', icon: '🚀' },
      { name: 'AI', icon: '🤖' }
    ],
    upvotes: 1234
  },
  // Tools 2-50 with BlankTool component
  {
    id: 2,
    title: 'Hashtag Optimizer',
    description: 'Generate trending hashtags for maximum reach',
    icon: '#️⃣',
    component: BlankTool,
    tags: [{ name: 'Growth', icon: '📈' }],
    upvotes: 0
  },
  {
    id: 3,
    title: 'Viral Hook Writer',
    description: 'Create attention-grabbing first 3 seconds',
    icon: '🎣',
    component: BlankTool,
    tags: [{ name: 'Writing', icon: '✍️' }],
    upvotes: 0
  },
  {
    id: 4,
    title: 'Story Arc Builder',
    description: 'Design compelling story arcs for your content',
    icon: '📈',
    component: BlankTool,
    tags: [{ name: 'Content', icon: '📝' }],
    upvotes: 0
  },
  {
    id: 5,
    title: 'Trending Audio Finder',
    description: 'Discover viral sounds before they peak',
    icon: '🎧',
    component: BlankTool,
    tags: [{ name: 'Audio', icon: '🔊' }],
    upvotes: 0
  },
  {
    id: 6,
    title: 'Caption Generator Pro',
    description: 'Create engaging captions that convert',
    icon: '✨',
    component: BlankTool,
    tags: [{ name: 'Writing', icon: '✍️' }],
    upvotes: 0
  },
  {
    id: 7,
    title: 'Engagement Time Optimizer',
    description: 'Find the perfect posting time for your audience',
    icon: '⏰',
    component: BlankTool,
    tags: [{ name: 'Analytics', icon: '📊' }],
    upvotes: 0
  },
  {
    id: 8,
    title: 'Duet Concept Creator',
    description: 'Generate viral duet ideas',
    icon: '👯',
    component: BlankTool,
    tags: [{ name: 'Collaboration', icon: '🤝' }],
    upvotes: 0
  },
  {
    id: 9,
    title: 'Transition Effects Generator',
    description: 'Create smooth, eye-catching transitions',
    icon: '🔄',
    component: BlankTool,
    tags: [{ name: 'Effects', icon: '✨' }],
    upvotes: 0
  },
  {
    id: 10,
    title: 'Content Calendar AI',
    description: 'Plan your content strategy intelligently',
    icon: '📅',
    component: BlankTool,
    tags: [{ name: 'Planning', icon: '📋' }],
    upvotes: 0
  }
].map((tool, index) => ({
  ...tool,
  rank: index + 1,
  description: tool.description || 'Coming soon...',
  tags: tool.tags || [{ name: 'Coming Soon', icon: '🔜' }]
})).sort((a, b) => b.upvotes - a.upvotes);

// Helper functions
export const getTool = (id) => tools.find(tool => tool.id === id);
export const getToolByRank = (rank) => tools.find(tool => tool.rank === rank);
