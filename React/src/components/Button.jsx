// 리액트에서 발생하는 모든 이벤트들은 이밴트 핸들러 함수를 실행하면서 이벤트 객체를 제공함
const Button = ({ text, color = "balck", children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //   onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
};

// defaultProps는 곧 React에서 사라질 문법이라 버튼의 매개변수에서 구조분해 할당으로 받아온 뒤 거기서 초깃값 설정해줌
// const Button = ({ color = "black", text }) => {...};

// Button.defaultProps = {
//   color: "balck",
// };

export default Button;
