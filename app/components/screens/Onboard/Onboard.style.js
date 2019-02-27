/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import { StyleSheet } from 'react-native'

// modules
import { 
  PURPLE, GREEN, BASE, FONT_XXXXL, FONT_LARGE, FONT_XL, FONT_XXL, FONT_XXXL
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
    width: 120,
    height: 120,
  },
  plus_symbol: {
    position: 'absolute',
    top: 220
  },
  location_logo: {
    width: 120,
    height: 120,
  },
  chatroom_logo: {
    width: 100,
    height: 100,
    position: 'absolute'
  },
  speaker_logo: {
    width: 100,
    height: 100,
    position: 'absolute'
  },
  audio_waves: {
    width: 120,
    height: 120,
    position:'absolute'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  back_button: {
    position: 'absolute',
    top: 60,
    right: 130
  },
  skip_button: {
    position: 'absolute',
    top: 57,
    right: -155,
    color: BASE.light,
    fontSize: size(18),
    fontWeight: '300'
  },
  circle_logo_surrounding: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#7D59DC', 
    marginTop: size(68),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  forward_button_surrounding: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#41f4d0',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  forward_button: {
    width: 40,
    height: 40
  },
  heading: {
    color: BASE.light,
    fontSize: size(72),
    fontWeight: '300',
    textAlign: 'center'
  },
  text_container: {
    flex: 1,
    alignItems: 'center',
  },
  first_subheading: {
    color: BASE.light,
    fontSize: FONT_LARGE,
    fontWeight: '300',
    textAlign: 'center',
    top: -130,
    width: percentage(90),
  },
  following_subheading: {
    color: BASE.light,
    fontSize: size(18),
    fontWeight: '300',
    textAlign: 'center',
    position: 'absolute',
    top: -135,
    left: -170,
    marginTop: size(40),
    width: percentage(90),
  },
  thicker_subheading: {
    color: BASE.light,
    fontSize: size(32), 
    fontWeight: '300',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    left: -120,
    marginTop: size(-160)
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
  progress_bar_wrapper: {
    backgroundColor: '#41f4d0',
    borderRadius: size(20),
    height: size(28),
    width: size(270),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  progress_bar_inner: {
    backgroundColor: '#FFFFFF',
    borderRadius: size(20),
    height: size(28),
    width: size(90),
    marginTop: size(-25),
    marginRight: size(185)
  }
})

export default ads_onboard