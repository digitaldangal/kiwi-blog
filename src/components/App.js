import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import BlogHeader from './BlogHeader'
import About from './About'
import Article from './Article'
import Editor from './Editor'
import ArticleTableContainer from '../containers/ArticleTableContainer'
import CardListContainer from '../containers/CardListContainer'

class App extends Component {
  render() {
    const { Content, Footer } = Layout
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
            <Route exact path="/" component={CardListContainer}/>
            <Route path="/list" component={ArticleTableContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/user" component={Editor}/>
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
