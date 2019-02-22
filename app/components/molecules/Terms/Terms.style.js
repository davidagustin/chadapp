// packages
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen'
// modules
import { percentage } from '../../../utilities'

const terms = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: wp('10%'),
    width: wp('90%')
  }
})

export default terms
