import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { message } from 'antd'
import ArticleEditor from '../components/Editor/ArticleEditor'
import { createArticleAsyn, updateArticleAsyn } from '../actions/articles'
import content from '../components/Editor/content.js'

class ArticleEditorContainer extends Component {

  componentDidUpdate() {
    const { isSuccess, history } = this.props
    if (isSuccess) {
      history.push('/')
      message.success('Operation success')
    }
  }

  handleCreate = (article) => {
    this.props.dispatch(createArticleAsyn(article))
  }

  handleUpdate = (article) => {
    this.props.dispatch(updateArticleAsyn(article))
  }

  render() {
    const isCreate = this.props.article === undefined
    const article = isCreate ? { content: content[0] } : this.props.article
    return <ArticleEditor isOperating={this.props.isOperating} onCreate={this.handleCreate}
      onUpdate={this.handleUpdate} article={article} isCreate={isCreate}/>
  }
}

const mapStateToProps = state => {
  return {
    isOperating: state.articles.isOperating,
    isSuccess: state.articles.isSuccess,
    article: state.articles.data.find(article => article.key === state.articles.editingKey)
  }
}

export default withRouter(connect(mapStateToProps, null)(ArticleEditorContainer))