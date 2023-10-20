import { useState } from "react";

export const EventEx = () => {
  //   let num = 0;
  //   const plusHandler = () => {
  //     num++;
  //   };

  const [num, setNum] = useState(0);
  //   let 변수명 = '0' 과 동일함

  const plusHandler = () => {
    // setNum(num++); << 이렇게는 안됨
    setNum(num + 1);
  };
  const miunsHandler = () => {
    setNum(num - 1);
  };

  return (
    <>
      <h3>클릭할 때 숫자 증감</h3>
      <h3>{num}</h3>

      {/* <button onclick={plusHandler}>+</button>
      <button>-</button> */}

      <button onClick={plusHandler}>+</button>
      <button onClick={miunsHandler}>-</button>
      {/* <button onClick={() => setNum(num - 1)}>-</button> */}
      {/* ㄴ 한 줄 짜리는 이렇게 축약 가능 */}
    </>
  );
};

// *useState
// - react hook 종류 중 하나로 변수를 정의하고 값을 변경할 때 사용
// - 배열 비구조화 할당을 이용하며 첫 번 째 값은 변수명, 두 번 째 값은 변수를 변경할 수 있는 함수고 정의
// - 단, set이라는 이름을 붙여줘야 함
// ex)
// const [변수명, set변수명] = useState(변수값)
