import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Login from './auth/Login'
import { useUserAuth } from './auth/UserAuthContext'
import { tools } from './tools'
import CoolCard from './tools/CoolCard'
import './styles/global.scss'

export default function App() {
  const [activeToolId, setActiveToolId] = useState(null)
  const { isLoggedIn } = useUserAuth()
  const activeTool = tools.find(tool => tool.id === activeToolId)

  return (
    <div>
      <NavBar />
      {!isLoggedIn ? (
        <>
          <HeroSection />
          <main style={{ padding: '2rem' }}>
            <Login />
          </main>
        </>
      ) : (
        <main style={{ padding: '2rem', minHeight: '80vh' }}>
          {!activeToolId ? (
            <div>
              <h2 className="heading-lg">Available Tools</h2>
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
      )}
      <Footer />
    </div>
  )
}
