import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Rate, Spin } from 'antd'
import { rating } from '../actions'

class Rater extends Component {

  handleChange = value => {
    const { dispatch, id } = this.props
    // dispatch rate action
    dispatch(rating(id, value))
  }

  // Returns a suitable value for Rate component
  // E.g. [4.2 -> 4], [4.5 -> 4.5], [4.7 -> 4.5], [5.0 -> 5.0]
  getRate = value => {
    const floor = Math.floor(value)
    if (value - floor >= 0.5) {
      return floor + 0.5
    }
    return floor
  }

  render() {
    const {isRating, num, sum} = this.props.rate
    let avg = 0
    if (num !== 0) {
      avg = (sum / num)
    }
    return (
      <span>
        { isRating ? <Spin /> : <Rate allowHalf onChange={this.handleChange} value={this.getRate(avg)}/> }
        <span className="ant-rate-text">Average {avg.toFixed(1)} points</span>
      </span>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const article = state.articles.data.find(article => article.key === ownProps.id)
  return {
    rate: article.rate
  }
}
  
export default connect(mapStateToProps, null)(Rater)