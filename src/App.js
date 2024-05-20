import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Projects from "./Pages/Projects.js";
import Header from "./Components/Header.js";
import Contact from "./Pages/Contact.js";
import BackgroundAnimation from "./Components/BackgroundAnimation.js";

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
