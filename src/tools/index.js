import ExampleTool from "./ExampleTool";
import LLMDemoTool from "./LLMDemoTool";

const tools = [
  {
    id: "exampleTool",
    title: "Example Tool",
    description: "A sample implementation to show how it works.",
    component: ExampleTool,
    category: "AI Text",
    icon: "📝",
    features: ["Demonstrates user input", "Calls DeepSeek LLM"]
  },
  {
    id: "llmDemoTool",
    title: "LLM Demo Tool",
    description: "Showcases real-time AI text generation via DeepSeek.",
    component: LLMDemoTool,
    category: "AI Text",
    icon: "🤖",
    features: ["Generates short text", "On-demand content creation"]
  }
];

export default tools;
