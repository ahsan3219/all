
import './App.css';
// import { useState, useEffect } from "react";
// import axios from "axios";
import { Link, Routes, Route, Navigate } from 'react-router-dom'

import Home from "./components/home/index.jsx";
import Gallery from "./components/gallery/index.jsx";
import Contact from "./components/contact/index.jsx";
import About from "./components/about/index.jsx";
import Azan from "./components/Azan/index.jsx";
import Car from "./components/car/index.jsx";
import Weather from "./components/weather/index.jsx";
import Git from "./components/git/index.jsx";


const App = () => (

    <div><br />
        <center><nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/gallery'}>Gallery</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/car'}>Car</Link>
                </li><li>
                    <Link to={'/git'}>Git</Link>
                </li><li>
                    <Link to={'/weather'}>Weather</Link>
                </li><li>
                    <Link to={'/azan'}>Azan</Link>
                </li>
            </ul>
        </nav>
</center><br />
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/gallery"
                element={<Gallery />}
            />
            <Route
                path="/contact"
                element={<Contact />}
            />
            <Route
                path="/about"
                element={<About />}
            />
 <Route
                path="/car"
                element={<Car />}
            />
             <Route
                path="/git"
                element={<Git />}
            />
             <Route
                path="/weather"
                element={<Weather />}
            />

<Route
                path="/Azan"
                element={<Azan />}
            />

            <Route
                path="*"
                element={<Navigate to={'/'} />}
            />
        </Routes>


    </div>
)

export default App;





// import './App.css';
// import Header from "./components/header/index.jsx";

// import Home from "./components/home/index.jsx";
// import Car from "./components/car/";
// import Weather from "./components/weather/index.jsx";
// // import Azan from "./components/azan/";
// import Git from "./components/git/";

// import { Link, Routes, Route, Navigate } from 'react-router-dom'
// function App() {
//   return (
// <div className='main'>

// <Header />
// <br />
// <Weather/>
// <Car/>
// <Home/>
//   {/* <center><h1>Nav bar</h1></center><br />
//   <center><ul>
// <li className="icon fa fa-sun-o"><a href=''>Home</a></li>
// <li className="icon fa fa-sun-o"><a href=''>Azan</a></li>
// <li className="icon fa fa-sun-o"><a href=''>Weather</a></li>
// <li className="icon fa fa-sun-o"><a href=''>Car</a></li>
// <li className="icon fa fa-sun-o"><a href=''>Git</a></li>

//   </ul></center> */}
// </div>   
//   );
// }

// export default App;




// // // <Routes>
// // // <Route path='/weather' element={<Weather />} />
// // // {/* <Route path='/azan' element={<Azan />} /> */}
// // // <Route path='/home' element={<Home />} />
// // // <Route path='/car' element={<Car />} />
// // // <Route path='/git' element={<Git />} />
// // // <Route
// // //                 path="*"
// // //                 element={<Navigate to={'/'} />}
// // //             />

          
// // //          </Routes>
// // <div className="App">


// // {/* Nav bar start */}
// // {/* <div className="ct" id="t1">
// //   <div className="ct" id="t2">
// //     <div className="ct" id="t3">
// //       <div className="ct" id="t4">
// //          <div className="ct" id="t5">
// //           <ul id="menu">
// //             <li className="icon fa fa-sun-o" id="uno"><Link to={"/weather"}></Link></li>
// //             <li className="icon fa fa-play-circle" id="tres"><Link to={"/azan"}></Link></li>
// //             <li className="icon fa fa-car" id="cuatro"><Link to={"/car"}></Link></li>
// //             <li className="icon fa fa-home" id="dos"><Link to={"/"}></Link></li>
// //             <li className="icon fa fa-plus-circle" id="cinco"><Link to={"/git"}></Link></li>
// //           </ul>
// //            <div className="page" id="p1">
// //           <section className="icon fa fa-bolt"><span className="title">Bolt</span><span className="hint">Like this pen to see the magic!...<br/> Just kidding, it won't happen anything but I'll be really happy If you do so.</span></section>   */}
// // <div>
// // <ul id="menu">
// //             <li className="icon fa fa-sun-o" id="uno"><Link to={"/weather"}></Link></li>
// //             <li className="icon fa fa-play-circle" id="tres"><Link to={"/azan"}></Link></li>
// //             <li className="icon fa fa-car" id="cuatro"><Link to={"/car"}></Link></li>
// //             <li className="icon fa fa-home" id="dos"><Link to={"/"}></Link></li>
// //             <li className="icon fa fa-plus-circle" id="cinco"><Link to={"/git"}></Link></li>
// //           </ul>

         
         
// //           {/* </div> */}
// //           {/* <div className="page" id="p2"> 
// //             <section className="icon fa fa-keyboard-o"><span className="title">Type</span></section>
// //           </div>  
// //           <div className="page" id="p3">
// //             <section className="icon fa fa-rocket"><span className="title">Rocket</span></section>
// //           </div>
// //           <div className="page" id="p4">
// //             <section className="icon fa fa-dribbble">
// //               <span className="title">Dribbble</span>
// //               <p className="hint">
// //                 <a href="https://dribbble.com/hrtzt" target="_blank">Im ready to play, <span className="hint line-trough">invite me </span> find me</a>
// //               </p>
// //               <p className="hint">Already invited by <a href="http://www.dribbble.com/mrpeters" target="_blank">Stan Peters</a></p>
// //             </section>
// //           </div> 
// //           <div className="page" id="p5">
// //             <section className="icon fa fa-plus-circle">
// //               <span className="title">More</span>
// //               <p className="hint">
// //                 <span>You love one page & CSS only stuff? </span><br/>
// //                 <a href="https://codepen.io/hrtzt/details/pgXMYb/" target="_blank">check this pen "Pure CSS One page vertical navigation"</a>
// //               </p>
// //             </section>
// //           </div> 
// //         </div> */}
// //       {/* </div>
// //     </div>
// //   </div> */}
// // {/* </div> */}


// // </div>