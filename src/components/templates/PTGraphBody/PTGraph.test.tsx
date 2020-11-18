import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import PTGraphBody from './PTGraphBody'

// ____________________
//
describe('Header Component', () => {
  test('renders a title text.', () => {
    const { getByText } = render(<PTGraphBody />)

    // expect(getByText('JP Population')).toBeInTheDocument()
  })
})
