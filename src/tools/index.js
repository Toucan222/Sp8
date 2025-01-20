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
    ]
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
    ]
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
    ]
  }
]
