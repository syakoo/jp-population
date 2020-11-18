import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { MainLayout } from './components/layouts'
import { PTGraphBody } from './components/templates/PTGraphBody'
import { store } from './store'

// ____________________
//
const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        <PTGraphBody />
      </MainLayout>
    </Provider>
  )
}

// ____________________
//
ReactDOM.render(<Index />, document.getElementById('root'))
