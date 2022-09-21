import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "row"};
  align-items: ${(props) => props.align || "stretch"};
  flex-direction: ${(props) => props.direction || "row"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius || "0"};
  gap: ${(props) => props.gap || "0"};
`;

export const Flex = (props) => {
  return <StyledFlex {...props}></StyledFlex>;
};
