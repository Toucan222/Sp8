import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { tools } from './tools'
import './styles/global.scss'

export default function App() {
  const [activeToolId, setActiveToolId] = useState(null)
  const activeTool = tools.find(tool => tool.id === activeToolId)

  return (
    <div>
      <NavBar />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        {!activeToolId ? (
          <div>
            <h2 className="heading-lg">SocialPlug Labs Tools</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {tools.map(tool => (
                <div
                  key={tool.id}
                  onClick={() => setActiveToolId(tool.id)}
                  style={{ 
                    padding: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <h3 className="heading-lg">{tool.title}</h3>
                  <p className="body-text">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setActiveToolId(null)}
              style={{ marginBottom: '1rem' }}
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
