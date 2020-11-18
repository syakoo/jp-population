import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { _H1 } from './Heading'

// ____________________
//
describe('<_H1>', () => {
  test('It should render the children.', () => {
    const { getByText } = render(<_H1>JP Population</_H1>)

    expect(getByText('JP Population')).toBeInTheDocument()
  })
})
