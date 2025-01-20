import ExampleTool from './ExampleTool'
import LLMDemoTool from './LLMDemoTool'

export const tools = [
  {
    id: 1,
    title: 'Example Tool',
    description: 'A sample tool demonstrating AI text summarization.',
    icon: '📝',
    component: ExampleTool
  },
  {
    id: 2,
    title: 'LLM Demo',
    description: 'Try the DeepSeek LLM with a user prompt',
    icon: '🤖',
    component: LLMDemoTool
  }
]
