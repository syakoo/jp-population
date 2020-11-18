import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './Header'

// ____________________
//
describe('Header Component', () => {
  test('renders a title text.', () => {
    const { getByText } = render(<Header />)

    expect(getByText('Population Transition Graph')).toBeInTheDocument()
  })
})
