import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { message } from 'antd'
import ArticleEditor from '../components/Editor/ArticleEditor'
import { saveArticle } from '../actions'

class ArticleEditorContainer extends Component {

  componentWillReceiveProps(nextProps) {
    // save succeed
    if (nextProps.data.length === this.props.data.length + 1) {
      //message.success('Save article success')
      // redirect to home
      this.props.history.push('/')
      
    }
  }

  handleSave = (article) => {
    this.props.saveArticle(article)
  }

  render() {
    return <ArticleEditor isSaving={this.props.isSaving} onClick={this.handleSave}/>
  }
}

const mapStateToProps = state => ({
  isSaving: state.articles.isSaving,
  data: state.articles.data
})

const mapDispatchToProps = dispatch => ({
  saveArticle: (article) => dispatch(saveArticle(article))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleEditorContainer))