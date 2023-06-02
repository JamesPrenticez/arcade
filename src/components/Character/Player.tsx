import React from "react";
import Actor from "./Actor";
import useWalk from "../../hooks/useWalk";
import useKeyPress from "../../hooks/useKeyPress";

interface PlayerProps {
  skin: string;
}

const Player = ({ skin }: PlayerProps) => {
  const { dir, step, walk, position } = useWalk(3);

  const data = {
    h: 32,
    w: 32,
  }

  useKeyPress((e) => {
    e.preventDefault();
    const dir = e.key.replace("Arrow", "").toLowerCase()
    walk(dir);
  })

  return (
    <Actor 
      sprite={`../../${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  )
}

export default Player;
