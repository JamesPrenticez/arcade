import React from 'react'
import Canvas from './Canvas/Canvas'

function Fish(){
    const draw = (context, frameCount) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        
        //bg
        context.fillStyle = "blue";
        context.fillRect(0, 0, 500, 500);


        context.fillStyle = 'yellow'
        context.beginPath()
        context.arc(250, 250, 20, 0, 2*Math.PI)
        context.fill()
    }
      
      return <Canvas draw={draw} />
    }
export default Fish