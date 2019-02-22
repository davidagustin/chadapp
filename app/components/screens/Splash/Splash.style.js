/* eslint-disable camelcase */

// packages
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen'

// modules
import {
  BASE, PURPLE, FONT_XXXXL, FONT_LARGE, FONT_MEDIUM, WRAPPER_HEIGHT
} from '../../../config/style'
import { size, percentage } from '../../../utilities/'

const ads_splash = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: WRAPPER_HEIGHT,
    width: percentage(100)
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    width: percentage(100)
  },
  heading: {
    color: BASE.light,
    fontSize: FONT_XXXXL,
    fontWeight: '300',
    marginBottom: size(5),
    marginTop: hp('13.5%'),
    textAlign: 'center'
  },
  subheading: {
    color: BASE.light,
    fontSize: FONT_LARGE,
    fontWeight: '300',
    marginBottom: hp('4.5%'),
    marginTop: 0,
    textAlign: 'center',
    width: percentage(90)
  },
  btn: {
    backgroundColor: BASE.light,
    borderRadius: size(5),
    height: size(80),
    marginBottom: size(10),
    marginTop: size(10),
    width: wp('85%')
  },
  btn_wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: percentage(100),
    justifyContent: 'flex-start',
    padding: size(20),
    paddingLeft: size(22.5),
    width: percentage(100)
  },
  btn_text: {
    color: PURPLE.med,
    fontSize: FONT_MEDIUM,
    fontWeight: '500',
    marginLeft: size(15)
  },
  login: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: size(15)
  }
})

export default ads_splash
