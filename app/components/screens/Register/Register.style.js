/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen'

// config
import { BASE, FONT_SMALL, WRAPPER_HEIGHT, GREEN, FONT_MEDIUM } from '../../../config/style'

// modules
import { size, percentage } from '../../../utilities/'

const ads_register = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    height: wp('100%'),
    justifyContent: 'flex-start',
    paddingTop: hp('6.75%'),
    width: percentage(100)
  },
  image_btn: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: hp('3.5%'),
    position: 'relative',
    width: wp('100%')
  },
  image: {
    borderRadius: size(5),
    height: wp('22.5%'),
    width: wp('22.5%')
  },
  btn: {
    alignItems: 'center',
    backgroundColor: GREEN.med,
    borderRadius: size(5),
    display: 'flex',
    height: hp('4.5%'),
    justifyContent: 'center',
    marginBottom: hp('4.5%'),
    marginTop: hp('4.5%'),
    width: wp('47.5%')
  },
  btn_text: {
    color: BASE.light,
    fontSize: FONT_SMALL,
    fontWeight: '600',
    textAlign: 'center'
  }
})

export default ads_register
