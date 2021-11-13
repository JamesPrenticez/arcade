
import React, { useRef, useEffect } from 'react'

const Shooter = props => {
  
  const canvasRef = useRef(null)

  class Player{
      constructor(name, clientX, clientY){
          this.name = name,
          this.clientX = clientX,
          this.clientY = clientY
          this.x = 250,
          this.y = 250,
          this.movementSpeed = 1,
          this.pressingUp = false,
          this.pressingDown = false,
          this.pressingRight = false,
          this.pressingLeft = false,
          this.pressingAttack = false
      }
      update(ctx){
        this.drawPlayer(ctx)
        this.updatePosition()
      }
      drawPlayer(ctx){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(this.x, this.y, 20, 0, 2*Math.PI)
        ctx.fill()
      }
      updatePosition(){
        if(this.pressingUp) this.y -= this.movementSpeed
        if(this.pressingDown) this.y += this.movementSpeed 
        if(this.pressingLeft) this.x -= this.movementSpeed 
        if(this.pressingRight) this.x += this.movementSpeed
      }
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    canvas.height = 500
    canvas.width = 500
    const ctx = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    let player = new Player("James")
    
        canvas.addEventListener("keydown", (e) => {
            console.log(e.keyCode)
            if(e.keyCode === 87) player.pressingUp = true
            if(e.keyCode === 83) player.pressingDown = true
            if(e.keyCode === 65) player.pressingLeft = true
            if(e.keyCode === 68) player.pressingRight = true
        })
        canvas.addEventListener("keyup", (e) => {
            console.log(e.keyCode)
            if(e.keyCode === 87) player.pressingUp = false
            if(e.keyCode === 83) player.pressingDown = false
            if(e.keyCode === 65) player.pressingLeft = false
            if(e.keyCode === 68) player.pressingRight = false
        })
        
        canvas.addEventListener("mousemove", (e) => {
            //console.log(e.clientX)
            //console.log(e.clientY)
        })

        const draw = () =>{
            player.update(ctx)
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
      <h1 className="font-semibold text-5xl p-4 text-red-600">Shooter</h1>
      <canvas tabIndex={0} className="bg-green-600" ref={canvasRef} {...props}/>
      <h1 className="font-semibold text-xl p-4 text-black">WASD to Move | Mouse to aim and shoot</h1>
    </>
  )
}

export default Shooter