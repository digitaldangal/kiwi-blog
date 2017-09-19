import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import SearchContainer from '../containers/SearchContainer'
const Header = Layout.Header

const BlogHeader = () => (
  <Header style={{ position: 'fixed', width: '100%', zIndex: '10000' }}>
    <SearchContainer/>
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px', float: 'right' }}>
      <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/list">Articles</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
      <Menu.Item key="4"><Link to="/user"><Icon type="user"/></Link></Menu.Item>
    </Menu>
  </Header>
)

export default BlogHeader