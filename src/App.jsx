import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Animacoes from "./pages/Animacoes";
import Detalhes from "./pages/Detalhes";
import Sobre from "./pages/Sobre";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animacoes" element={<Animacoes />} />
        <Route path="/animacao/:id" element={<Detalhes />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
