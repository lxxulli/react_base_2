import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bg};
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("pink");
  const [num, setNum] = useState(0);

  const onClickBox = () => {
    if (num === 0) {
      setBgColor("seagreen");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("pink");
      setNum(num - 1);
    }
  };

  return (
    <>
      <Box $bg={bgColor} onClick={onClickBox}></Box>
    </>
  );
};
