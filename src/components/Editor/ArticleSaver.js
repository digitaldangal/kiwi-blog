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

  handleCreate = (values, content, onCreate) => {
    const article = {
      key: uuidv4(),
      title: values.articleTitle,
      author: values.author,
      date: Date.now(),
      tags: values.tags || [],
      content: content,
      traffic: 0,
      rate: {
        num: 0,
        sum: 0,
        isRating: false
      }
    }
    onCreate(article)
  }

  handleUpdate = (values, article, onUpdate) => {
    const updatedArticle = {
      ...article,
      title: values.articleTitle,
      author: values.author,
      tags: values.tags
    }
    onUpdate(updatedArticle)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, article, onCreate, onUpdate, isCreate } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        if (isCreate) {
          this.handleCreate(values, article.content, onCreate)
        } else {
          this.handleUpdate(values, article, onUpdate)
        }
      }
    })
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const { isOperating, isCreate } = this.props
    const { title, author, tags } = this.props.article
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
            initialValue: title
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
            initialValue: author
          })(
            <Input prefix={<Icon type='user'/>} placeholder="Author"  />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('tags', {valuePropName: 'tags', initialValue: tags})(<ArticleTags />)}
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            htmlType='submit'
            loading={isOperating}
            disabled={this.hasErrors(getFieldsError())}
          >
            { isCreate ? 'Create' : 'Update' }
          </Button>
        </FormItem>
      </Form>)
  }
}

const ArticleSaver = Form.create()(Saver)

export default ArticleSaver