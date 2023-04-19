import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/proj2.css";
import { EffectCoverflow, Pagination } from "swiper";
import styled from 'styled-components'

export default function App() {
  return (
    <Wrapper>
    <section id="projects" >
            <div className="container ">
            <h2 className="pb-2 border-bottom">Projects</h2>
            <div className="sweep">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {/* <SwiperSlide>
                      <img src="images/journalApp.png" alt="projectPicture"/>
                      <div className="cardinfo"></div> 
                      </SwiperSlide> */}
                    <SwiperSlide>
                    <img src="images/journal.png" alt="projectPicture"/>
                      <div className="cardinfo">
                       <h2 className="ed">Daily Journal</h2>
                        <p className="ikon">A simple journal app. Each entry can be edited
                        or deleted as needed.<br/>
                        <br/> HTML | CSS | Javascript | Node.js| 
                        Express | MongoDb | Mongoose | Fully Responsive.
                        </p>
                        <a href="https://daily--app.herokuapp.com/" 
                        name="slide 1">...go to live website</a> 
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src="images/todo.png" alt="projectPicture"/>
                    <div className="cardinfo">
                        <h2 className="ed">Todo App</h2>
                        <p className="ikon ">An app to specifically manage daily todo. 
                        <br/>
                        <br/> HTML | CSS | Javascript | Node.js | 
                        Express | MongoDb | Mongoose | Fully Responsive.
                        </p>
                        <a href="https://malabi-todoapp.herokuapp.com/" 
                        name="slide 2">...go to live website</a> </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src="images/drum.png" alt="projectPicture"/>
                    <div className="cardinfo"><h2>Drum Kit</h2>
                    <p className="ikon"> Play drums.
                    <br/> HTML | CSS | Javascript | Fully Responsive</p>
                    <a href="https://datachic.github.io/Drums/" 
                        name="slide 3">...go to live website</a> </div> 
                     </SwiperSlide>

                    <SwiperSlide>
                    <img src="images/tindog.png" alt="projectPicture"/>
                    <div className="cardinfo">  <h2 className="ed">Tindog</h2>
                  <p className="ikon">Tindog website is a tinder 
                  clone  but for dogs 🤣🤣🤣. It was designed as 
                  a class project. <br/>
                  <br/> HTML | CSS | Fully Responsive</p>
                  <a href="https://datachic.github.io/TinDog/" 
                  name="slide 4">...go to live website</a>   </div>                  
                    </SwiperSlide>
                    {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="projectPicture"/>
                    <div className="cardinfo"></div> 
                    </SwiperSlide> */}
                    {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="projectPicture"/>
                    <div className="cardinfo"></div> 
                    </SwiperSlide> */}
                    {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="projectPicture"/>
                    <div className="cardinfo"></div> 
                    </SwiperSlide> */}
                    {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="projectPicture"/>
                    <div className="cardinfo"></div> 
                    </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .swiper-slide {
    img {
    display: block;
    width: 100%;
     } 

     .cardinfo{
    display: none;
   }
  }
  .swiper-slide:hover {
    img {
        display: none;
       }
    .cardinfo{
        display:block;
    }
  } 
  .swiper-slide:nth-child(1n) {
    background-color: rgb(4, 117, 108);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(2n) {
    background-color: rgb(199, 39, 27);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(5n) {
    background-color: rgb(9, 12, 1);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }
  
  .swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
    box-shadow: 0px 0px 5px 5px rgba(191, 205, 195, 0.4);
  }


`