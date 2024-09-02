import About from "./containt/about/About";
import Home from "./containt/home/Home";
import Navbar from "./containt/navbar/Navbar";
import Skills from "./containt/skills/Skills";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
