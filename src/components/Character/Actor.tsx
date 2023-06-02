import React from "react";
import Sprite from "./Sprite";

interface ActorProps {
  sprite: string;
  data: {
    h: number;
    w: number;
  };
  position?: {
    x: number;
    y: number;
  };
  step?: number;
  dir?: number;
}

const Actor: React.FC<ActorProps> = ({
  sprite,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  dir = 0,
}) => {
  const { h, w } = data;

  return (
    <div>
      <Sprite
        image={sprite}
        position={position}
        data={{
          x: step * w,
          y: dir * h,
          h,
          w,
        }}
      />
    </div>
  );
};

export default Actor;