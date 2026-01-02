import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="contact">
        <section>
            <section>
                <aside className="contact-wrapper">
                    <aside className="contact-info">
                        <h1>Contact</h1>
                        <p>I would love to hear about your project and how I could help. Please fill in the form and I'll get back to you as soon as possible.</p>
                    </aside>
                    <form>
                        <input type="text" placeholder="NAME" />
                        <input type="email" placeholder="EMAIL"/>
                        <textarea placeholder="MESSAGE" rows="4"></textarea>
                        <nav className="form-submit">
                            <button type="submit">SEND MESSAGE</button>
                        </nav>
                    </form>
                </aside>
                <nav className="footer-nav">
                    <gentle>Gentcode</gentle>
                    <div className="social-links">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </nav>
            </section>
        </section>
    </div>
  );
}

export default Footer;