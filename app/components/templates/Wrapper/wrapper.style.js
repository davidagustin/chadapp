/* eslint-disable camelcase */

// packages
import { StyleSheet } from 'react-native'

// modules
import { WRAPPER_HEIGHT, WRAPPER_WIDTH } from '../../atoms/'

/**
 * @file Manages the wrapper component styles.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const ada_wrapper = StyleSheet.create({
  wrapper: {
    display: 'flex',
    height: WRAPPER_HEIGHT,
    width: WRAPPER_WIDTH
  }
})

export default ada_wrapper
