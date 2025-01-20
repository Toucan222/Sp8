import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchTools from './components/SearchTools'
import { useUserAuth } from './auth/UserAuthContext'
import { tools } from './tools'
import ToolCard from './components/ToolCard'
import './styles/global.scss'

export default function App() {
  const [activeToolId, setActiveToolId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { isLoggedIn } = useUserAuth()

  const activeTool = tools.find(tool => tool.id === activeToolId)
  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="app-container">
      <NavBar />
      
      <main className="main-content">
        {!activeToolId ? (
          <div className="tools-section">
            <div className="tools-header">
              <div className="header-content">
                <h1 className="site-title">SocialPlug Labs</h1>
                <p className="site-subtitle">AI-Powered Social Media Tools</p>
              </div>
              <SearchTools onSearch={(value) => setSearchQuery(value)} />
            </div>

            <div className="tools-grid">
              {filteredTools.map(tool => (
                <ToolCard
                  key={tool.id}
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  onAction={() => setActiveToolId(tool.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="tool-detail">
            <button
              className="btn btn-outline mb-2"
              onClick={() => setActiveToolId(null)}
            >
              ← Back to Tools
            </button>
            <h2 className="heading-lg">{activeTool.title}</h2>
            <activeTool.component />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
