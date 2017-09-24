import React, { Component } from 'react'

// The editor core
import Editor, { Editable } from 'ory-editor-core'
import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets

// The default ui components
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

// The rich text area plugin
import slate from 'ory-editor-plugins-slate'
import 'ory-editor-plugins-slate/lib/index.css'

// The spacer plugin
import spacer from 'ory-editor-plugins-spacer'
import 'ory-editor-plugins-spacer/lib/index.css'

// The image plugin
import image from 'ory-editor-plugins-image'
import 'ory-editor-plugins-image/lib/index.css'

// The video plugin
import video from 'ory-editor-plugins-video'
import 'ory-editor-plugins-video/lib/index.css'

// The parallax plugin
import parallax from 'ory-editor-plugins-parallax-background'
import 'ory-editor-plugins-parallax-background/lib/index.css'

// The html5-video plugin
import html5video from 'ory-editor-plugins-html5-video'
import 'ory-editor-plugins-html5-video/lib/index.css'

// The native handler plugin
import native from 'ory-editor-plugins-default-native'

// The divider plugin
import divider from 'ory-editor-plugins-divider'

import uuidv4 from 'uuid/v4'

import { Form, Icon, Input, Button } from 'antd'

// The content state
import content from './content.js'
import './styles.css'

// react-tap-event-plugin is required for material-ui which is used by ory-editor-ui
require('react-tap-event-plugin')()

// Define which plugins we want to use (all of the above)
export const plugins = {
  content: [slate(), spacer, image, video, divider, html5video],
  layout: [parallax({ defaultPlugin: slate() })],

  // If you pass the native key the editor will be able to handle native drag and drop events (such as links, text, etc).
  // The native plugin will then be responsible to properly display the data which was dropped onto the editor.
  native
}

const editor = new Editor({
  plugins: plugins,
  // pass the content states
  editables: [
    content[0]
  ]
})

const Controls = () => <div>
  <Trash editor={editor} />
  <DisplayModeToggle editor={editor} />
  <Toolbar editor={editor} />
</div>

const EditableArea = () => <div className="container">
  <div className="editable editable-area">
    <Editable
        editor={editor}
        id="1"
    />
  </div>
</div>

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
        const content = editor.query.editable('1')
        const article = {
          key: uuidv4(),
          title: values.articleTitle,
          author: values.author,
          date: Date.now(),
          content,
          traffic: 0,
          rate: 0
        }
        this.props.onClick(article)
      }
    })
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
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

const ArticleSaver = Form.create()(Saver);

const ArticleEditor = (props) => {
  return <div>
    <EditableArea/>
    <Controls/>
    <ArticleSaver onClick={props.onClick} isSaving={props.isSaving}/>
  </div>
}

export default ArticleEditor
