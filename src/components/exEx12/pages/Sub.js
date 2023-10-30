import { useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "../api";
// console.log(data);

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;
const Bg = styled.div`
  width: 48%;
  height: 600px;
  background: url(${(props) => props.$bg}) no-repeat center / cover;
`;
const Title = styled.div`
  width: 48%;
  padding-top: 50px;
  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #808080;
    font-size: 18px;
  }
`;

export const Sub = () => {
  // 현재 페이지에서 변수값을 얻어오는 방법
  // const params = useParams();
  // console.log(params.id);  <<  아이디만 골라오기
  const { id } = useParams(); // 객체 비구조화할당 ***

  return (
    <Section>
      <Bg $bg={data[id].img} />
      <Title>
        <h3>{data[id].title}</h3>
        <p>{data[id].desc}</p>
      </Title>
    </Section>
  );
};
