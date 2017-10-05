import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Row, Form, Input, message } from 'antd'
import { loginAsyn } from '../actions/dashboard'

const FormItem = Form.Item

class Login extends Component {
  componentWillMount() {
    // Global config for message
    message.config({
      top: 100
    })
  }

  handleOk = () => {
    const { validateFieldsAndScroll } = this.props.form
    const { dispatch } = this.props
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch(loginAsyn(values.username, values.password))
    })
  }

  componentWillReceiveProps(nextProps) {
    const { isLoading, isAuthenticated } = this.props
    if (isLoading && (!nextProps.isLoading) && (!isAuthenticated) && (!nextProps.isAuthenticated)) {
      message.error("Login failed")
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { isAuthenticated, isLoading } = this.props

    if (isAuthenticated) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div style={styles.form}>
        <div style={styles.logo}>
          <span style={styles.span}>kiwi blog</span>
        </div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input size="large" onPressEnter={this.handleOk} placeholder="Username" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input size="large" type="password" onPressEnter={this.handleOk} placeholder="Password" />)}
          </FormItem>
          <Row>
            <Button style={styles.button} type="primary" size="large" onClick={this.handleOk} loading={isLoading}>
              Sign in
            </Button>
          </Row>
  
        </form>
      </div>
    )
  }
}
  
const mapStateToProps = state => ({
  isLoading: state.dashboard.login.isLoading,
  isAuthenticated: state.dashboard.login.isAuthenticated
  
})
  
export default connect(mapStateToProps, null)(Form.create()(Login))

const styles = {}
styles.form = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: '-160px 0 0 -160px',
  width: '320px',
  height: '320px',
  padding: '36px',
  boxShadow: '0 0 100px rgba(0,0,0,.08)',
}

styles.button = {
  width: '100%'
}

styles.span = {
  verticalAlign: 'textBottom',
  fontSize: '16px',
  textTransform: 'uppercase',
  display: 'inline-block',
}

styles.logo = {
  textAlign: 'center',
  height: '40px',
  lineHeight: '40px',
  cursor: 'pointer',
  marginBottom: '24px',
}