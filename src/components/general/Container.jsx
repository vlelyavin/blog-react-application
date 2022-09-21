import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
`;

export const Container = (props) => {
  return <StyledContainer {...props}></StyledContainer>;
};
