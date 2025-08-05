import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Press from './pages/Press'
import Gallery from './pages/Gallery'
import Story from './pages/Story'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/press" element={<Press />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 