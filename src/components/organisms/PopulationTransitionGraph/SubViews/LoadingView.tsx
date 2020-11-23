import styled from 'styled-components'
import React from 'react'
import AutorenewIcon from '@material-ui/icons/Autorenew'

import { rotate } from '@src/assets/keyframes'

// ____________________
//
const LoadingView: React.FC = () => (
  <_FloatDiv>
    <_Loop fontSize="large" />
  </_FloatDiv>
)

// ____________________
//

const _FloatDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.TranslucentWhite};
`

const _Loop = styled(AutorenewIcon)`
  color: ${(p) => p.theme.primary};
  animation: ${rotate} 1s ease-in-out infinite;
  font-size: 2rem;
`

export default LoadingView
