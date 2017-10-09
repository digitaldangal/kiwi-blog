import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectTab } from '../actions/navigation'
import { logout } from '../actions/authenticate'
import BlogHeader from '../components/BlogHeader'

class Header extends Component {
  render() {
    const { currentSelectedKey, isAuthenticated, selectTab, logout, history } = this.props
    return <BlogHeader currentSelectedKey={currentSelectedKey} logout={logout}
      isAuthenticated={isAuthenticated} selectTab={selectTab} history={history}/>
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentSelectedKey: state.navigation.currentSelectedKey,
  isAuthenticated: state.authenticate.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  selectTab: (index) => dispatch(selectTab(index)),
  logout: () => dispatch(logout())
})
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))