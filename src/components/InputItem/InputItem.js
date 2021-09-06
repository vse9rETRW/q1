import React from 'react'

import './input.sass'

const InputItem = props => {
  const { label, className, onChange } = props
  return (
      <div className={`input-item${' ' + className}`}>
        <div className="label">
          { label }
        </div>
        <input  onChange={e=>onChange(e.target.value)}/>
      </div>
  )
}

export default InputItem