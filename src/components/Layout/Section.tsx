import React, { type ReactNode, useRef } from 'react'

const Section = ({ id, children }: { id: number, children: ReactNode }) => {
  const ref = useRef(null);
  return (
    <section ref={ref} style={{
      height: "100vh",
      position: "relative",
      scrollSnapAlign: "center",
    }}>
      {children}
    </section>
  );
}

export default Section