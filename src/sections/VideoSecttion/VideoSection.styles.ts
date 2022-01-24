import styled from "theme/styled-components";

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;

  @media (min-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`;

export const VideoContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;

  @media (min-width: 768px) {
    height: 70vh;
    width: 100%;
  }
`;

export const ControlText = styled.p``;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;
