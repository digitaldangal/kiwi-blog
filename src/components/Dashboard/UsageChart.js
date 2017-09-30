import React from 'react'
import color from '../../constants/color.js'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const UsageChart = ({ data }) => {
  return (
    <div >
      <div style={{marginLeft: '32px', marginBottom: '32px', fontSize: '16px'}}>CPU / Memory Usage</div>
      <ResponsiveContainer minHeight={360}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" axisLine={{ stroke: color.borderBase, strokeWidth: 1 }} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="cpu" stroke={color.sky} fill={color.sky} />
          <Area type="monotone" dataKey="memory" stroke={color.grass} fill={color.grass} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UsageChart
