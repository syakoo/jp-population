import styled, { ThemeProvider } from 'styled-components'
import React from 'react'

import { theme, GlobalStyle } from './style'
import { Header } from '@src/components/organisms/Header'
import { Footer } from '@src/components/organisms/Footer'

// ____________________
//
const Main: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle {...theme} />
        <_Wrapper>
          <Header />
          <_Main>{children}</_Main>
          <Footer />
        </_Wrapper>
      </>
    </ThemeProvider>
  </>
)

// ____________________
//
const _Main = styled.main`
  width: 800px;
  margin: 0px auto;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const _Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export default Main
