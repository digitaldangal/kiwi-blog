import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import BlogHeader from './BlogHeader'
import Article from '../containers/Article'
import ArticleEditorContainer from '../containers/ArticleEditorContainer'
import ArticleTable from '../containers/ArticleTable'
import CardListContainer from '../containers/CardListContainer'
import Dashboard from '../containers/Dashboard'
import ArticlesManager from '../containers/ArticlesManager'
import About from './About'

class App extends Component {
  render() {
    const { Content, Footer } = Layout
    return (
      <Router>
        <Layout style={{ minHeight:'100vh' }}>
          <BlogHeader/>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Route exact path="/" component={CardListContainer}/>
            <Route path="/list" component={ArticleTable}/>
            <Route path="/about" component={About}/>
            <Route exact path="/user" component={Dashboard}/>
            <Route exact path="/user/articlesManager" component={ArticlesManager} />
            <Route path="/user/articlesManager/editor" component={ArticleEditorContainer} />
            <Route path="/articles/:id" component={Article}/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            kiwi-blog ©2017 Created by kennylbj
          </Footer>
        </Layout>
      </Router>
    )
  }
}

export default App
