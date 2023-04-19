import React from 'react'
import BodyContain from '../components/BodyContain'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Testimonials from './Testimonials'
import Projects2 from "./Projects2"
// import Projects from './Projects'

function SubBody() {
  return (
    <wrapper>
        <div className="sBody">
          <BodyContain/>
          <Features />
          {/* <Projects/> */}
          <Projects2/>
          <Testimonials/>
        <Footer/>
        </div>
    </wrapper>
  )
}
export default SubBody