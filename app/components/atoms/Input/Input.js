/* eslint-disable camelcase */

// packages
import React from 'react'
import { TextInput } from 'react-native'

// styles
import ada_input from './Input.style'

/**
 * Class representing an input field.
 *
 * @class Input
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Input extends React.Component {
  state = { touched: false }
  /**
   * Renders a text input. For a list of properties, please reference the link
   * below.
   *
   * @param {object} props - TextInput properties
   * @returns {TextInput} text input
   * [Reference]{@link https://facebook.github.io/react-native/docs/textinput}
   */
  render = () => {
    const { touched } = this.state
    let { style, theme } = this.props
    let ui = theme === 'dark' ? ada_input[theme] : ada_input.light

    let focused = touched ? ada_input.touched : ada_input.untouched
    style = [ada_input.input, ui, (focused), style]

    return (
      <TextInput
        {...this.props}
        style={style}
        onBlur={() => {
          const { value, onBlur } = this.props
          this.setState(state => ({ touched: !state.touched }))
          if (this.props.onBlur) this.props.onBlur()
        }}
        onFocus={() => {
          this.setState(state => ({ touched: !state.touched }))
          if (this.props.onFocus) this.props.onFocus()
        }}
      />
    )
  }
}
