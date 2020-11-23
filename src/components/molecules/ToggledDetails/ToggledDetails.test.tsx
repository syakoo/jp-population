import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import ToggledDetails from './ToggledDetails'

// ____________________
//
describe('<ToggledDetails>', () => {
  it('should render the summary and test-id.', () => {
    const { getByText, getByTestId } = render(
      <ToggledDetails summary="TITLE" />
    )

    expect(getByText('TITLE')).toBeInTheDocument()
    expect(getByTestId('summary')).toBeInTheDocument()
  })

  it('should work toggle behavior.', () => {
    const { queryByText, getByTestId } = render(
      <ToggledDetails summary="TITLE">
        <div>HOGE</div>
      </ToggledDetails>
    )
    expect(queryByText('HOGE')).not.toBeInTheDocument()
    
    // Click the Element to open details.
    fireEvent.click(getByTestId('summary'))
    expect(queryByText('HOGE')).toBeInTheDocument()
    
    // Click the Element to close details.
    fireEvent.click(getByTestId('summary'))
    expect(queryByText('HOGE')).not.toBeInTheDocument()
  })
})
