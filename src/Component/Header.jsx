import "./Header.css";

function Header() {

  function addUrl(url){
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.click();
      document.querySelector("body").appendChild(a);
      document.querySelector("body").removeChild(a);
  }

  return (
    <div className="app">
        <header>
            <gentle>GentleTheDeveloper</gentle>
            <aside>
                <a href="#about"><h6>About Me</h6></a>
                <a href="#skills"><h6>My Skills</h6></a>
                <a href="#project"><h6>My Project</h6></a>
            </aside>
            <div>
                <i className="fa-brands fa-github" onClick={() => addUrl("https://github.com/Bigoluwagentle")}></i>
                <i className="fa-brands fa-whatsapp" onClick={() => addUrl("https://wa.me/7060503032")}></i>
                <i className="fa-brands fa-twitter" onClick={() => addUrl("https://x.com/bigoluwagentle")}></i>
            </div>
        </header> 
    </div>
  );
}

export default Header;
