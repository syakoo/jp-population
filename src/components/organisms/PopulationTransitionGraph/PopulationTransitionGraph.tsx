import React from 'react'
import { useSelector } from 'react-redux'

import { _Card } from '@src/components/atoms/Card'
import { graphDataSelector } from './graphDataSelector'

// ____________________
//
const PopulationTransitionGraph: React.FC = () => {
  const graphData = useSelector(graphDataSelector)
  console.log({ graphData })

  return (
    <_Card>
      <div>ここにグラフ</div>
    </_Card>
  )
}

// ____________________
//

export default PopulationTransitionGraph
