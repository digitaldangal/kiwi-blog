import React from 'react'
import { 
  LineChart,
  Line,
  XAxis, 
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip, 
  ResponsiveContainer
} from 'recharts'
import color from '../../constants/color.js'

const VisitChart = ({ data }) => {
  return (
    <div>
      <div style={{marginLeft: '32px', marginBottom: '32px', fontSize: '16px'}}>Visit History</div>
      <ResponsiveContainer minHeight={360}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke={color.purple} />
          <Line type="monotone" dataKey="pv" stroke={color.blue} />
          <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={{ stroke: color.borderBase, strokeWidth: 1 }} tickLine={false}/>
          <YAxis axisLine={false} tickLine={false}/>
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VisitChart
