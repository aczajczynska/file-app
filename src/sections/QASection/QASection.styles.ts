import styled from "theme/styled-components";

export const QASection = styled.div`
    height: 80vh;
    background: linear-gradient(90deg, rgba(65,179,163,1) 24%, rgba(132,205,200,1) 100%);
`;

export const HeaderQAContainer = styled.div`
    padding-top: ${({ theme }) => theme.spacing.normal};
    padding-bottom: ${({ theme }) => theme.spacing.huge};
`;
