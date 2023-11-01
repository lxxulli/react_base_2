import styled from "styled-components";

const Message = styled.span`
  color: #ccc;
  font-weight: 500;
  margin-top: 10px;
`;

export const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};
