import React from "react";
import styled from "styled-components";

const StyledAddPost = styled.button`
  position: fixed;
  right: 35px;
  bottom: 35px;
  border: none;
  font-size: 40px;
  width: 80px;
  height: 80px;
  border-radius: ${(props) => props.radius || props.theme.borderRadius};
  background: ${(props) => props.background || props.theme.colors.primary};
  &:focus {
    outline: none;
  }
`;

export const AddPostButton = (props) => {
  return <StyledAddPost {...props}></StyledAddPost>;
};
