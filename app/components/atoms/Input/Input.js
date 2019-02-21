/* eslint-disable camelcase */

// packages
import React from 'react'
import { TextInput } from 'react-native'

// styles
import ada_input from './Input.style'

export default class Input extends React.Component {
  render = () => {
    let { style } = this.props

    return <TextInput style={{ ...style, ...ada_input.input }}{...this.props} />
  }
}
