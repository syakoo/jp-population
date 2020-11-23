import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import MainLayout from './MainLayout'

// ____________________
//
describe('<MainLayout>', () => {
  it('should render the children.', () => {
    const { getByText } = render(
      <MainLayout>
        <h1>Hello, World.</h1>
      </MainLayout>
    )

    expect(getByText('Hello, World.')).toBeInTheDocument()
  })
})
