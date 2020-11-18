import { ThemeProvider } from 'styled-components'
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
        <main>{children}</main>
      </>
    </ThemeProvider>
  </>
)

// ____________________
//
export default Main
