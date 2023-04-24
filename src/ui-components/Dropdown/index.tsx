/* eslint-disable no-unused-vars */
import React, { useState, ChangeEvent } from 'react'
import IconUp from '../../assets/images/arrow-up.png'
import IconDown from '../../assets/images/arrow-down.png'

import { Container, DropdownSection, StyledInput, InputWrapper, DropdownItem } from './Dropdown.styles'

interface DropdownProps {
  value: string
  placeholder?: string
  label?: string
  values: string[]
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSelect: (data: string) => void
  onClick?: () => void
}

export const Dropdown = ({ values, onSelect, ...props }: DropdownProps) => {
  const [isShown, setIsShown] = useState<boolean>(false)
  const openDropdown = () => setIsShown(true)
  const closeDropdown = () => setTimeout(() => setIsShown(false), 200)

  return (
    <Container>
      <InputWrapper>
        <StyledInput {...props} icon={isShown ? IconDown : IconUp} onBlur={closeDropdown} onFocus={openDropdown} />
      </InputWrapper>
      {values.length > 0 && (
        <DropdownSection aria-expanded={isShown}>
          {values.map((value, id) => (
            <DropdownItem key={id} onClick={() => onSelect(value)}>
              {value}
            </DropdownItem>
          ))}
        </DropdownSection>
      )}
    </Container>
  )
}
