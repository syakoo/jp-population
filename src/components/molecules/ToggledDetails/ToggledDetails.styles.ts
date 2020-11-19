import styled from 'styled-components'

import { slideIn } from '@src/assets/keyframes'
import { Triangle } from '@src/assets/Triangle'

// ____________________
//
export const _ToggleButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: left;
  border: none;
  background-color: inherit;
  color: ${(p) => p.theme.primary};
  font-size: 1rem;
  display: flex;
  align-items: center;
  :hover {
    filter: brightness(0.9);
  }
`

export const _Triangle = styled(Triangle)<{ isDisplay: boolean }>`
  margin-right: 0.2em;
  height: 1rem;
  transform: rotate(${(p) => (p.isDisplay ? 180 : 90)}deg);
  transition: 0.3s;
  fill: ${(p) => p.theme.primary};
`

export const _DisplayBody = styled.div`
  animation: ${slideIn} 0.5s forwards;
  padding: 0.25rem;
`
