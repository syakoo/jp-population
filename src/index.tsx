import React from 'react'
import ReactDOM from 'react-dom'

import { MainLayout } from './components/layouts'

// ____________________
//
const Index: React.FC = () => {
  return (
    <MainLayout>
      <h2>Hello World</h2>
    </MainLayout>
  )
}

// ____________________
//
ReactDOM.render(<Index />, document.getElementById('root'))
