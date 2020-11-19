import React from 'react'
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

// ____________________
//
const PopulationTransitionGraph: React.FC = () => {
  const graphData = useSelector(graphDataSelector)

  return (
    <_Card>
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
          {graphData.selectedPrefectures.map((d) => (
            <Line
              key={d.prefCode}
              type="monotone"
              dataKey={d.prefCode}
              name={d.prefName}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </_Card>
  )
}

// ____________________
//

export default PopulationTransitionGraph
