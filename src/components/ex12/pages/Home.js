import styled from "styled-components";

const SHome = styled.div``;
const Bg = styled.div`
  height: 500px;
  background: url(https://images.unsplash.com/photo-1697291302946-60103b3dd3e3?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
    no-repeat center / cover;
`;
const ImgWrap = styled.ul`
  padding: 100px 80px;
  display: flex;
  justify-content: space-between;
  li {
    width: 300px;
    height: 400px;
    background-color: gray;
  }
`;

export const Home = () => {
  return (
    <SHome>
      <Bg />
      <ImgWrap>
        <li></li>
        <li></li>
      </ImgWrap>
    </SHome>
  );
};
