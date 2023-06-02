import React from 'react'

// import moon from "../../assets/parallax/moon.png"
import moon from "../../assets/parallax/moon.png"
import stars from "../../assets/parallax/stars.webp"
import land from "../../assets/parallax/land.png"
import cat from "../../assets/parallax/cat.gif"

import { Parallax, ParallaxLayer } from '@react-spring/parallax' 

const MyParallax = () => {

  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0} // position in the pages array
          speed={1} // springy effect
          factor={2} // span more then 1 page e.g. 1.5 pages
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover'
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={1} // position in the pages array
          speed={1} // springy effect
          factor={2} // span more then 1 page e.g. 1.5 pages
          style={{
            backgroundImage: `url(${stars})`,
            backgroundSize: 'cover'
          }}
        >
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover'
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0, end: 3 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={2}
        >
          <h2 className='text-[6rem]'>Touch Down!</h2>
        </ParallaxLayer>
      </Parallax>

    </div>
  )
}

export default MyParallax

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