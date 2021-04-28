import { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "content of Section 1 "
  },
  {
    tab: "Section 2",
    content: "content of Section 2 "
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  // 3. setCurrentIndex -> useState -> currentIndex -> current Item 변화
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  console.log("fuga");
  console.log(currentIndex);
  console.log(setCurrentIndex);
  return {
    currentItem: allTabs[currentIndex],
    // 2. changeItem -> setCurrentIndex로 보냄 ?
    changeItem: setCurrentIndex
  };
};

export default function App() {
  // returnのobject形だからこうかいている
  const { currentItem, changeItem } = useTabs(0, content);
  console.log("hoge");
  console.log(currentItem);
  console.log(changeItem);
  // const currentItem = useTabs(0, content).currentItem
  // const changeItem = useTabs(0, content).changeItem

  return (
    <div className="App">
      {/* map(value, index, array) */}
      {/* 「value」は、配列の値  */}
      {/* 「index」は、配列のインデックス番号 */}
      {/* 「array」は、現在処理している配列 */}
      {content.map((section, index) => (
        //1. button을 누르면 changeItem에 인덱스번호 (0 or 1)를 보냄
        <button onClick={() => changeItem(index)}>{section.tab} </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
