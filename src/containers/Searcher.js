import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Tag } from 'antd'
import { search, searchTag } from '../actions/articles'

const Search = Input.Search

class Searcher extends Component {
  handleSearch = (value) => {
    const keywords = value.split(' ')
    this.props.search(keywords)
  }

  handleClose = () => {
    this.props.closeTag()
  }

  render() {
    const tag = this.props.searchTag
    return <span> 
      <Search
        placeholder='input search text'
        style={{ width: 150 }}
        onSearch={this.handleSearch}/>
      { tag !== undefined && <span> 
        <span style={{display: 'inline-block', width: '12px'}}></span>
        <Tag closable onClose={this.handleClose}>{tag}</Tag>
      </span> }
    </span>
  }
}

const mapStateToProps = state => ({
  searchTag: state.articles.tagFilter
})

const mapDispatchToProps = dispatch => ({
  search: keywords => dispatch(search(keywords)),
  closeTag: () => dispatch(searchTag())
})

export default connect(mapStateToProps, mapDispatchToProps)(Searcher)