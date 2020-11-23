import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import NoSelectedView from './NoSelectedView'

// ____________________
//
describe('<NoSelectedView>', () => {
  it('should be rendered the expected text.', () => {
    const { getByText } = render(<NoSelectedView />)

    expect(
      getByText('[設定] から都道府県を選択してください')
    ).toBeInTheDocument()
  })
})
