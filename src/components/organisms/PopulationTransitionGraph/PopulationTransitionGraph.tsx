import styled from 'styled-components'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

import { _Card } from '@src/components/atoms/Card'
import { graphDataSelector } from './graphDataSelector'
import NoSelectedView from './SubViews/NoSelectedView'
import LoadingView from './SubViews/LoadingView'

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
      <ResponsiveContainer width="100%" minHeight={400}>
        <LineChart
          margin={{ top: 40, right: 20, left: 0, bottom: 10 }}
          data={graphData.graphDataValuePerYear}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{
              value: '[年]',
              position: 'insideBottomRight',
              offset: -10,
            }}
          />
          <YAxis
            label={{
              value: '[万人]',
              position: 'insideTop',
              offset: -25,
            }}
            tickFormatter={(label) => `${Math.round(+label / 10000)}`}
          />
          <Tooltip />
          <Legend />
          {graphData.selectedPrefectures.map((d, i) => (
            <Line
              key={d.prefCode}
              type="monotone"
              dataKey={d.prefCode}
              name={d.prefName}
              stroke={colors[i]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
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
