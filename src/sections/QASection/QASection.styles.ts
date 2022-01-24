import styled from "theme/styled-components";

export const QASection = styled.div`
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(65, 179, 163, 1) 24%,
    rgba(132, 205, 200, 1) 100%
  );
  @media (min-width: 768px) {
    height: 70vh;
  }
`;

export const HeaderQAContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing.normal};
  padding-bottom: ${({ theme }) => theme.spacing.huge};
`;
