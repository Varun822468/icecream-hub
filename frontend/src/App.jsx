import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";   // ✅ use Hero directly as Home
import About from "./pages/About";
import Contact from "./pages/Contact";
import Icecream from "./pages/Icecream";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />   {/* ✅ Home points to Hero */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/icecream" element={<Icecream />} />
      </Routes>
    </Router>
  );
}
