import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import Searcher from '../containers/Searcher'
const Header = Layout.Header
const SubMenu = Menu.SubMenu

const BlogHeader = ({ isAuthenticated, currentSelectedKey, selectTab, logout, history }) => {
  return (
  <Header style={{ position: 'fixed', width: '100%', zIndex: '999',  backgroundColor: '#fff'}}>
    <Searcher/>
    <Menu
      mode='horizontal'
      defaultSelectedKeys={['1']}
      selectedKeys={[currentSelectedKey]}
      onClick={({ key }) => {
        selectTab(key)
        if (isAuthenticated && key === '4') {
          logout()
        }
      }}
      style={{ lineHeight: '64px', float: 'right', display: 'flex', paddingRight: '16px' }}>
      <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item key='2'><Link to='/list'>Articles</Link></Menu.Item>
      <Menu.Item key='3'><Link to='/about'>About</Link></Menu.Item>
      { !isAuthenticated ?
        <Menu.Item key='4'><Link to='/user'><Icon type="user"/></Link></Menu.Item> :
        <SubMenu key='subMenu' 
          onTitleClick={() => {
            selectTab('4')
            history.push('/user')
          }}
          title={<Icon type="user"/>}>
          <Menu.Item key="4">Sign out</Menu.Item>
        </SubMenu>
      }
    </Menu>
  </Header>
)}

export default BlogHeader
