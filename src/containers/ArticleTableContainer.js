import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Table } from 'antd'
import { fetchArticles } from '../actions'

/**
 * We use react's state manager instead of redux here
 * since it's more concise in this way.
 * We could have used redux by dispatch 'orderBy' actions each
 * time onChange event hanppened rather than modify state of
 * this component directly. And the state would look like:
 * state = {
 *   data: [],
 *   isFetching: false,
 *   orderBy: ''
 * }
 * This approach, however, would increase a lot of complexity
 * by introducing lots of actions and reducer handlers.
 * What's more, we exclude 'orderBy' from state because this
 * state only affect this table view.
 * In general, 'orderBy' function can be self-contained, so it's
 * alright for ‘ArticleTableContainer’ to just use state manager
 * of react directly.
 */

class ArticleTableContainer extends Component {
  state = {
    orderBy: {}
  }

  componentDidMount() {
    this.props.fetchArticles()
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({orderBy: sorter})
  }

  handleRowClick = (record, index) => {
    this.props.history.push('/articles/' + record.key)
  }

  render() {
    let orderBy = this.state.orderBy
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => a.date - b.date,
        sortOrder: orderBy.columnKey === 'date' && orderBy.order,
      }, {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        sorter: (a, b) => a.title.localeCompare(b.title),
        sortOrder: orderBy.columnKey === 'title' && orderBy.order,
      }, {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        sorter: (a, b) => a.author.localeCompare(b.author),
        sortOrder: orderBy.columnKey === 'author' && orderBy.order,
      }, {
        title: 'Traffic',
        dataIndex: 'traffic',
        key: 'traffic',
        sorter: (a, b) => a.traffic - b.traffic,
        sortOrder: orderBy.columnKey === 'traffic' && orderBy.order,
      }
    ]

    return <Table pagination={false} columns={columns}
      loading={this.props.isFetching} 
      dataSource={this.props.data}
      onChange={this.handleChange}
      onRowClick={this.handleRowClick}/>
  }

}

const mapStateToProps = state => ({
  data: state.articles.data,
  isFetching: state.articles.isFetching,
})

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleTableContainer))