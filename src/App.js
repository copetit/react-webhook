import { useState, useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const el = useRef();

  // only componentDidMonut
  useEffect(() => {
    // useEffect내에 있는 func은 componentDidMonut, componentDidUpdate때 호출됨
    if (el.current) {
      el.current.addEventListener("click", onClick);
    }
    // componentWillUnmount 때 호출됨
    return () => {
      if (el.current) {
        el.current.removeEventListener("click", onClick);
      }
    };
    // no dependecy = update는 고려하지 않음
  }, []);
  return el;
};

export default function App() {
  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  // const input = useRef();
  // setTimeout(() => input.current.focus(), 3000);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
      {/* <input ref={input} placeholder="la" /> */}
    </div>
  );
}
