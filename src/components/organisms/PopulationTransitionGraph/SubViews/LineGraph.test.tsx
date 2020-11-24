import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import LineGraph from './LineGraph'

// ____________________
//
const mockGraphDataValuePerYear = [
  {
    1: 100,
    2: 200,
    year: 2000,
  },
  {
    1: 101,
    2: 201,
    year: 2001,
  },
]
const mockPrefectures: PrefectureWithSelection[] = [
  {
    prefCode: 1,
    prefName: 'A',
    selected: true,
  },
  {
    prefCode: 2,
    prefName: 'B',
    selected: true,
  },
]
const mockColors: string[] = ['#111', '#222']

// ____________________
//
describe('<LineGraph>', () => {
  it('should be rendered without error.', () => {
    render(
      <LineGraph
        graphDataValuePerYear={mockGraphDataValuePerYear}
        selectedPrefectures={mockPrefectures}
        colors={mockColors}
      />
    )
  })
})
