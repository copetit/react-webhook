import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import "./styles.css";

//notification API : https://developer.mozilla.org/ja/docs/Web/API/Notification
const useNotification = (title, options) => {
  // window가 아니라면 이 브라우져에서는 notification을 지원하지 않기 때문
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          // 거절했을때
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

export default function App() {
  const options = {
    body: "I think cute!",
    icon: "https://images-fe.ssl-images-amazon.com/images/I/8135hRXxTvL.png"
  };
  const triggerNotif = useNotification("redpanda is cute", options);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>Hello</h1>
      <button onClick={triggerNotif}>Notification</button>
    </div>
  );
}
