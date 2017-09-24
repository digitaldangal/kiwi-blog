import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import { fetchArticlesIfNeeded, filterArticles } from '../actions'

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
    this.props.fetchArticlesIfNeeded()
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({orderBy: sorter})
  }

  render() {
    let orderBy = this.state.orderBy
    const columns = [
      {
        title: 'Date',
        dataIndex: 'dateString',
        key: 'date',
        sorter: (a, b) => a.date - b.date,
        sortOrder: orderBy.columnKey === 'date' && orderBy.order,
      }, {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        sorter: (a, b) => a.title.localeCompare(b.title),
        sortOrder: orderBy.columnKey === 'title' && orderBy.order,
        render: (title, record) => {
          const url = '/articles/' + record.key
          return <Link to={url}>{title}</Link>
        }
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
      />
  }

}

const mapStateToProps = state => ({
  data: filterArticles(state.articles.data, state.articles.keywords).map(article => ({
      ...article,
      // we create a new field 'dataString' rather than overwrite
      // 'date' field in order to sort date in a more precise way.
      dateString: new Date(article.date).toLocaleDateString()
  })),
  isFetching: state.articles.isFetching
})

const mapDispatchToProps = dispatch => ({
  fetchArticlesIfNeeded: () => dispatch(fetchArticlesIfNeeded())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTableContainer)