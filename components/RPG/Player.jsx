import React from "react";
import Actor from "./Actor";
import useKeyPress from "../hooks/useKeyPress";
import useWalk from "../hooks/useWalk";

function Player({ skin }) {
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
      sprite={`/rpg/${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
      />
  )
}

export default Player;
