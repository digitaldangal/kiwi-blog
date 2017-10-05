import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Table, Modal, Row, Col, Button, message } from 'antd'
import Operation from '../components/ArticleManager/Operation'
import { updateArticle, deleteArticleAsyn } from '../actions/articles'

const confirm = Modal.confirm
const EDITOR_URL = '/user/articlesManager/editor'

class ArticlesManager extends Component {

  componentDidUpdate() {
    if (this.props.isSuccess) {
      message.success('Operation success')
    }
  }

  handleMenuClick = (record, e,) => {
    const { dispatch,  history } = this.props
    if (e.key === '1') {
      dispatch(updateArticle(record.key))
      history.push(EDITOR_URL)
    } else if (e.key === '2') {
      confirm({
        title: 'Are you sure delete this article?',
        content: 'When clicked the OK button, this article will be deleted and can not be rolled back.',
        okText: 'OK',
        cancelText: 'Cancle',
        onOk () {
          dispatch(deleteArticleAsyn(record.key))
        }
      })
    }
  }

  handleClick = () => {
    this.props.history.push(EDITOR_URL)
  }
  
  render() {
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
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
      }, {
        title: 'Operations',
        key: 'operations',
        width: 100,
        render: (text, record) => {
          return <Operation onMenuClick={e => this.handleMenuClick(record, e)}
            menuOptions={[{ key: '1', name: 'Update' }, { key: '2', name: 'Delete' }]} />
        }
      }
    ]
    return <div>
      <Row style={{ marginBottom: 12, textAlign: 'right' }}>
        <Col>
          <Button type='primary' onClick={this.handleClick}>Create</Button>
        </Col>
      </Row>
      <Table pagination={false} columns={columns}
        loading={this.props.isFetching || this.props.isOperating} 
        dataSource={this.props.data}
      />
    </div>
  }
}

const mapStateToProps = state => ({
  data: state.articles.data.map(article => ({
      ...article,
      date: new Date(article.date).toLocaleDateString()
  })),
  isFetching: state.articles.isFetching,
  isOperating: state.articles.isOperating,
  isSuccess: state.articles.isSuccess
})

export default withRouter(connect(mapStateToProps, null)(ArticlesManager))