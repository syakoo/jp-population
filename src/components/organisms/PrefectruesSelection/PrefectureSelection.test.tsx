import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import PrefectrueSelection from './PrefectrueSelection'

// ____________________
//
const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => ({
    prefectures: [],
  })),
  useDispatch: () => mockDispatch,
}))

// ____________________
//
describe('Prefecture Component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('renders a title text.', () => {
    const { getByText } = render(<PrefectrueSelection />)

    expect(getByText('設定')).toBeInTheDocument()
  })
})
