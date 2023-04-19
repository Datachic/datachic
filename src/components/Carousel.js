import React from 'react'
import '../css/carousel.css'

function Carousel() {
  return (
  <> 
    <div id="aboutme" className="carousel slide " data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <p>
         <h4>👩‍💻 | Full Stack Web-App Developer |</h4>
        </p>
       </div>
      <div className="carousel-item">
    <p>
    <h4>👩‍🔧 | JavaScript Enthusiast | Python Coder | </h4>
    </p>
  </div>
<div className="carousel-item">
    <p>
    <h4>👩‍🔧 | WebFlow Designer | UI/UX  Designer | </h4>
    </p>
  </div> 
  <div className="carousel-item">
    <p>   
    <h4>👩‍🍳 | Foodie | Lover of beautiful things |</h4>
    </p>
  </div>
  
</div>
<a className="carousel-control-prev" href="#aboutme" role="button" data-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#aboutme" role="button" data-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="sr-only">Next</span>
</a>
     </div>
     <h5>I Use - HTML | CSS | SCSS | JavaScript | React </h5>
     <h5> | Node.js | Express.js | MongoDB | Mongoose </h5>
  </>
  )
}

export default Carousel