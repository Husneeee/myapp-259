import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loading = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner size="lg" animation="border" variant="success" />
    </div>
  )
}