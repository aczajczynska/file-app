import { InputHTMLAttributes } from 'react'
import styled from 'theme/styled-components'
import { Themed } from 'namespace/theme'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, Themed {
  warn?: boolean
}

export const Container = styled.div`
  width: 350px;
`

export const StyledInput = styled.input`
  border: none;
  width: 100%;
  box-sizing: border-box;
  ${({ theme }) => theme.spacing.minuscule};
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 10px 30px 10px 3px;

  &:focus,
  &:active {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &[disabled] {
    opacity: 0.6;
    color: ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme }) => theme.colors.greyLight};
  }

  @media (min-width: 768px) {
    padding: 12px 30px 12px 5px;
    font-size: ${({ theme }) => theme.fontSize.minuscule};
  }
`

export const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  position: relative;
`

export const Icon = styled.img`
  position: absolute;
  right: 12px;
  width: 10px;
  height: 8px;
  cursor: pointer;
`

export const LabelSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2px;
`

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize.minuscule};
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.tiny};
  }
`

export const SubLabel = styled(Label)`
  font-size: ${({ theme }) => theme.fontSize.tinyXs};
  color: ${({ theme }) => theme.colors.grey};
`

export const WarningText = styled(SubLabel)`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.tinyXs};
  margin-left: 3px;
`

export const InputInfo = styled.div`
  text-decoration: underline;
  position: absolute;
  right: 12px;
  font-size: ${({ theme }) => theme.fontSize.tinyXs};
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
`
