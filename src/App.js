import "./App.scss";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";
import Projects from "./pages/projects/index.jsx";
import Contact from "./pages/contact/index.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="space"></div>
      <About />
      <div className="space"></div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
