import React from 'react'
import useCanvas from '../hooks/useCanvas'

const Canvas = props => {
    const {draw, options, ...rest } = props
    const canvasRef = useCanvas(draw)
    
    return <canvas tabIndex={0} ref={canvasRef} {...rest}/>
}

export default Canvas