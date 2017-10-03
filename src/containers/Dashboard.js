import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Spin } from 'antd'
import CountUpCard from '../components/Dashboard/CountUpCard'
import VisitChart from '../components/Dashboard/VisitChart'
import UsageChart from '../components/Dashboard/UsageChart'
import color from '../constants/color.js'
import { fetchDashboardIfNeeded } from '../actions/dashboard'

class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDashboardIfNeeded())
  }

  handleClickArticles = () => {
    this.props.history.push('/user/articlesManager')
  }

  render() {
    const { visitors, articles, visit, usage, isFetching } = this.props
    return (
      isFetching ? <Spin size="large"/> : 
      <Row gutter={48}>
        <Col lg={6} md={12}>
          <CountUpCard icon={'team'} title={'Visitors'} number={visitors} color={color.green}/>
        </Col>
        <Col lg={6} md={12}>
          <CountUpCard icon={'book'} title={'Articles'} number={articles} color={color.blue} 
          handleClick={this.handleClickArticles}/>
        </Col>
        <Col lg={6} md={12}>
          <CountUpCard icon={'message'} title={'Messages'} number={1863} color={color.purple}/>
        </Col>
        <Col lg={6} md={12}>
          <CountUpCard icon={'notification'} title={'Notifications'} number={52} color={color.red}/>
        </Col>
        <Col lg={24} md={24}>
          <Card bordered={false} style={{ marginBottom: '24px'}}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <VisitChart data={visit}/>
          </Card>
        </Col>
        <Col lg={24} md={24}>
          <Card bordered={false} 
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <UsageChart data={usage}/>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  visitors: state.dashboard.visitors,
  usage: state.dashboard.usage,
  visit: state.dashboard.visit,
  isFetching: state.dashboard.isFetching,
  articles: state.articles.data.length
})

export default withRouter(connect(mapStateToProps, null)(Dashboard))