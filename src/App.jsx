import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './auth/Login'
import { useUserAuth } from './auth/UserAuthContext'
import { tools } from './tools'
import CoolCard from './tools/CoolCard'
import './styles/global.scss'

export default function App() {
  const [activeToolId, setActiveToolId] = useState(null)
  const { isLoggedIn, logout } = useUserAuth()
  const activeTool = tools.find(tool => tool.id === activeToolId)

  return (
    <div>
      <NavBar />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        {isLoggedIn ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 className="heading-lg">SocialPlug Labs Tools</h2>
              <button 
                onClick={logout}
                style={{
                  backgroundColor: '#7b3fe4',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </div>
            {!activeToolId ? (
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {tools.map(tool => (
                  <CoolCard
                    key={tool.id}
                    title={tool.title}
                    description={tool.description}
                    onAction={() => setActiveToolId(tool.id)}
                  />
                ))}
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
          </>
        ) : (
          <Login />
        )}
      </main>
      <Footer />
    </div>
  )
}
