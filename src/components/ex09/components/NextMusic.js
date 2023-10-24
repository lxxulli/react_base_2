import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const NextMusicWrap = styled.div`
  margin-top: 30px;
  padding: 10px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
`;
const NextImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(https://i.namu.wiki/i/ZaIyzXIwNrmKkcPz-bG4PQYEAGzi4AA87QZBs0We3Pld-XiUr8UCUOvWOqkFouJ7rP0AUQk5BFTsRgbbIKiMgA.webp)
    no-repeat center / cover;
`;
const NextName = styled.div`
  margin-left: 10px;
`;
const NextBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 150px;
`;

export const NextMusic = () => {
  return (
    <NextMusicWrap>
      <NextImg></NextImg>
      <NextName>DPR Live</NextName>
      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </NextMusicWrap>
  );
};
