import { useEffect } from "react";

// fn is a function parameter representing a callback function that will be executed when a key is pressed
// The fn parameter is of type (event: KeyboardEvent) => void,

export default function useKeyPress(fn: (event: KeyboardEvent) => void) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      fn(event);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [fn]);
}