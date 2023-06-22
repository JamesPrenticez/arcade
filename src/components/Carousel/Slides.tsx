import React from "react";
import SliderCard from "./SliderCard";
import type { Data } from "./Carousel.d";

interface Props {
  data: Data[];
};

const Slides = ({ data }: Props) => {
  return (
    <div className=" flex w-full gap-6">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
}

export default Slides;