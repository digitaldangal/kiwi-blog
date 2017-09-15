import React from 'react'
import { withRouter } from 'react-router-dom'
import { Table } from 'antd'

const columns = [{
  title: 'Date',
  dataIndex: 'date',
  key: 'date'
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Author',
  dataIndex: 'author',
  key: 'author',
}, {
  title: 'Traffic',
  dataIndex: 'traffic',
  key: 'traffic',
}]

const ArticleTable = (props) => {
  return <Table pagination={false} columns={columns} dataSource={props.articles}
    onRowClick={(record, index) => {
      props.history.push('/articles/' + record.id)
    }}/>
}

export default withRouter(ArticleTable)