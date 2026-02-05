import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import RCC from "./pages/RCC"
import Interiors from "./pages/Interiors"
import RestorationWaterproofing from "./pages/RestorationWaterproofing"
import TurnkeyProjects from "./pages/TurnkeyProjects"
import About from "./pages/About"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rcc" element={<RCC />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/restoration-waterproofing" element={<RestorationWaterproofing />} />
        <Route path="/turnkey-projects" element={<TurnkeyProjects />} />
      </Routes>
      <Footer />
    </>
  )
}
