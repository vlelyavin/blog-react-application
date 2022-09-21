import styled from "styled-components";

const StyledAddPost = styled.button`
  position: fixed;
  width: 80px;
  height: 80px;
  right: 35px;
  bottom: 35px;
  font-size: 40px;
  border: none;
  border-radius: ${(props) => props.radius || props.theme.borderRadius};
  background: ${(props) => props.background || props.theme.colors.primary};
  &:focus {
    outline: none;
  }
`;

export const AddPostButton = (props) => {
  return <StyledAddPost {...props}></StyledAddPost>;
};
