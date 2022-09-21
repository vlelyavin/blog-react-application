import styled from "styled-components";

const StyledFlex = styled.div`
  display: ${(props) => props.display || "flex"};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justify || "row"};
  align-items: ${(props) => props.align || "stretch"};
  flex-direction: ${(props) => props.direction || "row"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  gap: ${(props) => props.gap || "0"};
  border-radius: ${(props) => props.radius || "0"};
  background: ${(props) => props.background};
`;

export const Flex = (props) => {
  return <StyledFlex {...props}></StyledFlex>;
};
