import React, { useCallback, useState } from 'react'

import { _DisplayBody, _ToggleButton, _Triangle } from './ToggledDetails.styles'
import { _Card } from '@src/components/atoms/Card'

// ____________________
//
interface ToggledDetailsProps {
  summary: string
  initialState?: boolean
}

// ____________________
//
const ToggledDetails: React.FC<ToggledDetailsProps> = ({
  summary,
  initialState = false,
  children,
}) => {
  const [isDisplay, setIsDisplay] = useState(initialState)

  const toggleDisplayState = useCallback(() => {
    setIsDisplay((isDisplay) => !isDisplay)
  }, [setIsDisplay])

  return (
    <_Card>
      <_ToggleButton data-testid="summary" onClick={toggleDisplayState}>
        <_Triangle isDisplay={isDisplay} />
        {summary}
      </_ToggleButton>
      {isDisplay && <_DisplayBody>{children}</_DisplayBody>}
    </_Card>
  )
}

// ____________________
//

export default ToggledDetails
