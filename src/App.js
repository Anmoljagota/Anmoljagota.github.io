import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Home from "./Headers/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AllRoutes />
    </div>
  );
}

export default App;
