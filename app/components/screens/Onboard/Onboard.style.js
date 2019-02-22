/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import { StyleSheet } from 'react-native'

// modules
import { 
  PURPLE, GREEN, BASE 
} from '../../atoms'
import { size, percentage } from '../../../utilities'

const ads_onboard = StyleSheet.create({
  btn: {
    backgroundColor: '#41f4d0',
    borderRadius: size(25),
    height: size(60),
    marginBottom: size(10),
    marginTop: size(10),
    width: size(260)
  }, 
  btn_text: {
    color: BASE.light
  }
})

export default ads_onboard