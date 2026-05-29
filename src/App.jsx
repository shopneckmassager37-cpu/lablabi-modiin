import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home     from './pages/Home'
import Menu     from './pages/Menu'
import About    from './pages/About'
import Reviews  from './pages/Reviews'
import Contact  from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Home />}    />
        <Route path="/menu"    element={<Menu />}    />
        <Route path="/about"   element={<About />}   />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
