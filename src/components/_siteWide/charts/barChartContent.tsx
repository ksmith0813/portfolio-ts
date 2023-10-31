import { barChartData } from 'data/charts/barChartData'
import {
  BarChart as BarRechart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export const BarChart = () => (
  <ResponsiveContainer width='100%' height='100%'>
    <BarRechart
      width={500}
      height={300}
      data={barChartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='pv' stackId='a' fill='#8884d8' />
      <Bar dataKey='amt' stackId='a' fill='#82ca9d' />
      <Bar dataKey='uv' fill='#ffc658' />
    </BarRechart>
  </ResponsiveContainer>
)
