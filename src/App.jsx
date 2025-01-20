import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Login from './auth/Login'
import SearchTools from './components/SearchTools'
import ToolsList from './components/ToolsList'
import { useUserAuth } from './auth/UserAuthContext'
import './styles/global.scss'

export default function App() {
  const { isLoggedIn } = useUserAuth()

  return (
    <>
      <NavBar />
      <HeroSection />
      
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
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

        <SearchTools onSearch={(value) => setSearchQuery(value)} />
        <ToolsList />

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
