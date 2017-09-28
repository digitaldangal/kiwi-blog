import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import { fetchArticlesIfNeeded, filterArticles, searchTag } from '../actions'

class CardListContainer extends Component {
  // fetch articles when Component is mounted
  componentDidMount() {
    this.props.fetchArticlesIfNeeded()
  }

  render() {
    return <CardList data={this.props.data} isFetching={this.props.isFetching} searchTag={this.props.searchTag}/>
  }
}

const mapStateToProps = state => ({
  data: filterArticles(state.articles.data, state.articles.keywords, state.articles.tagFilter),
  isFetching: state.articles.isFetching
})

const mapDispatchToProps = dispatch => ({
  fetchArticlesIfNeeded: () => dispatch(fetchArticlesIfNeeded()),
  searchTag: (tag) => dispatch(searchTag(tag))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer)