import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
    }; // useEffect가 반환하는 함수를, "클리너" "정리함수" 라고함
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
