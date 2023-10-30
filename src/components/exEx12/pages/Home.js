import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../api";

const Banner = styled.section`
  background-color: lightgray;
  height: 80vh;
`;
const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 45%;
  height: 600px;
  background: url(${(props) => props.$bg}) no-repeat center / cover;
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Section>
        <Con $bg={data[0].img}>
          <Link to={"/sub/0"}></Link>
        </Con>
        <Con $bg={data[1].img}>
          <Link to={"/sub/1"}></Link>
        </Con>
      </Section>
    </>
  );
};
