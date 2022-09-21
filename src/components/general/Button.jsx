import styled from "styled-components";

const StyledButton = styled.button`
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || "0"};
  padding: 10px 20px;
  color: ${(props) => props.background || props.theme.colors.primary};
  font-size: ${(props) => props.fontSize || props.theme.fontSize};
  border-radius: ${(props) => props.borderRadius || props.theme.borderRadius};
  text-transform: capitalize;
  border: ${(props) => props.border};
  background: ${(props) => props.background || props.theme.colors.secondary};
  &:focus {
    outline: none;
  }
`;

export const Button = (props) => {
  return <StyledButton {...props}></StyledButton>;
};
