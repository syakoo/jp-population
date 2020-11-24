import styled from 'styled-components'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { _Card } from '@src/components/atoms/Card'
import { graphDataSelector } from './graphDataSelector'
import NoSelectedView from './SubViews/NoSelectedView'
import LoadingView from './SubViews/LoadingView'
import LineGraph from './SubViews/LineGraph'

// ____________________
//
const getRandomColors = (num: number) => {
  const result: string[] = []
  for (let i = 0; i < num; i++) {
    result.push(`hsl(${360 * Math.random()}, 51%, 33%)`)
  }
  return result
}

// ____________________
//
const PopulationTransitionGraph: React.FC = () => {
  const graphData = useSelector(graphDataSelector)
  const loadingStatus = useSelector(
    (state) => state.populationTransitions.loadingStatus
  )
  const colors = useMemo(() => getRandomColors(47), [])

  return (
    <_WrappedCard>
      <LineGraph
        graphDataValuePerYear={graphData.graphDataValuePerYear}
        selectedPrefectures={graphData.selectedPrefectures}
        colors={colors}
      />
      {graphData.selectedPrefectures.length !== 0 &&
        loadingStatus === 'PENDING' && <LoadingView />}
      {graphData.selectedPrefectures.length === 0 && <NoSelectedView />}
    </_WrappedCard>
  )
}

// ____________________
//
const _WrappedCard = styled(_Card)`
  position: relative;
  overflow: hidden;
`

// ____________________
//

export default React.memo(PopulationTransitionGraph)
