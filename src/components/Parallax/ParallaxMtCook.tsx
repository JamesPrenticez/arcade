import React, { useRef } from 'react'

// import moon from "../../assets/parallax/moon.png"
import one from "../../assets/mtcook/01.svg"
import two from "../../assets/mtcook/02.svg"
import three from "../../assets/mtcook/03.svg"
import four from "../../assets/mtcook/04.svg"
import five from "../../assets/mtcook/05.svg"

import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import TextBlock from './TextBlock'
import TextEffect from '../common/TextEffect'
import Banner from './Banner'
import Nav from '../Layout/Nav'

const ParallaxMtCook = () => {
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const hobbiesRef = useRef(null)

  return (
    <div>
      {/* <Nav skills={skillsRef} projects={projectsRef} hobbies={hobbiesRef}/> */}

      <Nav/>
      <Parallax pages={2} style={{top: 0, left: 0}}>


      <ParallaxLayer offset={0.2} speed={-1}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={five} className='w-full h-auto mb-[593px]'/>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0.1} speed={-0.9}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={four} className='w-full h-auto mb-[380px] '/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={-0.8} speed={-0.8}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={three} className='w-full h-auto mb-[230px] '/>
        </div>
      </ParallaxLayer> 

      <ParallaxLayer offset={-1} speed={-0.8}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={two} className='w-full h-auto '/>
        </div>
      </ParallaxLayer> 

      <ParallaxLayer offset={-0.2} speed={0}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={one} className='w-full h-auto '/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.80} factor={1.2} speed={0}>
        <section ref={skillsRef} className="w-full h-full min-h-screen bg-[#113352]">
          <div className='flex max-w-7xl w-full mx-auto pt-8'>
          <Banner />
          {/* <TextBlock /> */}
          </div>
        </section>
      </ParallaxLayer>   

      </Parallax>
    </div>

  )
}

export default ParallaxMtCook

// https://indisrupt.indmoney.com/scroll-animation-using-css-scroll-snap-and-react-spring-7663d3925f7a

// #113352
// #1c1f24

// #FFDDA1
// #FFD151
// #F8C537
// #EDB230
// #E77728

// #05668D
// #427AA1
// #A88551
// #EBF2FA
// #44AF69



// #ffe16a
// #ffaf1b
// #da711b

// #bdb068
// #a88551
// #353c10
// #636f20
// #738b25

// #3bafc2
// #e8eee9

// https://www.youtube.com/watch?v=UgIwjLg4ONk
// https://www.youtube.com/watch?v=mxHoPYFsTuk
// https://alistairshepherd.uk/writing/parallax-svg-landscape-1/
// https://codepen.io/isladjan/pen/abdyPBw
// https://www.youtube.com/watch?v=FJ44qmE5odc

// photos
// https://www.pexels.com/search/forest/
// https://www.pexels.com/photo/green-grass-on-forest-418831/
// https://www.pexels.com/photo/forest-under-brown-sky-1414535/
// https://www.pexels.com/photo/photo-of-forest-during-daytime-1834393/