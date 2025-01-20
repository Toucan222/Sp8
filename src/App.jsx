import { useState } from 'react'
import NavBar from './components/NavBar'
import { tools } from './tools'
import ToolCard from './components/ToolCard'
import './styles/global.scss'

export default function App() {
  const [activeToolId, setActiveToolId] = useState(null)
  const activeTool = tools.find(tool => tool.id === activeToolId)

  return (
    <div className="app-container">
      <NavBar />
      
      <main className="main-content">
        {!activeToolId ? (
          <div className="tools-grid">
            {tools.map(tool => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                tags={tool.tags}
                rank={tool.rank}
                upvotes={tool.upvotes}
                onAction={() => setActiveToolId(tool.id)}
                onUpvote={() => console.log('Upvoted:', tool.title)}
              />
            ))}
          </div>
        ) : (
          <div className="tool-detail">
            <button
              className="back-button"
              onClick={() => setActiveToolId(null)}
            >
              ← Back to Tools
            </button>
            <h2>{activeTool.title}</h2>
            <activeTool.component />
          </div>
        )}
      </main>
    </div>
  )
}
