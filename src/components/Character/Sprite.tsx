import React from "react";

interface SpriteProps {
  image: string;
  data: {
    y: number;
    x: number;
    h: number;
    w: number;
  };
  position: {
    x: number;
    y: number;
  };
}

const Sprite: React.FC<SpriteProps> = ({ image, data, position }) => {
  const { y, x, h, w } = data;

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        height: `${h}px`,
        width: `${w}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`,
      }}
    />
  );
};

export default Sprite;