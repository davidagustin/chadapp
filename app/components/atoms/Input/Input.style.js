/* eslint-disable camelcase */

// packages
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen'

// config
import { FONT_SMALL, BASE, PURPLE } from '../../../config/style'

// modules
import { size } from '../../../utilities/'

/**
 * @file Input component styles
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const ada_input = StyleSheet.create({
  input: {
    borderBottomWidth: size(1),
    fontSize: FONT_SMALL,
    marginBottom: hp('1%'),
    marginTop: hp('2%'),
    width: wp('85%')
  },
  dark: {
    borderBottomColor: PURPLE.med,
    color: PURPLE.med
  },
  light: {
    borderBottomColor: BASE.light,
    color: BASE.light
  },
  untouched: {
    fontWeight: '300'
  },
  touched: {
    fontWeight: '500'
  }
})

export default ada_input
