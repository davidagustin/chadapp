/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen'

// modules
import { BASE, FONT_SMALL, FONT_MEDIUM } from '../../../config/style'
import { size, percentage } from '../../../utilities'

const screen = StyleSheet.create({
  div: {
    display: 'flex',
    alignItems: 'center',
    width: wp('100%')
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
  title: {
    fontSize: FONT_SMALL,
    fontWeight: '600',
    marginBottom: wp('5.5%')
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
