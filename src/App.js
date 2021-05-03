import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import "./styles.css";

const useFullscreen = (callback) => {
  const el = useRef();

  const triggerFull = () => {
    if (el.current) {
      el.current.requestFullscreen();
    }
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { el, triggerFull, exitFull };
};
export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { el, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={el}>
        <img src="https://images-fe.ssl-images-amazon.com/images/I/8135hRXxTvL.png" />
        <button onClick={exitFull}>Exit Screen </button>
      </div>
      <button onClick={triggerFull}>FULL Screen </button>
    </div>
  );
}
