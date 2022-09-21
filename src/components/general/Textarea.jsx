import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  border-radius: ${(props) => props.theme.borderRadius};
  resize: none;
  border: ${(props) => props.border || "none"};
  &:focus {
    outline: none;
  }
`;

export const Textarea = (props) => {
  return <StyledTextarea {...props}></StyledTextarea>;
};
