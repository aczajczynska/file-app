import styled from "theme/styled-components";

export const VideoContainer = styled.div`
    height: 90vh;
    width: 100%;
`;

export const VideoContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70%;

     @media (max-width: 580px ) {
        width: 100%;
        height: 40%;
    };
`;

export const AudioContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 23px;

    @media (max-width: 580px ) {
        padding-top: 10px;
    }
`;

export const ControlText = styled.p``;

export const Video = styled.video``;

export const Audio = styled.audio`
    margin-top: 10px;

     @media (max-width: 580px ) {
        margin-top: 5px;
    }
`;