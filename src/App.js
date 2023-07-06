import "./App.scss";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";
import Projects from "./pages/projects/index.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
