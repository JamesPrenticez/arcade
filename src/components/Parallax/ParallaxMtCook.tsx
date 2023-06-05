import React from 'react'

// import moon from "../../assets/parallax/moon.png"
import one from "../../assets/mtcook/01.svg"
import two from "../../assets/mtcook/02.svg"
import three from "../../assets/mtcook/03.svg"
import four from "../../assets/mtcook/04.svg"
import five from "../../assets/mtcook/05.svg"

import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import TextBlock from './TextBlock'

const ParallaxMtCook = () => {

  return (
    <div>
      <Parallax pages={2} style={{top: 0, left: 0}}>



      <ParallaxLayer offset={0.2} speed={-1}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={five} className='w-full h-auto mb-[593px]'/>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0.2} speed={-0.9}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={four} className='w-full h-auto mb-[380px] '/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.2} speed={-0.7}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={three} className='w-full h-auto mb-[230px] '/>
        </div>
      </ParallaxLayer> 

      <ParallaxLayer offset={0} speed={-0.6}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={two} className='w-full h-auto '/>
        </div>
      </ParallaxLayer> 

      <ParallaxLayer offset={0} speed={0}>
        <div className="w-full max-w-full h-screen flex justify-end items-end" >
          <img src={one} className='w-full h-auto '/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} factor={1.1} speed={0}>
        <TextBlock />
      </ParallaxLayer>

        {/* Five */}
        {/* <ParallaxLayer
          offset={0} // position in the pages array
          speed={1} // springy effect
          factor={1} // span more then 1 page e.g. 1.5 pages
        >
          <div className='w-full max-w-full'>
            <img src={five} className='w-full h-auto '/>
          </div>
        </ParallaxLayer> */}

        {/* Four */}
        {/* <ParallaxLayer
          offset={0} // position in the pages array
          speed={1} // springy effect
          factor={1} // span more then 1 page e.g. 1.5 pages
        >
          <div className='w-full max-w-full'>
            <img src={four} className='w-full h-auto '/>
          </div>
        </ParallaxLayer> */}

        {/* Three */}
        {/* <ParallaxLayer
          offset={0} // position in the pages array
          speed={1} // springy effect
          factor={1} // span more then 1 page e.g. 1.5 pages
        >
          <div className='w-full max-w-full'>
            <img src={three} className='w-full h-auto '/>
          </div>
        </ParallaxLayer> */}

        {/* Two */}
        {/* <ParallaxLayer
          offset={0} // position in the pages array
          speed={1} // springy effect
          factor={1} // span more then 1 page e.g. 1.5 pages
        >
          <div className='w-full max-w-full'>
            <img src={two} className='w-full h-auto '/>
          </div>
        </ParallaxLayer> */}

        {/* One */}
        {/* <ParallaxLayer
          offset={0} // position in the pages array
          speed={1} // springy effect
          factor={0} // span more then 1 page e.g. 1.5 pages
        >
          <div className="w-full max-w-full h-screen flex justify-end items-end" >
            <img src={one} className='w-full h-auto '/>
          </div>
        </ParallaxLayer>
       */}
        {/* Text */}
        {/* <ParallaxLayer
          offset={0.2}
          speed={0.05}
        >
          <h2>James Prentice</h2>
        </ParallaxLayer> */}
      

      </Parallax>



    </div>

  )
}

export default ParallaxMtCook

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