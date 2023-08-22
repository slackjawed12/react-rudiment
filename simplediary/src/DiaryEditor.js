import React, { useState, useRef, useEffect, useContext } from "react";
import { DiaryDispatchContext } from "./App";
const DiaryEditor = () => {
  // React.memo를 사용해도 처음에 두번 발생한다
  // 이후 일기를 삭제할 때도 발생 - prop이 객체이기 때문.

  useEffect(() => {
    console.log("diaryeditor 렌더링");
  });

  const { onCreate } = useContext(DiaryDispatchContext);
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // 빈 입력을 검증한다.
    if (state.author.length < 1) {
      alert("작성자는 최소 1글자 이상 입력해주세요.");

      // focus - DOM 요소 선택
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요.");

      // focus
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");

    // 초기화
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        오늘의 감정점수
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
