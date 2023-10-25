import {
  faBackward,
  faBars,
  faCaretDown,
  faForward,
  faForwardStep,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";
import { Header } from "./Header";
import { Cover } from "./Cover";
import { PlayTime } from "./PlayTime";
import { BtnWrap } from "./BtnWrap";
import { UserCon } from "./UserCon";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* background-color: ${colors.darkGray}; */
  background-color: #808080;
  color: white;
`;
const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #1b1b1b;
  padding: 50px 20px;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <Container>
        <Header />

        <Cover />

        <PlayTime />

        <BtnWrap />

        <UserCon />
      </Container>
    </Wrap>
  );
};