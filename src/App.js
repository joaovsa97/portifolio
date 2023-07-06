import "./App.scss";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <Home />
        <About />
      </>
    </div>
  );
}

export default App;
