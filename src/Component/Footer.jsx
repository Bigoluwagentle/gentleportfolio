import { useState } from 'react';
import "./Footer.css";

function Footer() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "55a1a315-b32f-4bb3-a2ce-3a3539c4ef6d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    function addUrl(url){
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.click();
        document.querySelector("body").appendChild(a);
        document.querySelector("body").removeChild(a);
    }
  return (
    <div className="footer" id="contact">
        <section>
            <section>
                <aside className="contact-wrapper">
                    <aside className="contact-info">
                        <h1>Contact</h1>
                        <p>I would love to hear about your project and how I could help. Please fill in the form and I'll get back to you as soon as possible.</p>
                    </aside>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder="NAME" />
                        <input type="email" name="email" placeholder="EMAIL"/>
                        <textarea placeholder="MESSAGE" name="message" rows="4"></textarea>
                        <nav className="form-submit">
                            <button type="submit">SEND MESSAGE</button>
                        </nav>
                        <p>{result}</p>
                    </form>
                </aside>
                <nav className="footer-nav">
                    <gentle>GentleTheDeveloper</gentle>
                    <div className="social-links">
                        <i className="fa-brands fa-github" onClick={() => addUrl("https://github.com/Bigoluwagentle")}></i>
                        <i className="fa-brands fa-whatsapp" onClick={() => addUrl("https://wa.me/7060503032")}></i>
                        <i className="fa-brands fa-twitter" onClick={() => addUrl("https://x.com/bigoluwagentle")}></i>
                    </div>
                </nav>
            </section>
        </section>
    </div>
  );
}

export default Footer;

