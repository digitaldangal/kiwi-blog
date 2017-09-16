import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import BlogHeader from './components/BlogHeader'
import About from './components/About'
import Article from './components/Article'
import ArticleTable from './components/ArticleTable'
import CardListContainer from './containers/CardListContainer'
import data from './api/data'

class App extends Component {
  render() {
    const { Content, Footer } = Layout
    const articles = data.map(article => ({
      id: article.id,
      title: article.title,
      author: article.author,
      date: Date.now(),
      traffic: article.traffic
    }))
    return (
      <Router>
        <Layout className='layout'>
          <BlogHeader/>
          <Content style={{ padding: '0 50px', marginTop: '64px'}}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Route exact path="/" render={() => <CardListContainer/>}/>
            <Route path="/list" render={() => <ArticleTable articles={articles}/>}/>
            <Route path="/about" component={About}/>
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

export default App;
