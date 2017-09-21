import { Editor as SlateEditor } from 'slate-react'
import { State } from 'slate'

import React from 'react'
const data = {
  "document": {
  "nodes": [
    {
      "kind": "block",
      "type": "paragraph",
      "nodes": [
        {
          "kind": "inline",
          "type": "emoji",
          "isVoid": true,
          "data": {
            "code": "🍔"
          }
        }
      ]
    }
  ]}
}

const EMOJIS = [
  '😃', '😬', '😂', '😅', '😆', '😍',
  '😱', '👋', '👏', '👍', '🙌', '👌',
  '🙏', '👻', '🍔', '🍑', '🍆', '🔑',
]

const schema = {
  nodes: {
    paragraph: props => <p>{props.children}</p>,
    emoji: (props) => {
      const { isSelected, node } = props
      const { data } = node
      const code = data.get('code')
      return <span className={`emoji ${isSelected ? 'selected' : ''}`} {...props.attributes} contentEditable={false}>{code}</span>
    }
  }
}

class Editor extends React.Component {

  state = {
    state: State.fromJSON(data)
  }

  onChange = ({ state }) => {
    this.setState({ state })
  }

  onClickEmoji = (e, code) => {
    e.preventDefault()
    const change = this.state.state
      .change()
      .insertInline({
        type: 'emoji',
        isVoid: true,
        data: { code }
      })

    this.onChange(change)
  }

  renderToolbar = () => {
    return (
      <div className="menu toolbar-menu">
        {EMOJIS.map((emoji, i) => {
          const onMouseDown = e => this.onClickEmoji(e, emoji)
          return (
            <span key={i} className="button" onMouseDown={onMouseDown}>
              <span className="material-icons">{emoji}</span>
            </span>
          )
        })}
      </div>
    )
  }

  renderEditor = () => {
    return (
      <div>
        <SlateEditor
          schema={schema}
          state={this.state.state}
          onChange={this.onChange}
        />
      </div>
    )
  }

  render = () => {
    return (
      <div>
        {this.renderToolbar()}
        {this.renderEditor()}
      </div>
    )
  }

}

export default Editor