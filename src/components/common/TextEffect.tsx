import React from 'react'

interface TextEffectProps {
  text: string;
  color1: string;
  color2: string;
}

const TextEffect = ({
  text = "Hello World",
  color1 = "#F00",
  color2 = "#00F"
}: TextEffectProps) => {
  return (
    <div className='relative bg-red-500'>
      <h1 
        className='absolute font-bold'
        style={{color: `${color2}`}}
      >
        {text}
      </h1>
      <h1 
        className='absolute ml-[-0.4rem] font-bold select-none'
        style={{color: `${color1}`}}
      >
        {text}
      </h1>
    </div>
  )
}

export default TextEffect