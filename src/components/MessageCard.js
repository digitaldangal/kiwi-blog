import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Card, Rate, Tag } from 'antd'

const MessageCard = ({id, title, tags, content, rate, history}) => {
  const tgs = tags.map(tag => <Tag key={tag}>{tag}</Tag>)
  return (<Card
    title={title} 
    extra={tgs}
    style={{ width: "100%" }}
    onClick={() => {history.push('/articles/' + id)}}>
    <div>{content}</div>
    <Rate allowHalf disabled defaultValue={rate} />
    </Card>)
}

MessageCard.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  //content: PropTypes.string,
  rate: PropTypes.number
}

export default withRouter(MessageCard)