import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Project from "./Project";
import Skills from "./Skills";

function Wrapper() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Skills/>
        <Project/>
        <Footer/>
    </div>
  );
}

export default Wrapper;
