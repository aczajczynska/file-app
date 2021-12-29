import React, { InputHTMLAttributes } from "react";

import {
  StyledInput,
  InputWrapper,
  Icon,
  Container,
  Label,
  SubLabel,
  LabelSection,
  WarningText,
} from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  label?: string;
  placeholder?: string;
  warning?: string;
  warn?: boolean;
  requiredText?: string;
}

export const Input = ({
  warning,
  warn,
  requiredText,
  icon,
  label,
  ...props
}: InputProps) => {
  return (
    <Container>
      <LabelSection>
        <Label>{label}</Label>
        <SubLabel>{requiredText}</SubLabel>
      </LabelSection>
      <InputWrapper>
        {icon && <Icon src={icon} />}
        <StyledInput {...props} />
      </InputWrapper>
      {warn && <WarningText>{warning}</WarningText>}
    </Container>
  );
};
