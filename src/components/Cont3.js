import React from 'react'
// import styled from 'styled-components'
import Carousel from './Carousel'
import '../css/cont3.css'

function Cont3() {
  return (
    <div className="cont3">
       <img className="mee " src="images/cartoonMe.gif" alt=""/>
        <h4 className="hhh"><p >Hi There! I'm <b>MARY</b> and I'm a</p></h4>
         {/* <!-- AND, I'M ALL THESE THINGS 👇 --> */}
         <Carousel />
  </div>

  )
}


export default Cont3