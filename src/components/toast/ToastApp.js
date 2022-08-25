import React from 'react'

const ToastApp = () => {
  return (
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    {/* <img src="..." className="rounded me-2" alt="..."> */}
    <strong className="me-auto">Bootstrap</strong>
    <small>Hace 11 minutos</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    ¡Hola Mundo! Este es un mensaje de toast.
  </div>
</div>
  )
}

export default ToastApp