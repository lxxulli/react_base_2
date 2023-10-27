import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  padding: 20px 80px;
  background-color: seagreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    all: unset;
    color: white;
  }
  ul {
    display: flex;
    li {
      margin-left: 80px;
    }
  }
`;
const LOGO = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <SHeader>
      <LOGO>
        <Link to={"/"}>LOGO</Link>
      </LOGO>
      <ul>
        <li>
          <Link to={"/sub01"}>SUB01</Link>
        </li>
        <li>
          <Link to={"/sub02"}>SUB02</Link>
        </li>
      </ul>
    </SHeader>
  );
};
