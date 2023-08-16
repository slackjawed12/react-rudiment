import { useEffect, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

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
// api : https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);
  // useState를 사용하면 리렌더링이 발생하므로 렌더링과 관련 없는 변수는 useRef 사용
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        createdAt: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const getDiaryAnalysis = () => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;

    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  };

  // 처음 마운트 시 두번 동작한다. 처음 1번, setData 이후 1번 리렌더링되므로
  // 수정 해도 리렌더링 되므로 또 동작한다.
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis();

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
