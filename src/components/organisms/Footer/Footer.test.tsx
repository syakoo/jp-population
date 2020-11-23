import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Footer from './Footer'

// ____________________
//
describe('<Footer>', () => {
  it('should render a title text.', () => {
    const { getByText } = render(<Footer />)

    expect(getByText('JP Population')).toBeInTheDocument()
  })

  it('should render a link to RESAS.', () => {
    const { getByText } = render(<Footer />)

    expect(getByText('RESAS（地域経済分析システム）')).toHaveAttribute(
      'href',
      'https://opendata.resas-portal.go.jp/'
    )
  })
})
