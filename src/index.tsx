import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { MainLayout } from './components/layouts'
import { ErrorBoundary } from './components/templates/ErrorBoundary'
import { PTGraphBody } from './components/templates/PTGraphBody'
import { store } from './store'

// ____________________
//
const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        <ErrorBoundary>
          <PTGraphBody />
        </ErrorBoundary>
      </MainLayout>
    </Provider>
  )
}

// ____________________
//
ReactDOM.render(<Index />, document.getElementById('root'))
