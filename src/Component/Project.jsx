import "./Project.css";
import { motion } from "framer-motion";
import craftman from "../images/craftman.png";
import translatorai from "../images/naijalang.png";
import shortly from "../images/shortly.png";
import nutrial from "../images/nutriai.png";

function Project() {
    function addUrl(url){
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.click();
        document.querySelector("body").appendChild(a);
        document.querySelector("body").removeChild(a);
    }
  return (
    <div className="project">
        <section id="project">
            <nav className="project-header">
                <h1>Projects</h1>
                <a href="#contact"><h6>CONTACT ME</h6></a>
            </nav>
            <aside className="projects-grid">
                <motion.aside
                    className="project-card"
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2}}
                >
                    <div className="project-image">
                        <img src={craftman} alt="Craftman project img" />
                    </div>
                    <div className="project-content">
                        <h3>Craftman</h3>
                        <nav className="tech-stack">
                            <h6>React</h6>
                            <h6>JavaScript</h6>
                            <h6>MongoDB</h6>
                            <h6>Node.js</h6>
                            <h6>Express.js</h6>
                        </nav>
                        <button onClick={() => addUrl("https://craftman-dusky.vercel.app/")}>View Project</button>
                    </div>
                </motion.aside>
                <motion.aside
                    className="project-card"
                    initial={{opacity:0, x:100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2}}
                >
                    <div className="project-image">
                        <img src={translatorai} alt="naijaslang project img" />
                    </div>
                    <div className="project-content">
                        <h3>NAIJA LANG TRANSLATOR</h3>
                        <nav className="tech-stack">
                            <h6>React</h6>
                            <h6>JavaScript</h6>
                        </nav>
                        <button onClick={() => addUrl("https://naijalangtranslator.vercel.app/")}>View Project</button>
                    </div>
                </motion.aside>
                <motion.aside
                    className="project-card"
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2}}
                >
                    <div className="project-image">
                        <img src={shortly} alt="shortlyimg" />
                    </div>
                    <div className="project-content">
                        <h3>SHORTLY</h3>
                        <nav className="tech-stack">
                            <h6>React</h6>
                            <h6>JavaScript</h6>
                            <h6>Api</h6>
                        </nav>
                        <button onClick={() => addUrl("https://shortly-eta-three.vercel.app/")}>View Project</button>
                    </div>
                </motion.aside>
                <motion.aside
                    className="project-card"
                    initial={{opacity:0, x:100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2}}
                >
                    <div className="project-image">
                        <img src={nutrial} alt="nutriimg" />
                    </div>
                    <div className="project-content">
                        <h3>NUTRITION AI</h3>
                        <nav className="tech-stack">
                            <h6>HTML</h6>
                            <h6>CSS</h6>
                            <h6>JAVASCRIPT</h6>
                        </nav>
                        <button onClick={() => addUrl("https://nutritionapp-ze9g.vercel.app/")}>View Project</button>
                    </div>
                </motion.aside>
            </aside>
        </section>
    </div>
  );
}

export default Project;