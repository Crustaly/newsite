import { useEffect, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Projects'
import Press from './pages/Press'
import About from './pages/Gallery'
import Speaking from './pages/Speaking'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
    }

    scrollToTop()
    const frame = window.requestAnimationFrame(scrollToTop)

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/press" element={<Press />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
