import React from 'react'
import './form-input.style.css'

const FormInput = ({ handleChange, label, type, ...otherProps }) => {
  return (
    <div className={'form-group'}>
      {label ? (
        <label className={'form-input-label font-weight-bold'}>{label}</label>
      ) : null}
      <input onChange={handleChange} type={type} {...otherProps} />
    </div>
  )
}
export default FormInput
