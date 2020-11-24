import React from 'react'
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

// ____________________
//
interface LineGraphProps {
  graphDataValuePerYear: {
    [prefCode: number]: number
    year: number
  }[]
  selectedPrefectures: PrefectureWithSelection[]
  colors: string[]
}

// ____________________
//
const LineGraph: React.FC<LineGraphProps> = ({
  graphDataValuePerYear,
  selectedPrefectures,
  colors,
}) => (
  <ResponsiveContainer width="100%" minHeight={400}>
    <LineChart
      margin={{ top: 40, right: 20, left: 0, bottom: 10 }}
      data={graphDataValuePerYear}
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
      {selectedPrefectures.map((d, i) => (
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
)

// ____________________
//
export default React.memo(LineGraph)
