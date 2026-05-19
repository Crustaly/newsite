import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Projects'
import Press from './pages/Press'
import About from './pages/Gallery'
import Speaking from './pages/Speaking'


function App() {
  return (
    <div className="app-shell">
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
