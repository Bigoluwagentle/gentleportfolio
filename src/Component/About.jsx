import "./About.css";
import gentle from "../images/IMG-20260103-WA0021.jpg";

function About() {

    // function addUrl(url){
    //     const a = document.createElement("a");
    //     a.href = url;
    //     a.target = "_blank";
    //     a.click();
    //     document.querySelector("body").appendChild(a);
    //     document.querySelector("body").removeChild(a);
    // }
  return (
    <div id="about">
        <section>
            <nav>
                <h2>Nice to meet you!</h2>
                <h2>I'm <span>Gentle The Developer.</span></h2>
                <p>I'm a results driven software engineer with a forward thinking mindset and a strong commitment to excellence. 
                I believe success is built on clarity, discipline, and continuous growth.
                My focus is on building efficient, high performance solutions using modern technologies and smart design principles.
                Beyond code, I'm driven by purpose and grounded by faith. 
                I believe that with determination, integrity, and the will to keep learning, success is inevitable.</p>
                <a href="#contact"><h6>CONTACT ME</h6></a>
                {/* <div>
                    <i className="fa-brands fa-github" onClick={() => addUrl("https://github.com/Bigoluwagentle")}></i>
                    <i className="fa-brands fa-whatsapp" onClick={() => addUrl("https://wa.me/7060503032")}></i>
                    <i className="fa-brands fa-twitter" onClick={() => addUrl("https://x.com/bigoluwagentle")}></i>
                </div> */}
            </nav>
            <div className="image-container">
                <img src={gentle} alt="Gentle Code" />
            </div>
        </section>
    </div>
  );
}

export default About;