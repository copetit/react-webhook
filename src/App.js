import { useState, useEffect, useRef } from "react";
import "./styles.css";

//2.
const useNetwork = (onChange) => {
  // 3. 현재 online상황을 저장함 online인 경우는 status = true
  // D. offline으로 변경했을 때는 setStatus 에 false
  const [status, setStatus] = useState(navigator.onLine);
  console.log("3");
  console.log(status);

  // A. online ->offline으로 변경했을때 (그 반대도) useEffect의 EventListener에 의해 handleChange 실행된다
  const handleChange = () => {
    if (typeof onChange === "function") {
      console.log("5");
      // online -> offline으로 변경했을 때는 navigator.onLine이 False
      // onChange는 handleNetworkChange()
      onChange(navigator.onLine);

      console.log("6");
    }
    console.log("setStatus전");
    // C. offline으로 변경했을 때는 setStatus 에 false
    setStatus(navigator.onLine);
    console.log("setStatus후"); // 여긴 왜 마지막에 불리는지 모르겠음
  };
  // 6. dom이 전부 불려지고 나서 처음 한번만 불려짐
  // online일때도 handleChange, offline일때도 handlechange
  useEffect(() => {
    window.addEventListener("online", handleChange); // CopmonetDidMount()
    window.addEventListener("offline", handleChange);
    console.log("poka");

    () => {
      window.removeEventListener("online", handleChange); // ComponentWillUnMount()
      window.removeEventListener("offline", handleChange);
      console.log("4");
    };
  }, []);
  // E. return status (offline 일때는 false)
  console.log("return 직전");
  // 4. return status = true
  return status;
};

export default function App() {
  const handleNetworkChange = (online) => {
    // B. handleChange -> onChange로 결과를 얻어온다
    console.log(online ? "we just went online" : "we are offline");
  };
  // 1. dom이 불려질때 맨 처음 실행됨
  const onLine = useNetwork(handleNetworkChange);
  console.log("APPP");
  // 5. dom return
  //F. dom return

  return (
    <div className="App">
      <h1> {onLine ? "Online" : "OffLine"}</h1>
      {console.log("return안")}
    </div>
  );
}
