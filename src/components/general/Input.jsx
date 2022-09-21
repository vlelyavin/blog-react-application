import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  &:focus {
    outline: none;
  }
`;

export const Input = (props) => {
  return <StyledInput {...props}></StyledInput>;
};
