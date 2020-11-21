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
describe('<PrefectureSelection>', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render a title text.', () => {
    const { getByText } = render(<PrefectrueSelection />)

    expect(getByText('設定')).toBeInTheDocument()
  })
})
