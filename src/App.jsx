import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트: 탄생(렌더링)
  useEffect(() => {
    console.log("mount");
  }, []);
  // 2. 업데이트 : 변화 , 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 뎁스 생략하면 리렌더링 일어날 때 마다 실행됨 , 처음것도 포함 ,
  // 업데이트 순간에만 하고싶다면 useRef를 통해 마운트 유무를 체크해야함

  // 3. 언마운트 : 죽음
  // Even.jsx 참조

  const onClickButton = (value) => {
    setCount(count + value);
    //상태변화 함수도 비동기로 작동하기 때문에 여기서 useEffect와 비슷한 효과를 내려고 하면 변경 전의 값이 도출된다.
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
