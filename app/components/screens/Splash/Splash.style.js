/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import { StyleSheet } from 'react-native'

// modules
import {
  BASE, GREEN, PURPLE, UI, FONT_XXXXL, FONT_LARGE, FONT_MEDIUM, FONT_SMALL
} from '../../atoms/'
import { size, percentage } from '../../../utilities/'

const ads_splash = StyleSheet.create({
  heading: {
    color: BASE.light,
    fontSize: FONT_XXXXL,
    fontWeight: '300',
    marginBottom: size(5),
    marginTop: size(125),
    textAlign: 'center'
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    height: percentage(100),
    width: percentage(100)
  },
  subheading: {
    color: BASE.light,
    fontSize: FONT_LARGE,
    fontWeight: '300',
    marginBottom: size(20),
    marginTop: 0,
    textAlign: 'center',
    width: percentage(90)
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: percentage(100)
  },
  btn: {
    backgroundColor: BASE.light,
    borderRadius: size(5),
    height: size(60),
    marginBottom: size(10),
    marginTop: size(10),
    width: size(310)
  },
  btn_wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: percentage(100),
    justifyContent: 'flex-start',
    padding: size(20),
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
  },
  loginText: {
    color: BASE.light,
    fontSize: FONT_SMALL
  },
  loginSpan: {
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

export default ads_splash
