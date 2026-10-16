import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Project.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
