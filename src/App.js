import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Works from "./Components/pages/Works";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
