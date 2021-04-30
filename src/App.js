import { useState, useEffect } from "react";
import "./styles.css";

const useTitle = (initinalTitle) => {
  const [title, setTitle] = useState(initinalTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
export default function App() {
  // 인수로 받은 문자열으로 setTitle return 한다
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
}
