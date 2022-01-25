import styled from "theme/styled-components";

export const DrawingContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    height: 65vh;
    width: 100%;
  }
`;
