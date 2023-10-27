import styled from "styled-components";

const SubWrap = styled.div`
  padding: 100px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
`;
const SubImg = styled.div`
  width: 30%;
  height: 400px;
  background-color: gray;
`;
const TxtWrap = styled.div`
  width: 60%;
  margin-top: 10%;
`;
const TitleTxt = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const SubTxt = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #777;
`;

export const Sub01 = () => {
  return (
    <SubWrap>
      <SubImg />
      <TxtWrap>
        <TitleTxt>야자수</TitleTxt>
        <SubTxt>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod
          impedit soluta, aliquam nisi ipsum nemo qui libero dolor iure vitae
          quis accusantium.
        </SubTxt>
      </TxtWrap>
    </SubWrap>
  );
};
