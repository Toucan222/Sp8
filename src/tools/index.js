import TikTokTrendGenerator from './TikTokTrendGenerator'
import BlankTool from './BlankTool'

export const tools = [
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
  }
  // ... continuing with remaining tools
].map((tool, index) => ({
  ...tool,
  rank: index + 1,
  description: tool.description || 'Coming soon...',
  tags: tool.tags || [{ name: 'Coming Soon', icon: '🔜' }]
})).sort((a, b) => b.upvotes - a.upvotes);

// Export individual tools for direct import
export const getTool = (id) => tools.find(tool => tool.id === id);
export const getToolByRank = (rank) => tools.find(tool => tool.rank === rank);
