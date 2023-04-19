import React from 'react'
import Sign from './Sign'
import Socials from './Socials'
import styled from 'styled-components';


function Footer() {
  return (
    <Wrapper>
       <div className="foot">
        <Socials/>
        <Sign/>
       </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
.foot{
  background-color:#388f99;;
  padding-top: 1.5%;
  height: 10vh;
  text-align: center;

  a {
  /* color: rgb(130, 107, 232); */
  }
}


@media (max-width: 575px) {
}
/*Small devices (landscape phones, 576px and up)*/
@media (min-width:576px) and (max-width:767px) {
}
/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
}
/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1259.98px) {
}
/* Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1260px) {
  
}


`