import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import Header from '../containers/Header'
import Article from '../containers/Article'
import ArticleEditorContainer from '../containers/ArticleEditorContainer'
import ArticleTable from '../containers/ArticleTable'
import CardListContainer from '../containers/CardListContainer'
import Dashboard from '../containers/Dashboard'
import ArticlesManager from '../containers/ArticlesManager'
import Login from '../containers/Login'
import PrivateRoute from '../containers/PrivateRoute'
import About from './About'

class App extends Component {
  render() {
    const { Content, Footer } = Layout
    return (
      <Router>
        <Switch>
        <Route path='/login' component={Login} />
        <Layout style={{ minHeight:'100vh' }}>
          <Header/>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Route exact path='/' component={CardListContainer} />
            <Route path='/list' component={ArticleTable} />
            <Route path='/about' component={About} />
            <Route path='/articles/:id' component={Article} />
            <PrivateRoute exact path='/user' component={Dashboard} />
            <PrivateRoute exact path='/user/articlesManager' component={ArticlesManager} />
            <PrivateRoute path='/user/articlesManager/editor' component={ArticleEditorContainer} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            kiwi-blog ©2017 Created by kennylbj
          </Footer>
        </Layout>
        </Switch>
      </Router>
    )
  }
}

export default App
