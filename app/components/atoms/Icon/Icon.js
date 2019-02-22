/* eslint-disable camelcase */

// packages
import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// styles
import { PURPLE, ICON_SIZE } from '../../../config/style'

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

  /**
   * This function takes one argument, an Ionicon icon name, and prefixes the
   * approriate device label unless the icon is a logo.
   *
   * @param {string} name - Ionicon icon name
   * @returns {string} prefixed icon name unless icon is a logo
   */
  static icon = name => name.includes('logo-') ? name : `${Platform.OS}-${name}`

  /**
   * Renders an icon.
   *
   * @returns {Ionicons} Ionicon icon
   */
  render = () => {
    const { icon } = Icon
    const { name, size, color } = this.props

    let style = {
      name: icon(name), size: size || ICON_SIZE, color: color || PURPLE.med
    }

    return <Ionicons {...style} />
  }
}
