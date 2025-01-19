import ExampleTool from './ExampleTool'
import LLMDemoTool from './LLMDemoTool'
import ToolTemplate from './ToolTemplate'
import MyNewTool from './MyNewTool';


export const tools = [
  {
    id: 1,
    title: 'Example Tool',
    description: 'A placeholder tool to demonstrate the system.',
    component: ExampleTool
  },
  {
    id: 2,
    title: 'LLM Demo',
    description: 'Try the DeepSeek LLM with a user prompt',
    component: LLMDemoTool
  },
  {
    id: 3,
    title: 'New Tool',
    description: 'Template for new tools',
    component: ToolTemplate
  },
	{
  id: 999,
  title: 'MyNewTool',
  description: 'An example tool added manually to the array',
  component: MyNewTool
}

]
