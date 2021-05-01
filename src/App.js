import { useState, useEffect, useRef } from "react";
import "./styles.css";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  // beforeupload는 window가 닫히기전에 function을 실행시킨다
  const enablePrevent = () => addEventListener("beforeunload", listener);
  const disablePrevent = () => removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unrotect</button>
    </div>
  );
}
