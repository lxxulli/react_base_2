import styled from "styled-components";

const BarWrap = styled.div`
  position: relative;
`;
const TimeBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #c0c0c0;
  border-radius: 10px;
`;
const Palybar = styled.div`
  width: 30%;
  height: 5px;
  background-color: magenta;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
`;
const TimeWrap = styled.div`
  color: #c0c0c0;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const Start = styled.div``;
const End = styled.div``;

export const Bar = () => {
  return (
    <>
      <BarWrap>
        <TimeBar></TimeBar>
        <Palybar></Palybar>
      </BarWrap>
      <TimeWrap>
        <Start>00:31</Start>
        <End>03:24</End>
      </TimeWrap>
    </>
  );
};
