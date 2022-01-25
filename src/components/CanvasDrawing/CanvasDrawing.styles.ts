import styled from "theme/styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid red;

  @media (min-width: 768px) {
    /* height: 65vh;
    width: 100%; */
  }
`;

export const CanvasSpace = styled.div`
  border: 2px solid green;
  width: 100%;
  height: 80%;
`;
