import styled from "styled-components";

const SErrorMessage = styled.div`
  color: #ccc;
  font-weight: 500;
  margin-top: 10px;
`;

export const ErrorMessage = ({ text }) => {
  return <SErrorMessage>{text}</SErrorMessage>;
};
