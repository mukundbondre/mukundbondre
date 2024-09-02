import About from "./containt/about/About";
import Home from "./containt/home/Home";
import Navbar from "./containt/navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Home />
      <About/>
    </div>
  );
}

export default App;
