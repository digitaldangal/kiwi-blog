import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tag } from 'antd'
import { HTMLRenderer } from 'ory-editor-renderer'
import { plugins } from './Editor/ArticleEditor'
import './Editor/styles.css'
import Rater from '../containers/Rater'

// TODO 
const HtmlView = content => {
  return <div className="editable editable-area">
      <HTMLRenderer state={content.content} plugins={plugins} />
    </div>
}

const MessageCard = ({id, title, tags, content, rate, loading, searchTag}) => {
  let tgs
  if (tags !== undefined) {
    tgs = tags.map(tag => <Tag key={tag} onClick={() => {
      console.log(tag)
      searchTag(tag)
    }}>{tag}</Tag>)
  }
  const url = '/articles/' + id
  return <Card 
    title={<Link to={url} style={{ color: 'black' }}>{title}</Link>}
    extra={tgs}
    loading={loading}
    style={{ width: '100%', marginBottom: '24'}}>
      <HtmlView content={content}/>
      <div style={{ textAlign: 'center' }}>
        <Rater id={id}/>
      </div>
    </Card>
}

export default MessageCard