import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";

function App() {
  //App이라는 부모 컴포넌트(루트컴포넌트) 아래 Header라는 자식 컴포넌트가 있다.
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        {/* <div>자식요소</div> */}
        {/* 자식컴포넌트에서 children 이라는 props 이름으로 넘겨짐 */}
        <Header />
      </Button>
    </>
  );
}

export default App;
