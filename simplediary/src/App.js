import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "홍길동",
    content: "hello world",
    emotion: 4,
    createdAt: new Date("2023-08-01 09:00:00").getTime(),
  },
  {
    id: 2,
    author: "임꺽정",
    content: "git is not global information tracker",
    emotion: 3,
    createdAt: new Date("2023-08-02 09:00:00").getTime(),
  },
  {
    id: 3,
    author: "정대만",
    content: "내 이름은 정대만",
    emotion: 5,
    createdAt: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
