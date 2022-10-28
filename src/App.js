import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Home from "./Headers/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Githubstats from "./Components/Githubstats";
function App() {
  return (
    <div className="App">
     <Navbar />
      {/* <h1>testing</h1> */}
     <Home />
       <AllRoutes />    
   {/* <Projects/>
   {/* <Githubstats/> */}
    </div>
  );
}

export default App;
