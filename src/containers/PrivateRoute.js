import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

// Redirect to Login component if haven't authenticated.
class PrivateRoute extends Component {
  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props
    return (
      <Route {...rest} render={props => (
        isAuthenticated ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated
})
  
export default withRouter(connect(mapStateToProps, null)(PrivateRoute))