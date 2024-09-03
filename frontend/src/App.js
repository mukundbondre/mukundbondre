import About from "./containt/about/About";
import Home from "./containt/home/Home";
import Navbar from "./containt/navbar/Navbar";
import Skills from "./containt/skills/Skills";
import Education from "./containt/education/Education";
import Contact from "./containt/contact/Contact";
import Footer from "./containt/footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
