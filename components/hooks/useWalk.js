import {useState} from "react"

export default function useWalk(maxSteps){
  const [position, setPosition] = useState({x: 0, y: 0})
  const [dir, setDir] = useState(0)
  const [step, setStep] = useState(0)
  //Hash map
  const directions = {
    //down, left, right, up
    //s, a, d, w
    // s: 0,
    // a: 1,
    // d: 2,
    // w: 3
    down: 0,
    left: 1,
    right: 2,
    up: 3
  }

  const stepSize = 16;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize}
  }

  function walk(dir){
    console.log("walk")
    console.log(dir)
    setDir((prev) => {
      if(directions[dir] === prev) move(dir)
      return directions[dir]
    })
    setStep((prev) => (prev < maxSteps -1  ? prev + 1 : 0)) //this is going to cycle 0,1,2 b/c we have a max of 3 animations per step
  }

  function move(dir){
    setPosition((prev) => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }))
  }

  return {
    walk,
    dir,
    step,
    position,
  }
}