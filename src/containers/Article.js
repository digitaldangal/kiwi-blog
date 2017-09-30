import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readArticle } from '../actions/articles'
import { HTMLRenderer } from 'ory-editor-renderer'
import { plugins } from '../components/Editor/ArticleEditor'
import '../components/Editor/styles.css'

class Article extends Component {
  componentWillMount() {
    const { readArticle, article } = this.props
    readArticle(article.key)
  }

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

const mapDispatchToProps = dispatch => ({
  readArticle: (key) => dispatch(readArticle(key))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Article)