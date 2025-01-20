import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Login from './auth/Login'
import SearchTools from './components/SearchTools'
import MobileLayout from './components/MobileLayout'
import { useUserAuth } from './auth/UserAuthContext'
import { tools } from './tools'
import CoolCard from './tools/CoolCard'
import './styles/global.scss'

export default function App() {
  const [activeToolId, setActiveToolId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { isLoggedIn } = useUserAuth()
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const activeTool = tools.find(tool => tool.id === activeToolId)
  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <HeroSection />
      
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        {!activeToolId ? (
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h2 className="heading-lg">Available Tools</h2>
              {!isLoggedIn && (
                <button className="btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Login for Personalization
                </button>
              )}
            </div>

            {isMobile ? (
              <MobileLayout />
            ) : (
              <>
                <SearchTools onSearch={(value) => setSearchQuery(value)} />
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {filteredTools.map(tool => (
                    <CoolCard
                      key={tool.id}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                      onAction={() => setActiveToolId(tool.id)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div>
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

        {!isLoggedIn && (
          <section className="login-section mt-2">
            <h3 className="heading-lg">Optional: Sign In</h3>
            <p className="mb-1">Sign in to save your preferences and history.</p>
            <Login />
          </section>
        )}
      </main>
      
      <Footer />
    </>
  )
}
