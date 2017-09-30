import React from 'react'
import { Icon, Card } from 'antd'
import CountUp from 'react-countup'

const CountUpCard = ({ icon, title, number, color }) => {
  return (
    <Card style={{padding: '32px', marginBottom: '24px', cursor: 'pointer'}} bordered={false} bodyStyle={{ padding: 0 }}>
      <Icon style={{fontSize: '54px', float: 'left', color: color}} type={icon} />
      <div style={{width: '100%', paddingLeft: '78px'}}>
        <p style={{lineHeight: '16px', fontSize: '16px', marginBottom: '8px', height: '16px'}}>{title}</p>
        <p style={{lineHeight: '32px', fontSize: '24px', height: '32px'}}>
          <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
          />
        </p>
      </div>
    </Card>
  )
}

export default CountUpCard
