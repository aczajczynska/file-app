import ReactDom from 'react-dom'
import React, { FC } from 'react'
import { RenderType } from 'types'

import { StyledOverlay, StyledClose, StyledModalContainer } from './RModal.styles'

interface Props {
  children: RenderType
  onClose: () => void
  open: boolean
}

export const RModal: FC<Props> = ({ open, children, onClose }) => {
  if (!open) return null

  return ReactDom.createPortal(
    <StyledOverlay>
      <StyledClose onClick={onClose}>X</StyledClose>
      <StyledModalContainer>{children}</StyledModalContainer>
    </StyledOverlay>,

    document.getElementById('table-portal') as HTMLElement
  )
}
