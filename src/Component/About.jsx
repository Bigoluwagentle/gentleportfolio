import "./About.css";
import used from "../images/gentle g.jpg";

function About() {
  return (
    <div id="about">
        <section>
            <nav>
                <h2>Nice to meet you!</h2>
                <h2>I'm <span>Gent Code.</span></h2>
                <p>I'm a results driven software engineer with a forward thinking mindset and a strong commitment to excellence. 
                I believe success is built on clarity, discipline, and continuous growth.
                My focus is on building efficient, high performance solutions using modern technologies and smart design principles.
                Beyond code, I'm driven by purpose and grounded by faith. 
                I believe that with determination, integrity, and the will to keep learning, success is inevitable.</p>
                <a href="#contact"><h6>CONTACT ME</h6></a>
            </nav>
            <div className="image-container">
                <img src={used} alt="Gent Code" />
            </div>
        </section>
    </div>
  );
}

export default About;