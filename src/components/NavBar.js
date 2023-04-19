import React from 'react'
import '../css/navbar.css'

function NavBar() {
  return (
    <header>
       <nav id="navB" className="navB navbar navbar-expand-md navbar-dark bg-dark">
           <button className="navbar-toggler" type="button" 
                   data-toggle="collapse" data-target="#navbarTogglerDemo02">
               <span className="navbar-toggler-icon"></span>
           </button>
         
             <a className="navbar-brand" href="/">
               <img className="logo2" src="images/ma3.png" alt="An awewome logo" />
             </a>
         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           <h5>
             <ul className="navbar-nav">
               <li className="nav-item active">
                 <a className="nav-link ff" href="/">Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                 <a className="nav-link ff" href="#projects">Portfolio</a>
               </li>

               <li className="nav-item">
                 <a className="nav-link ff" href="https://daily--app.herokuapp.com/">Blog</a>
               </li>

               <li className="nav-item">
                <a className="nav-link ff" href="contact.html">Contact</a>
              </li>

               <li className="nav-item">
                 <a className="nav-link" href="https://malabi-newsletter-app.herokuapp.com/"><h5>Newsletter</h5></a>
                </li>
                </ul>
           </h5>
         </div>
       </nav>
    </header>
  )
}

export default NavBar