import styled from 'styled-components'

import { slideIn } from '@src/assets/keyframes'

// ____________________
//
export const _ToggledDisplayWrapper = styled.div`
  background-color: ${(p) => p.theme.white};
  border-radius: 5px;
  padding: 0.25rem;
`

export const _ToggleButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: left;
  border: none;
  background-color: inherit;
  color: ${(p) => p.theme.primary};
  font-size: 1rem;
`

export const _DisplayBody = styled.div`
  animation: ${slideIn} 0.5s forwards;
  padding: 0.25rem;
`
