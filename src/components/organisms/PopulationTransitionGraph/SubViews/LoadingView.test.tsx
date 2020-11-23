import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import LoadingView from './LoadingView'

// ____________________
//
describe('<LoadingView>', () => {
  it('should be rendered without error.', () => {
    render(<LoadingView />)
  })
})
