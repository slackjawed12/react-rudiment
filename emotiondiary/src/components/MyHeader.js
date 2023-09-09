export const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    // header 태그이기 때문에 className 필요없음
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
