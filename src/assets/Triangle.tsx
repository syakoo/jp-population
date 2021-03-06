import React from 'react'

// ____________________
//
export const Triangle: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="10,80, 90,80 50,15" />
  </svg>
)
