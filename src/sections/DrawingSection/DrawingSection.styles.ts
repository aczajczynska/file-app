import styled from "theme/styled-components";

export const DrawingContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 100vw;

  background-color: pink;

  @media (min-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`;
