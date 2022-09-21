import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || props.theme.colors.secondary};
  border-radius: ${(props) => props.borderRadius || props.theme.borderRadius};
  background: ${(props) => props.background || props.theme.colors.primary};
`;

export const Title = (props) => {
  return <StyledTitle {...props}></StyledTitle>;
};
