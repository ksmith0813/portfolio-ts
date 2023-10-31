import { treeMapData } from 'data/charts/treeMapData'
import { Treemap as TreeRemap, ResponsiveContainer } from 'recharts'

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D']

const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, colors, name } = props

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : '#ffffff00',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <text x={x + width / 2} y={y + height / 2 + 7} textAnchor='middle' fill='#fff' fontSize={14}>
          {name}
        </text>
      ) : null}
      {depth === 1 ? (
        <text x={x + 4} y={y + 18} fill='#fff' fontSize={16} fillOpacity={0.9}>
          {index + 1}
        </text>
      ) : null}
    </g>
  )
}

export const TreeMap = () => (
  <ResponsiveContainer width='100%' height='100%'>
    <TreeRemap
      width={400}
      height={200}
      data={treeMapData}
      dataKey='size'
      stroke='#fff'
      fill='#8884d8'
      content={<CustomizedContent colors={COLORS} />}
    />
  </ResponsiveContainer>
)
