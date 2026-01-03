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
            <gentle>Gentlethecoder</gentle>
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
