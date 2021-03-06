import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import CheckBox from './CheckBox'

// ____________________
//
describe('<CheckBox>', () => {
  it('should render the label.', () => {
    const { getByLabelText, getByText } = render(
      <CheckBox label="TITLE" checked={false} onChange={() => {}} />
    )

    expect(getByText('TITLE')).toBeInTheDocument()
    expect(getByLabelText('input-checkbox')).toBeInTheDocument()
  })

  it('should work change event.', () => {
    const mockFunc = jest.fn()
    const { getByLabelText } = render(
      <CheckBox label="TITLE" checked={false} onChange={mockFunc} />
    )
    const inputEl = getByLabelText('input-checkbox') as HTMLInputElement
    expect(inputEl.checked).toBeFalsy()

    // Click the Element to fire onChange().
    fireEvent.click(inputEl)
    expect(mockFunc).toBeCalledTimes(1)

    // Click the Element to fire onChange().
    fireEvent.click(inputEl)
    expect(mockFunc).toBeCalledTimes(2)
  })
})
