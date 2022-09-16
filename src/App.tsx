import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { themeChange } from 'theme-change'
import { Router } from './components/Router'

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
