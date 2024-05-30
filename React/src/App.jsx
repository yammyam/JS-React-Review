//리렌더링이 일어나는 3가지
// 1, 자신의 state변경
// 2, 자신이 제공받는 props의 값이 변경됐을때
// 3, 부모컴포넌트가 리렌더링되면 자식도 리렌더링됨
import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  //App이라는 부모 컴포넌트(루트컴포넌트) 아래 Header라는 자식 컴포넌트가 있다.
  return (
    <>
      <div>
        <Bulb />
        <Counter />
      </div>
    </>
  );
}

export default App;
