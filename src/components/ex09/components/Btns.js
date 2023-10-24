import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const BtnWrap = styled.div`
  margin: 10px 0 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;
const MixBtn = styled.div``;
const RewindBtn = styled.div``;
const PalyBtn = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: magenta;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FastBtn = styled.div``;
const RepeatBtn = styled.div``;

export const Btns = () => {
  return (
    <BtnWrap>
      <MixBtn>
        <FontAwesomeIcon icon={faShuffle} />
      </MixBtn>
      <RewindBtn>
        <FontAwesomeIcon icon={faBackward} />
      </RewindBtn>
      <PalyBtn>
        <FontAwesomeIcon icon={faPause} />
      </PalyBtn>
      <FastBtn>
        <FontAwesomeIcon icon={faForward} />
      </FastBtn>
      <RepeatBtn>
        <FontAwesomeIcon icon={faRepeat} />
      </RepeatBtn>
    </BtnWrap>
  );
};
