import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import uuidv4 from 'uuid/v4'
import ArticleTags from './ArticleTags'

const FormItem = Form.Item

class Saver extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const article = {
          key: uuidv4(),
          title: values.articleTitle,
          author: values.author,
          date: Date.now(),
          tags: values.tags || [],
          content: this.props.content,
          traffic: 0,
          rate: {
            num: 0,
            sum: 0,
            isRating: false
          }
        }
        this.props.onClick(article)
      }
    })
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    // Only show error after a field is touched.
    const articleTitleError = isFieldTouched('articleTitle') && getFieldError('articleTitle')
    const authorError = isFieldTouched('author') && getFieldError('author')

    return (
      <Form layout='inline' style={{ marginTop: 32, textAlign: 'center' }} onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={articleTitleError ? 'error' : ''}
          help={articleTitleError || ''}
        >
          {getFieldDecorator('articleTitle', {
            rules: [{ required: true, message: 'Please input article title' }],
          })(
            <Input prefix={<Icon type='book'/>} placeholder="Article title" />
          )}
        </FormItem>
        <FormItem
          validateStatus={authorError ? 'error' : ''}
          help={authorError || ''}
        >
          {getFieldDecorator('author', {
            rules: [{ required: true, message: 'Please input author' }],
          })(
            <Input prefix={<Icon type='user'/>} placeholder="Author" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('tags', {valuePropName: 'tags'})(<ArticleTags/>)}
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            htmlType='submit'
            loading={this.props.isSaving}
            disabled={this.hasErrors(getFieldsError())}
          >
            Submit
          </Button>
        </FormItem>
      </Form>)
  }
}

const ArticleSaver = Form.create()(Saver)

export default ArticleSaver