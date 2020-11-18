import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import PrefectrueSelection from './PrefectrueSelection'

// ____________________
//
describe('Header Component', () => {
  test('renders a title text.', () => {
    const { getByText } = render(<PrefectrueSelection />)

    // expect(getByText('JP Population')).toBeInTheDocument()
  })
})
