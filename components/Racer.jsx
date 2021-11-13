import React, { useRef, useEffect } from 'react'

const Racer = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.height = 500
        canvas.width = 500
        const ctx = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId
        
        const draw = () =>{
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.fillStyle = 'yellow'
            ctx.beginPath()
            ctx.arc(250, 250, 20, 0, 2*Math.PI)
            ctx.fill()
        }
        const render = () => {
            draw()
            frameCount++
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])
    return (
        <>
        <h1 className="font-semibold text-5xl p-4 text-red-500">Racer</h1>
        <canvas tabIndex={0} className="bg-green-600" ref={canvasRef} {...props}/>
        </>
    )
}

export default Racer