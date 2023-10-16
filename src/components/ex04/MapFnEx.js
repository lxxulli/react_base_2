const nums = [1, 2, 3, 4, 5];
// console.log(nums);

export const MapFnEx = () => {
  // *map()
  // - 배열을 기준으로 배열의 요소값을 새로운 값으로 반환하는 역할
  // - 반드시 첫 번째 유니크한 (고유값) 키 값을 넣어줘야함
  // nums.map((n) => n + console.log(n * 2 + "♥︎"));

  return (
    <>
      {nums.map((num) => (
        <i key={num}>{num}</i>
      ))}
    </>
  );
};
