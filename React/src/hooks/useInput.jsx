import { useState } from "react";

// Hook관련 3가지 팁
// 1. 함수형 컴포넌트 내부, 커스텀 훅 내부에서만 사용 가능, ex) 조건문, 반복문 , 컴포넌트 외부에서 사용 "불가능"
// 2. 조건부로 호출될 수 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;
