import styled from "theme/styled-components";

export const VideoContainer = styled.div`
    height: 90vh;
    width: 100%;
`;

export const VideoContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60%;
    margin-top: 30px;

     @media (max-width: 580px ) {
        width: 100%;
        height: 40%;
    };
`;

export const ControlText = styled.p``;