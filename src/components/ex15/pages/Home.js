import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: lightgray;
`;
const LOGO = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 70px;
    font-weight: 700;
    letter-spacing: -2px;
  }
`;
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  li {
    margin: 0 10px;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <LOGO>
        <h3>HOME</h3>
      </LOGO>
      <Nav>
        <li>
          <Link to={"/login"}>LOGIN</Link>
        </li>
        <li>
          <Link to={"/signUP"}>SIGNUP</Link>
        </li>
      </Nav>
    </Wrap>
  );
};
