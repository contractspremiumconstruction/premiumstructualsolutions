import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import RCC from "./pages/RCC"
import Interiors from "./pages/Interiors"
import RestorationWaterproofing from "./pages/RestorationWaterproofing"
import TurnkeyProjects from "./pages/TurnkeyProjects"
import About from "./pages/About"
import ClientsCredentials from "./pages/ClientsCredentials"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rcc" element={<RCC />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/restoration-waterproofing" element={<RestorationWaterproofing />} />
        <Route path="/turnkey-projects" element={<TurnkeyProjects />} />
        <Route path="/clients-credentials" element={<ClientsCredentials />} />
      </Routes>
      <Footer />
    </>
  )
}
