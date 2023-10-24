import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TopWrap = styled.div`
  /* padding: 30px; */
  display: flex;
  justify-content: space-between;
`;
const LeftBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const RightBtn = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;

export const TopBtn = () => {
  return (
    <TopWrap>
      <LeftBtn>
        <FontAwesomeIcon icon={faAngleDown} />
      </LeftBtn>
      <RightBtn>
        <FontAwesomeIcon icon={faBars} />
      </RightBtn>
    </TopWrap>
  );
};
