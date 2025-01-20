import ExampleTool from './ExampleTool'
import LLMDemoTool from './LLMDemoTool'
import TikTokTrendGenerator from './TikTokTrendGenerator'

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
    title: 'Example Tool',
    description: 'A sample tool demonstrating AI text summarization.',
    icon: '📝',
    component: ExampleTool,
    tags: [
      { name: 'Demo', icon: '🔍' },
      { name: 'AI', icon: '🤖' }
    ],
    upvotes: 856
  },
  {
    id: 3,
    title: 'LLM Demo',
    description: 'Try the DeepSeek LLM with a user prompt',
    icon: '🤖',
    component: LLMDemoTool,
    tags: [
      { name: 'AI', icon: '🤖' },
      { name: 'Text', icon: '📝' }
    ],
    upvotes: 2341
  }
].sort((a, b) => b.upvotes - a.upvotes)
 .map((tool, index) => ({ ...tool, rank: index + 1 }));
