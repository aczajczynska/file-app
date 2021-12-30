import { Input } from "../Input";
import styled from "theme/styled-components";

export const Container = styled.div`
  position: relative;
  width: 350px;
`;

export const StyledInput = styled(Input)`
  caret-color: transparent;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const DropdownSection = styled.div`
  position: absolute;
  display: none;
  z-index: 3;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.tiny};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 0.25rem;
  overflow: auto;
  max-height: 120px;

  &[aria-expanded="true"] {
    display: block;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 2px;
    margin-bottom: 2px;
  }
`;

export const DropdownItem = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.minuscule};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 10px;

  :hover {
    background-color: ${({ theme }) => theme.colors.blueSolitude};
  }

  @media (min-width: 768px) {
    height: 38px;
    padding-left: 12px;
    font-size: ${({ theme }) => theme.fontSize.tiny};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;
