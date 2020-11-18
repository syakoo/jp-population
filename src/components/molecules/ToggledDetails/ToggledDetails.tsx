import React, { useCallback, useState } from 'react'

// ____________________
//
interface ToggledDetailsProps {
  summary: string
}

// ____________________
//
const ToggledDetails: React.FC<ToggledDetailsProps> = ({
  summary,
  children,
}) => {
  const [isDisplay, setIsDisplay] = useState(false)

  const toggleDisplayState = useCallback(() => {
    setIsDisplay((isDisplay) => !isDisplay)
  }, [setIsDisplay])

  return (
    <div>
      <div data-testid="summary" onClick={toggleDisplayState}>
        {summary}
      </div>
      {isDisplay && <div>{children}</div>}
    </div>
  )
}

export default ToggledDetails
