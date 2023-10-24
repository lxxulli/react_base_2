import styled from "styled-components";

const MainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px 0 30px;
  color: white;
`;
const ImgBox = styled.div`
  width: 300px;
  height: 300px;
  background: url(https://dimg.donga.com/wps/NEWS/IMAGE/2016/05/31/78415912.2.jpg)
    no-repeat center / cover;
  border-radius: 20px;
`;
const MainTxt = styled.div`
  margin: 25px 0 13px;
  font-size: 24px;
  font-weight: 700;
`;
const SubTxt = styled.div`
  font-size: 15px;
  color: #d0d0d0;
`;

export const MainImg = () => {
  return (
    <MainWrap>
      <ImgBox></ImgBox>
      <MainTxt>12</MainTxt>
      <SubTxt>빈지노 (Beenzino)</SubTxt>
    </MainWrap>
  );
};
