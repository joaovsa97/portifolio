import './App.scss';

import Navbar from './components/navbar/Navbar.jsx';
import Home from "./pages/home/index.jsx"

function App() {
  return (
    <div className='App'>
    <Navbar />
    <div className="content">
    </div>
      <Home/>
    </div>
  );
}

export default App;
