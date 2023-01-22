import './styles.css'
function Home() {
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");
    
    hamburger_menu.addEventListener("click", () => {
      container.classList.toggle("active");
    });
    return(

            <div className="container">
        <div className="Top">
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">Mayank<span>Rana</span></h3>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="main">
          <header>
            <div className="overlay">
              <div className="inner">
                <h2 className="title">Click on NavBar icon</h2>
                <p>
                  In this project I try to make a 3D navbar animation you can check it out by clicking on the nav bar icon on ther top right corner.
                </p>
                <button className="btn">Read more</button>
              </div>
            </div>
          </header>
        </div>

        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>

      <div className="links">
        <ul>
          <li>
Home          </li>
          <li>
Services          </li>
          <li>
Portfolio          </li>
          <li>
Testiminola          </li>
          <li>
About          </li>
          <li>
contact          </li>
        </ul>
      </div>
    </div>

        </div>
    )
}
export default Home;