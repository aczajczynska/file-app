import React from 'react'
import { Toast } from 'react-bootstrap'

interface BootstrapToastProps {
  show: boolean
  onClose: () => void
}

export const BootstrapToast = ({ show, onClose }: BootstrapToastProps) => {
  return (
    <Toast show={show} onClose={onClose} animation={true} autohide>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">Success!</strong>
        <small>cloudinary.com</small>
      </Toast.Header>
      <Toast.Body>Yeees! Success! Files sent correctly!</Toast.Body>
    </Toast>
  )
}
