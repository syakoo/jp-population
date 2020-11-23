import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import PTGraphBody from './PTGraphBody'

// ____________________
//
const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => ({
    graphDataValuePerYear: [
      { 12: 3, 45: 6, year: 9 },
      { 12: 9, 45: 3, year: 6 },
    ],
    selectedPrefectures: [
      { prefCode: 12, prefName: 'PREF_12' },
      { prefCode: 45, prefName: 'PREF_45' },
    ],
    prefectures: [],
  })),
  useDispatch: () => mockDispatch,
}))

// ____________________
//
describe('<PTGraph>', () => {
  it('should be rendered without error', () => {
    render(<PTGraphBody />)
  })
})
