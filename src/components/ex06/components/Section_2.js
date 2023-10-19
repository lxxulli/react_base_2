import styled from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;
const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
  height: 400px;
  background: url(${(props) => props.$bgImg}) no-repeat center / cover;
  &:hover {
    opacity: 0.5;
  }
  /* &는 자기 자신을 선택하는 선택자 */
`;
export const Section_2 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con $bgImg="https://images.unsplash.com/photo-1697052751820-d51df9fcaa02?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Con>
        <Con $bgImg="https://images.unsplash.com/photo-1692825525815-0409818fbe2c?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Con>
        <Con $bgImg="https://images.unsplash.com/photo-1668204811352-5c8994a5e8ed?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Con>
      </ConWrap>
    </Section>
  );
};
