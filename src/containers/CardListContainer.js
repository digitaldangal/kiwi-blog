import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import { fetchArticlesIfNeeded } from '../actions'

class CardListContainer extends Component {
  // fetch articles when Component is mounted
  componentDidMount() {
    this.props.fetchArticlesIfNeeded()
  }

  render() {
    return <CardList data={this.props.data} isFetching={this.props.isFetching}/>
  }
}

const mapStateToProps = state => ({
  data: state.articles.data,
  isFetching: state.articles.isFetching
})

const mapDispatchToProps = dispatch => ({
  fetchArticlesIfNeeded: () => dispatch(fetchArticlesIfNeeded()),
  //onRating: dispatch(),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer)