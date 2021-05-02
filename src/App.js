import { useState, useEffect, useRef } from "react";
import "./styles.css";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  // 이벤트가 발생할때 (mouseleave)불려짐 (3)
  const handle = (event) => {
    // event안에는 여러 obj가 있다.
    // clientY를 사용해서 높이를 체크/ 화면 위로 가면 onBefore이 실행되게 함 (4)
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    // dom이 생성될때 한번 불려짐 (2)
    document.addEventListener("mouseleave", handle);
    console.log("2");
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};
export default function App() {
  // 1
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
