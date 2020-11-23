import { keyframes } from 'styled-components'

// ____________________
//
export const slideIn = keyframes`
  from {
    max-height: 0px;
    overflow: hidden;
  }
  to {
    max-height: 50vh;
    overflow: auto;
  }
`

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
