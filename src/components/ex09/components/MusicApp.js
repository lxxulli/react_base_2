import styled from "styled-components";
import { TopBtn } from "./TopBtn";
import { MainImg } from "./MainImg";
import { Bar } from "./Bar";
import { Btns } from "./Btns";
import { NextMusic } from "./NextMusic";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  height: 800px;
  background-color: #333;
  margin: 100px auto;
  border-radius: 20px;
  padding: 50px;
`;

export const MusicApp = () => {
  return (
    <>
      <Wrap>
        <TopBtn />
        <MainImg />
        <Bar />
        <Btns />
        <NextMusic />
      </Wrap>
    </>
  );
};
