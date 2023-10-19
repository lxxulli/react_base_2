import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  /* 위에 props말고 다른 단어를 넣어도 작동은 되지만 props를 넣는 게 일반적 */
  /* 프롭스명에 $를 넣으면 오류가 안 생김(styled-components 쓸 때만 하면 됨) */
`;

export const StyleEx = () => {
  return (
    <>
      <Box $bgColor="hotpink"></Box>
      <Box $bgColor="seagreen"></Box>
    </>
  );
};
