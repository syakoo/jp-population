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
    <div>
      <label>
        <input
          type="checkbox"
          aria-label="input-checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  )
}

// ____________________
//
export default CheckBox
