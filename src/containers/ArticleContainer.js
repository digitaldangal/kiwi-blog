import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HTMLRenderer } from 'ory-editor-renderer'
import { plugins } from '../components/Editor/ArticleEditor'
import '../components/Editor/styles.css'

class ArticleContainer extends Component {
  render() {
    return <div className="container">
      <div className="editable editable-area">
        <HTMLRenderer state={this.props.article.content} plugins={plugins} />
      </div>
    </div>
  }
}
  
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    article: state.articles.data.find(article => article.key === id)
  }
}
  
export default connect(mapStateToProps, null)(ArticleContainer)