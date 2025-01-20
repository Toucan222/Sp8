import { useTheme } from '../theme/ThemeContext'

export default function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <nav style={{ 
      backgroundColor: 'var(--pastel-blue)', 
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>SocialPlug Labs</h1>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: '#7b3fe4',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  )
}
