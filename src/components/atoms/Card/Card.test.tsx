import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { _Card } from './Card'

// ____________________
//
describe('<Card>', () => {
  it('should render the children.', () => {
    const { getByText } = render(<_Card>Sample Text</_Card>)

    expect(getByText('Sample Text')).toBeInTheDocument()
  })
})
