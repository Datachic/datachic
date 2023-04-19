import React from 'react'
import '../css/features.css'

function Features() {
  return (
    <div>
    <section id="feats">
            <div className="row">
              <div className="featurebox ">
                <i className="edn icon fas fa-check-circle fa-4x"></i>
                <h3 className="edn">Process</h3>
                <p className="centp">The secret to developing the right software
                   begins with understanding the user needs. This I believe is what makes or breaks
                  a prospective business. </p>
              </div>
              <div className="featurebox" >
                <i className="edn icon fas fa-heart fa-4x"></i>
                <h3 className="edn">Passion</h3>
                <p className="centp">I am passionate about turning every site/App visit 
                  into an exceptional experience with seamless interactive flow for every user. 
                  I focus mainly on usability and aesthetic. </p>
              </div>
              <div className="featurebox">
                <i className="edn icon fas fa-bullseye fa-4x"></i>
                <h3 className="edn">Lets Get It On</h3>
                <p className="centp">Lets discuss. I am available for full-time or part-time engagements. I also 
                <span className="note"> freelance</span>.
                   So, if you have an interesting project you are working and you 
                  need collaboration,  <a href="http://localhost:3000/contact.html" > 
                  <br/>...do lets chat</a>. </p>
              </div>
            </div>
            
          </section>
    </div>
  )
}

export default Features