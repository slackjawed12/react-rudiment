const ParityResult = ({ count }) => {
  return <>{count % 2 ? "홀수" : "짝수"}</>;
};

export default ParityResult;
