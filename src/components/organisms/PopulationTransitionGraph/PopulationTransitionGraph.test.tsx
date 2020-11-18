import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import PopulationTransitionGraph from './PopulationTransitionGraph'

// ____________________
//
describe('Header Component', () => {
  test('renders a title text.', () => {
    const { getByText } = render(<PopulationTransitionGraph />)

    // expect(getByText('JP Population')).toBeInTheDocument()
  })
})
