/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import RF from 'react-native-responsive-fontsize'

// config
import { 
  BASE, FONT_LARGE
} from '../../../config/style'

// modules
import { size, percentage } from '../../../utilities'


const ads_onboard = StyleSheet.create({
  div: {
    display: 'flex',
    alignItems: 'center',
    height: wp('100%'),
    width: wp('100%'), 
  },
  chadLogo: {
    width: wp('28%'),
    height: wp('40%'),
  },
  plus_symbol: {
    position: 'absolute',
    top: wp('52%')
  },
  location_logo: {
    width: wp('30%'),
    height: wp('38%'),
  },
  chatroom_logo: {
    width: wp('30%'),
    height: wp('28%'),
    position: 'absolute',
    top: wp('46%'),
    right: wp('10%')
  },
  speaker_logo: {
    width: wp('22%'),
    height: wp('31%'),
    position: 'absolute'
  },
  audio_waves: {
    width: wp('80%'),
    height: wp('80%'),
    position:'absolute'
  },
  header: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  back_button: {
    position: 'absolute',
    top: wp('11%'),
    right: wp('40%')
  },
  skip_button: {
    position: 'absolute',
    top: wp('11%'),
    right: wp('-45%'),
  },
  skip_button_text: {
    color: BASE.light,
    fontSize: RF(2.5),
    fontWeight: '300'
  },
  circle_logo_surrounding: {
    position: 'absolute',
    top: wp('6%'),
    width: wp('93%'),
    height: wp('93%')
  },
  forward_button_surrounding: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
    backgroundColor: '#38d59d',
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5, 
    bottom: wp('-80%'),
  },
  forward_button: {
    width: wp('50%'),
    height: hp('100%')
  },
  forward_button_content: {},
  heading: {
    color: BASE.light,
    fontSize: RF(7),
    fontWeight: '300',
    textAlign: 'center'
  },
  text_container: {
    flex: 1,
    alignItems: 'center',
  },
  first_subheading: {
    color: BASE.light,
    fontSize: RF(3),
    fontWeight: '300',
    textAlign: 'center',
    top: wp('20%'),
    width: wp('90%'),
  },
  following_subheading: {
    color: BASE.light,
    fontSize: RF(2.5),
    fontWeight: '300',
    textAlign: 'center',
    position: 'absolute',
    top: hp('8%'),
    left: wp('-45%'),
    width: wp('90%'),
  },
  thicker_subheading: {
    color: BASE.light,
    fontSize: RF(4), 
    fontWeight: '300',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    left: wp('-25.5%'),
    top: hp('20%'),
    marginTop: size(-160)
  },
  btn: {
    backgroundColor: '#38d59d',
    borderRadius: wp('6%'),
    height: wp('13%'),
    width: wp('63%'),
    top: wp('-20%')
  }, 
  btn_text: {
    color: BASE.light,
    fontSize: RF(3.5),
    textAlign: 'center',
    marginTop: wp('2.5%')
  },
  btn_wrapper: {
    padding: size(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,  
    elevation: 8
  },
  progress_bar_wrapper: {
    backgroundColor: '#38d59d',
    borderRadius: wp('5%'),
    height: wp('7.75%'),
    width: wp('70%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    position: 'absolute',
  },
  progress_bar_inner: {
    backgroundColor: '#FFFFFF',
    borderRadius: size(20),
    height: wp('7.4%'),
    width: wp('24.7%'),
    marginTop: wp('-6.5%'),
    marginRight: wp('33.3%')
  },
  background_circle: {
    position: 'absolute',
   
  },
})

export default ads_onboard