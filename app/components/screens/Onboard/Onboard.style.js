/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import { StyleSheet } from 'react-native'

// modules
import { 
  PURPLE, GREEN, BASE, FONT_XXXXL, FONT_LARGE, FONT_MEDIUM, FONT_SMALL
} from '../../atoms'
import { size, percentage } from '../../../utilities'

const ads_onboard = StyleSheet.create({
  div: {
    display: 'flex',
    alignItems: 'center',
    height: percentage(100),
    width: percentage(100),
     
  },
  chadLogo: {
    width: 100,
    height: 100
  },
  heading: {
    color: BASE.light,
    fontSize: size(80),
    fontWeight: '300',
    textAlign: 'center'
  },
  subheading: {
    color: BASE.light,
    fontSize: FONT_LARGE,
    fontWeight: '300',
    textAlign: 'center',
    width: percentage(90)
  },
  btn: {
    backgroundColor: '#41f4d0',
    borderRadius: size(20),
    height: size(45),
    width: size(260),
    
  }, 
  btn_text: {
    color: BASE.light,
    fontSize: size(25),
    textAlign: 'center',
    marginTop: size(8)
  },
  btn_wrapper: {
    padding: size(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
})

export default ads_onboard