import React from 'react'
import ReactDOM from 'react-dom'

import { MainLayout } from './components/layouts'
import { PTGraphBody } from './components/templates/PTGraphBody'

// ____________________
//
const Index: React.FC = () => {
  return (
    <MainLayout>
      <PTGraphBody />
    </MainLayout>
  )
}

// ____________________
//
ReactDOM.render(<Index />, document.getElementById('root'))
