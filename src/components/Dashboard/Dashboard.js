import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import CountUpCard from './CountUpCard'
import VisitChart from './VisitChart'
import UsageChart from './UsageChart'

const data = [
  { name: '10-01', uv: 1000, pv: 2400 },
  { name: '10-02', uv: 3090, pv: 4567 },
  { name: '10-03', uv: 2807, pv: 1398 },
  { name: '10-04', uv: 2040, pv: 9800 },
  { name: '10-05', uv: 5787, pv: 8430 },
  { name: '10-06', uv: 1893, pv: 4800 },
  { name: '10-07', uv: 8529, pv: 7863 },
  { name: '10-08', uv: 7382, pv: 5120 },
  { name: '10-09', uv: 3229, pv: 6753 },
  { name: '10-10', uv: 1873, pv: 3927 },
  
]

const data2 = [
  { name: '00:00', cpu: 12, memory: 83 },
  { name: '01:00', cpu: 23, memory: 45 },
  { name: '02:00', cpu: 30, memory: 67 },
  { name: '03:00', cpu: 28, memory: 18 },
  { name: '04:00', cpu: 20, memory: 98 },
  { name: '05:00', cpu: 27, memory: 22 },
  { name: '06:00', cpu: 18, memory: 48 },
  { name: '07:00', cpu: 89, memory: 48 },
  { name: '08:00', cpu: 87, memory: 32 },
  { name: '09:00', cpu: 27, memory: 66 },
  { name: '10:00', cpu: 21, memory: 29 },
  { name: '11:00', cpu: 45, memory: 39 },
  { name: '12:00', cpu: 39, memory: 87 },
  { name: '13:00', cpu: 87, memory: 60 },
  { name: '14:00', cpu: 89, memory: 51 },
  { name: '15:00', cpu: 98, memory: 73 },
  { name: '16:00', cpu: 100, memory: 19 },
  { name: '17:00', cpu: 87, memory: 7 },
  { name: '18:00', cpu: 63, memory: 38 },
  { name: '19:00', cpu: 21, memory: 18 },
  { name: '20:00', cpu: 12, memory: 20 },
  { name: '21:00', cpu: 33, memory: 29 },
  { name: '22:00', cpu: 29, memory: 53 },
  { name: '23:00', cpu: 10, memory: 66 }
]

class Dashboard extends Component {
  render() {
    return (
      <Row gutter={48}>
        <Col lg={6} md={12}>
          <CountUpCard icon={'user'} title={'User'} number={9933} color={'#64ea91'}/>
        </Col>
        <Col lg={6} md={12}>
          <CountUpCard icon={'book'} title={'Article'} number={329} color={'#8fc9fb'} />
        </Col>
        <Col lg={6} md={12}>
          <CountUpCard icon={'message'} title={'Message'} number={1863} color={'#d897eb'}/>
        </Col>
        <Col lg={6} md={12}>
          <CountUpCard icon={'notification'} title={'Notification'} number={52} color={'#f69899'}/>
        </Col>
        <Col lg={24} md={24}>
          <Card bordered={false} style={{ marginBottom: '24px'}}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <VisitChart data={data}/>
          </Card>
        </Col>
        <Col lg={24} md={24}>
          <Card bordered={false} 
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <UsageChart data={data2}/>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Dashboard