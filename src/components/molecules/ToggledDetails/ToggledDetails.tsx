import React, { useCallback, useState } from 'react'

import {
  _DisplayBody,
  _ToggleButton,
  _ToggledDisplayWrapper,
} from './ToggledDetails.styles'

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
    <_ToggledDisplayWrapper>
      <_ToggleButton data-testid="summary" onClick={toggleDisplayState}>
        {summary}
      </_ToggleButton>
      {isDisplay && <_DisplayBody>{children}</_DisplayBody>}
    </_ToggledDisplayWrapper>
  )
}

// ____________________
//
export default ToggledDetails
