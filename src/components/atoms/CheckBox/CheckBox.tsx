import styled from 'styled-components'
import React from 'react'

// ____________________
//
interface CheckBoxProps {
  checked: boolean
  onChange: () => void
  label?: string
}

// ____________________
//
const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange, label }) => {
  return (
    <>
      <_Label>
        <input
          type="checkbox"
          aria-label="input-checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label}
      </_Label>
    </>
  )
}

// ____________________
//
const _Label = styled.label`
  margin: 0px 0.2em;
  display: inline-block;
`

export default CheckBox
