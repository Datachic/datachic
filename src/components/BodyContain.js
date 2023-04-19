import React from 'react'
import styled from 'styled-components'
import Cont3 from './Cont3'

function BodyContain() {
  return (
    <Wrapper>
    <div className="bodyContain">
            <img className="tail xxx" src="images/dev4.png" alt=""/>
            <img className="proj1 xxx" src="images/calc2.png" alt=""/>            
            <img className="about xxx" src="images/drums.png" alt=""/>
            <img className="proj xxx" src="images/dev9.png" alt=""/>
            <Cont3/>
          <a href="coverletter.html"><img className="cv xxx ssy" src="images/dev3.png" alt=""/>click</a>
          <a href="ceevee.html"><img className="cv2 xxx ssy" src="images/dev7.png" alt=""/></a>
          <img className="code xxx ssy" src="images/devv.png" alt=""/>
        <marquee className="mantra" width="100%" direction="right" height="60px" scrollAmount="2" >
          <h6 className='marquee'> "...declare variables, not war"</h6></marquee>
   </div>
   </Wrapper>
  )
}

const Wrapper = styled.div`
.bodyContain {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: -2;
}
`

export default BodyContain