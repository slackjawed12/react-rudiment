import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import LifeCycle from "./LifeCycle";

// const dummyList = [
//   {
//     id: 1,
//     author: "홍길동",
//     content: "hello world",
//     emotion: 4,
//     createdAt: new Date("2023-08-01 09:00:00").getTime(),
//   },
//   {
//     id: 2,
//     author: "임꺽정",
//     content: "git is not global information tracker",
//     emotion: 3,
//     createdAt: new Date("2023-08-02 09:00:00").getTime(),
//   },
//   {
//     id: 3,
//     author: "정대만",
//     content: "내 이름은 정대만",
//     emotion: 5,
//     createdAt: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  // useState를 사용하면 리렌더링이 발생하므로 렌더링과 관련 없는 변수는 useRef 사용
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const createdAt = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      createdAt,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <LifeCycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
