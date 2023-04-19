import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import '../css/projects.css'
import { EffectCards } from "swiper";

function Projects() {
  return (
    <>
     <section id="projects" >
            <div className="container ">
            <h2 className="pb-2 border-bottom">Projects</h2>
            <div className="sweep">
              <Swiper effect={"cards"}
                      grabCursor={true}
                      modules={[EffectCards]}
                      className="mySwiper"
               >
                <SwiperSlide>
                    <h2 className="ed">Swipe left ...</h2>
                    <p className="ikon"> to view projects.<br/>
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                  <h2 className="ed">Daily Journal</h2>
                  <p className="ikon">A simple app to journal daily 
                    activities and todos. Each entry can be edited
                    or deleted as the need arises.<br/>
                     <br/> HTML | CSS | Javascript | Node.js| 
                     Express | MongoDb | Mongoose | Fully Responsive.
                  </p>
                    <a href="https://daily--app.herokuapp.com/" 
                      name="slide 1">...go to live website</a> 
                </SwiperSlide>
                <SwiperSlide>
                <h2 className="ed">Todo App</h2>
                <p className="ikon ">An app to specifically manage daily todo. 
                  <br/>
                  <br/> HTML | CSS | Javascript | Node.js | 
                    Express | MongoDb | Mongoose | Fully Responsive.
                  </p>
                    <a href="https://malabi-todoapp.herokuapp.com/" 
                      name="slide 2">...go to live website</a> 
                </SwiperSlide>
                <SwiperSlide>
                <h2>Drum Kit</h2>
                  <p className="ikon"> Play drums.</p>
                  <br/> HTML | CSS | Javascript | Fully Responsive
                   <a href="https://datachic.github.io/Drums/" 
                     name="slide 3">...go to live website</a> 
                </SwiperSlide>
                <SwiperSlide>
                <h2 className="ed">Tindog</h2>
                  <p className="ikon">Tindog website is a tinder 
                  clone  but for dogs 🤣🤣🤣. It was designed as 
                  a class project. <br/>
                  <br/> HTML | CSS | Fully Responsive</p>
                  <a href="https://datachic.github.io/TinDog/" 
                  name="slide 4">...go to live website</a> 
                </SwiperSlide>
                <SwiperSlide>
                <h2 className="ed">Calculator</h2>
                  <p className="ikon"> A basic calulator with 
                  neumorphic designed interface </p>
                  <br/> <p>HTML | CSS | Javascript | 
                      Fully Responsive</p>
                  <a href="https://datachic.github.io/calcApp/" 
                  name="slide 5">...go to live website</a> 
                </SwiperSlide>
                <SwiperSlide>
                <h2 className="ed"> Dice Game</h2>
                  <p className="ikon">A 2-dice Dice game. 
                  It is created using GSAP roll simulator.</p>
                  <br/><p> HTML | CSS | Javascript | GSAP | 
                  Fully Responsive</p>
                  <a href="https://datachic.github.io/Dice-Game/" 
                  name="slide 6">...go to live website</a> 
                </SwiperSlide>
                <SwiperSlide>
                   Slide 8
                </SwiperSlide>
                <SwiperSlide>
                    Slide 9
                </SwiperSlide>



              </Swiper>
              </div>
            </div>
          </section>
    </>
  )
}

export default Projects





