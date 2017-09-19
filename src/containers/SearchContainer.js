import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import { search } from '../actions'

const Search = Input.Search

class SearchContainer extends Component {
  handleSearch = (value) => {
    const keywords = value.split(' ')
    this.props.onSearch(keywords)
  }
  render() {
    return <Search
            placeholder='input search text'
            style={{ width: 150 }}
            onSearch={this.handleSearch}/>
  }
}

const mapDispatchToProps = dispatch => ({
  onSearch: (keywords) => dispatch(search(keywords))
})

export default connect(null, mapDispatchToProps)(SearchContainer)