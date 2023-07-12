import React from 'react'
import '../../styles/UI/Dialog.css'

const Dialog = props => {
  return (
    <div 
      className='dialog'
      onClick={() => props.setDialogShow(false)}
    >
      <div 
        className="dialog__content"
        onClick={e => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Dialog