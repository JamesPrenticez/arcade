import { useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface Modifier {
  [key: string]: Position;
}

export default function useWalk(maxSteps: number) {
  const [position, setPosition] = useState<Position>({ x: 500, y: 500 });
  const [dir, setDir] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const directions: { [key: string]: number } = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const stepSize = 16;

  const modifier: Modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  function walk(dir: string) {
    console.log(dir);
    setDir((prev) => {
      if (directions[dir] === prev) move(dir);
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  function move(dir: string) {
    setPosition((prev) => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }));
  }

  return {
    walk,
    dir,
    step,
    position,
  };
}