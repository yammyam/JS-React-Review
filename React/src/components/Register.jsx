import { useState } from "react";
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "KR",
    bio: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //   const onChangeName = (e) => {
  //     setInput({ ...input, name: e.target.value });
  //   };
  //   const onChangeBirth = (e) => {
  //     setInput({ ...input, birth: e.target.value });
  //   };
  //   const onChangeCountry = (e) => {
  //     setInput({ ...input, country: e.target.value });
  //   };
  //   const onChangeBio = (e) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };
  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          {/* select는 기본값으로 맨 위를 기본값으로 설정됨 */}
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="UK">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
    </div>
  );
};

export default Register;
