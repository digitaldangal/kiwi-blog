import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import { fetchArticles } from '../actions'

class CardListContainer extends Component {
  // fetch articles when Component is mounted
  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    return <CardList loading={this.props.isFetching} articles={this.props.articles}/>
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
  isFetching: state.isFetching
})

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
  //onRating: dispatch(),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer)