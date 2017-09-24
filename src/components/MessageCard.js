import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Rate, Tag } from 'antd'
import { HTMLRenderer } from 'ory-editor-renderer'
import { plugins } from '../components/Editor/ArticleEditor'
import '../components/Editor/styles.css'
// TODO 
const HtmlView = content => {
  return <div className="editable editable-area">
      <HTMLRenderer state={content.content} plugins={plugins} />
    </div>
}

const MessageCard = ({id, title, tags, content, rate, loading}) => {
  let tgs
  if (tags !== undefined) {
    tgs = tags.map(tag => <Tag key={tag}>{tag}</Tag>)
  }
  const url = '/articles/' + id
  return <Card
    title={<Link to={url}>{title}</Link>}
    extra={tgs}
    loading={loading}
    style={{ width: '100%' }}>
      <HtmlView content={content}/>
      <div style={{ textAlign: 'center' }}>
        <Rate allowHalf defaultValue={rate} />
      </div>
    </Card>
}

MessageCard.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  rate: PropTypes.number
}

export default MessageCard