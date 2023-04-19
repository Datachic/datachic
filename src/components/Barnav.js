import React from 'react'
// import styled from 'styled-components'
import '../css/barnav.css'

function Barnav() {
  return (
    <div className="barnav">
        <div className="img"><img className="logo" src="images/ma3.png" alt="An awewome logo" /></div>
        <div className="info">
          <ul cclassName="ulnav">
            <li><a className="nav-link" href="/"><h5>Home</h5></a></li>
            <li><a className="nav-link" href="#projects"><h5>Portfolio</h5> </a></li>
            <li><a className="nav-link" href="https://daily--app.herokuapp.com/"><h5>Blog</h5></a></li>
            <li><a className="nav-link ff" href="contact.html"><h5>Contact</h5></a></li>
            <li><a className="nav-link" href="https://malabi-newsletter-app.herokuapp.com/"><h5>Newsletter</h5></a></li>         
          </ul>  
        </div>
        <br/>
        {/* <input type="text" width="40px" /> */}
      </div>   
  )
}


// const Wrapper = styled.div`

// .barnav {
//   width: 100px;
//   height: 100%;
//   margin: 0;
//   padding: 2px;
//   text-align: center;
//   box-shadow: 0 0 3px #c2c9c1;
//   background: #292929;

//    ul {
//     text-align: left;
//      margin: 0;
//      padding: 10px 0 0 15px;

//         li {
//         list-style: none;
//         text-decoration: none;
//         /* color: ; */
//          margin-bottom: 30px;
//       }
  
//     }
//   a.nav-link {
//   margin-top: 0.3rem
//    }  



// }

// @media (max-width: 575px) {
// }
// /*Small devices (landscape phones, 576px and up)*/
// @media (min-width:576px) and (max-width:767px) {
// }
// /*Medium devices (tablets, 768px and up)*/
// @media (min-width: 768px) and (max-width: 991.98px) {
// }
// /* Large devices (desktops, 992px and up)*/
// @media (min-width: 992px) and (max-width: 1134.98px) {
// }
// /* Extra large devices (large desktops, 1200px and up)*/
// @media (min-width: 1135px) and (max-width: 1268px) {
  
// }


// `

export default Barnav