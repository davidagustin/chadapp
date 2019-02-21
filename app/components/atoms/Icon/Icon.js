/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// atoms
import { PURPLE } from '../base/colors.style'
import { ICON_SIZE } from '../base/typography.style'

// styles
import ada_icon from './Icon.style'

/**
 * Class representing an icon.
 *
 * @class Icon
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Icon extends React.Component {
  static DEFAULT_STYLE = ada_icon

  static icon = name => name.includes('logo-') ? name : `${Platform.OS}-${name}`

  /**
   * Renders an icon.
   *
   * @returns {Ionicons}
   */
  render = () => {
    const { DEFAULT_STYLE, icon } = Icon
    const { name, size, color } = this.props

    let style = {
      name: icon(name), size: size || ICON_SIZE, color: color || PURPLE.med
    }

    return <Ionicons {...style} />
  }
}
