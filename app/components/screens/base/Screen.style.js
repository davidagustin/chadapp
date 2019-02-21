/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import { StyleSheet } from 'react-native'

// modules
import { BASE, FONT_SMALL } from '../../atoms'
import { size, percentage } from '../../../utilities'

const screen = StyleSheet.create({
  div: {
    display: 'flex',
    alignItems: 'center',
    height: percentage(100),
    width: percentage(100)
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: percentage(100)
  },
  btn_wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: percentage(100),
    justifyContent: 'flex-start',
    padding: size(20),
    width: percentage(100)
  },
  light_text: {
    color: BASE.light,
    fontSize: FONT_SMALL
  },
  span: {
    fontWeight: '600',
    marginLeft: size(5)
  },
  terms: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: percentage(90)
  }
})

export default screen
