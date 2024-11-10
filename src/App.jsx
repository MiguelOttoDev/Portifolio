import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../src/Pag/home'
import About from '../src/Pag/about'
import Contact from '../src/Pag/contact'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<h1>Pagina não encontrada</h1>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;