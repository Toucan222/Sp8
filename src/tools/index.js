import ExampleTool from './ExampleTool'
import LLMDemoTool from './LLMDemoTool'
import TikTokTrendGenerator from './TikTokTrendGenerator'

export const tools = [
  {
    id: 1,
    title: 'TikTok Trend Generator',
    description: 'Generate viral-worthy TikTok video ideas for any topic',
    icon: '🎵',
    component: TikTokTrendGenerator
  },
  {
    id: 2,
    title: 'Example Tool',
    description: 'A sample tool demonstrating AI text summarization.',
    icon: '📝',
    component: ExampleTool
  },
  {
    id: 3,
    title: 'LLM Demo',
    description: 'Try the DeepSeek LLM with a user prompt',
    icon: '🤖',
    component: LLMDemoTool
  }
]
