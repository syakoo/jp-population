import styled from 'styled-components'
import React from 'react'
import { connect } from 'react-redux'

import type { RootState } from '@src/store/types'

// ____________________
//
type ErrorBoundaryProps = {
  children: React.ReactNode
} & ReturnType<typeof mapStateToProps>

interface ErrorBoundaryState {
  errorMsg?: string
}

// ____________________
//
class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  public state: ErrorBoundaryState = {
    errorMsg: undefined,
  }

  public static getDerivedStateFromError(err: Error): ErrorBoundaryState {
    return { errorMsg: err.message }
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    const errorMsgs: string[] = []
    if (this.props.populationTransitionsMsg)
      errorMsgs.push(this.props.populationTransitionsMsg)
    if (this.props.prefecturesMsg) errorMsgs.push(this.props.prefecturesMsg)
    if (this.state.errorMsg) errorMsgs.push(this.state.errorMsg)

    return (
      <>
        {errorMsgs.length ? (
          <_ErrorDiv>
            <h1>
              エラーが発生しました。リロードしても直らない場合は報告してください。
            </h1>
            <ul>
              {errorMsgs.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </_ErrorDiv>
        ) : null}
        {this.props.children}
      </>
    )
  }
}

// ____________________
//
const _ErrorDiv = styled.div`
  background-color: ${(p) => p.theme.red};
  color: ${(p) => p.theme.white};
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  h1 {
    font-size: 1.2rem;
  }
`

// ____________________
//
const mapStateToProps = (state: RootState) => ({
  prefecturesMsg: state.prefectures.errorMsg,
  populationTransitionsMsg: state.populationTransitions.errorMsg,
})

export default connect(mapStateToProps)(ErrorBoundary)
