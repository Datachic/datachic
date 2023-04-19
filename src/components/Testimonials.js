import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'


function Testimonials() {
const [joke, setJoke] = useState('Joke');
const [delivery, setDelivery] = useState('Delivery')
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist&type=twopart";

const getJoke = () => {
  axios.get(url)
       .then((res) =>{ 
          const {setup, delivery} = res.data;
          console.log(setup +"  ~  "+ delivery);
          setDelivery('')
             setJoke(setup);
              setTimeout(() => {
                 setDelivery(delivery);
                  console.log("\n");
                }, 2000);  
        })
       .catch((error) => console.log(error));  

  }

  useEffect(() => {
    const intv = setInterval(getJoke, 15000);
    return () => clearInterval(intv);
  },[])

  return (
    <Wrapper>
    <div>
    <section id="testimonials" >
            <div className="container " id="custom-cards">
              <h2 className="pb-2 border-bottom">Jokes</h2>        
              <div className="row align-items-stretch g-4 py-5">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"> 
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h4>{joke}</h4>
                  <h4> 🥁🥁🥁... {delivery} 🥁 </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.row{
  text-align:center;
  justify-content:center;
  align-content:center;
  position: relative;
}

.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

`
export default Testimonials


