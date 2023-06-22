import React from "react";
import { Reveal } from "../components/Animate/Reaveal";
import Section from "../components/Layout/Section";
import Rainbow from "../components/Lines/Rainbow";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Section id={1}>
        <div
          style={{
            position: "relative",
            display: "flex",
            height: "100vh"
          }}
        >
            <Rainbow />
          <Reveal>
            <h1>James</h1>
          </Reveal>

        </div>
      </Section>

      <Section id={2}>
          {/* <Hero /> */}
        {/* <Reveal>
        </Reveal> */}
      </Section>

      <Section id={3}>
        <Carousel />
      </Section>
    </>
  )
}