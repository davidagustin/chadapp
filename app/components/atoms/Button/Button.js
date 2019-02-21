/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { TouchableOpacity } from 'react-native'

import ada_button from './Button.style'

/**
 * Class representing a button.
 *
 * @class Button
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Button extends React.Component {
  static DEFAULT_STYLE = ada_button

  /**
   * Renders a button.
   *
   * @returns {TouchableOpacity}
   */
  render = () => {
    const { DEFAULT_STYLE } = Button
    const { children, style, onPress } = this.props

    return (
      <TouchableOpacity style={style || DEFAULT_STYLE} onPress={onPress} >
        {children}
      </TouchableOpacity>
    )
  }
}
