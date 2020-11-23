import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { LoadingSkeletons } from './LoadingSkeletons'

// ____________________
//
describe('<LoadingSkeletons>', () => {
  it('should be rendered collectly.', () => {
    const { getAllByTestId } = render(<LoadingSkeletons num={10} />)

    expect(getAllByTestId('skeleton').length).toBe(10)
  })
})
