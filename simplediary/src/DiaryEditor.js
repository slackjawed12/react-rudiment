import { useState } from "react";
const DiaryEditor = () => {
  const [author, setAuthor] = useState("글쓴이 이름");
  const [content, setContent] = useState("본문");
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={author}
          onChange={(e) => {
            console.log(e.target.value);
            console.log(e.target.name);
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
