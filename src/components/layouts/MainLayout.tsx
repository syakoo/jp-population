import styled, { ThemeProvider } from 'styled-components'
import React from 'react'

import { theme, GlobalStyle } from './style'
import { Header } from '@src/components/organisms/Header'

// ____________________
//
const Main: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle {...theme} />
        <Header />
        <_Main>{children}</_Main>
      </>
    </ThemeProvider>
  </>
)

// ____________________
//
const _Main = styled.main`
  max-width: 800px;
  margin: auto;
`

export default Main
