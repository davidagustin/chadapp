/**
 * @file Onboarding screen configuration
 * @author Jacob Metzinger <jacob.adam.metzinger@gmail.com>
 */

import { Animated } from 'react-native'
import { ads_onboard } from '../components/screens/Onboard/Onboard.style'

const ONBOARD_ANIMATION_POSITIONS = {
  chad_logo: new Animated.ValueXY({ x: 0, y: 110 }),
  get_started_button: new Animated.ValueXY({ x: 6, y: 260 }),
  chad_heading: new Animated.ValueXY({ x: 0, y: 40 }),
  progress_bar_wrapper: new Animated.ValueXY({ x: -270, y: 550 }),
  progress_bar_inner: new Animated.ValueXY({ x: 0, y: 25 }),
  location_logo: new Animated.ValueXY({ x: 70, y: 3 }),
  next_screen_button: new Animated.ValueXY({x: 280, y: -30}),
  speaker_logo: new Animated.ValueXY({x: 140, y: -150}),
  audio_waves: new Animated.ValueXY({x: -285, y: 65}),
  background_circle_top_left: new Animated.ValueXY({x: -240, y: -250}),
  background_cicle_middle_right: new Animated.ValueXY({x: 380, y: 120}),
  background_circle_center: new Animated.ValueXY({x: 20, y: 800}),
}

const ONBOARD_ANIMATION_FADE_RESIZE = {
  center_circle_fade: new Animated.Value(1),
  first_subheading_fade: new Animated.Value(1), 
  second_subheading_fade: new Animated.Value(0),
  third_subheading_fade: new Animated.Value(0),
  fourth_subheading_fade: new Animated.Value(0),
  header_fade: new Animated.Value(0),
  plus_fade: new Animated.Value(0),
  chat_room_fade: new Animated.Value(0),
  location_logo_fade: new Animated.Value(0),
  heading_resize: new Animated.Value(ads_onboard.heading.fontSize)
}

const ICON_ANIMATIONS = [
  {
    style: [ads_onboard.background_cirlce, ONBOARD_ANIMATION_POSITIONS.background_circle_center.getLayout()],
    source: require('../assets/images/centerCircle.png'),
    type: 'Image'
  },
  {
    style: [ads_onboard.background_cirlce, ONBOARD_ANIMATION_POSITIONS.background_cicle_middle_right.getLayout()],
    source: require('../assets/images/circleMiddleRight.png'),
    type: 'Image'
  },
  {
    style: [ads_onboard.circle_logo_surrounding, {opacity: ONBOARD_ANIMATION_FADE_RESIZE.center_circle_fade}],
    source: require('../assets/images/Oval.png'),
    type: 'Image'
  },
	{
		style: [ads_onboard.chad_logo, ONBOARD_ANIMATION_POSITIONS.chad_logo.getLayout()],
		source: require('../assets/images/logoOnboard.png'),
		type: 'Image'
  },
  {
    style: [ads_onboard.location_logo, ONBOARD_ANIMATION_POSITIONS.location_logo.getLayout(), {opacity: ONBOARD_ANIMATION_FADE_RESIZE.location_logo_fade}],
    soure: require('../assets/images/LocationSymbol.png'),
    type: 'Image'
  },
  {
    style: [ads_onboard.heading, ONBOARD_ANIMATION_POSITIONS.chad_heading.getLayout(), { fontSize: ONBOARD_ANIMATION_CONFIG.heading_resize }],
    text: 'Chad',
    type: 'Text'
  }, 
  {
    style: [ads_onboard.plus_symbol, {opacity: ONBOARD_ANIMATION_FADE_RESIZE.plus_fade}],
    source: require('../assets/images/plus.png'),
    type: 'Image'
  },
  {
    style: [ads_onboard.chatroom_logo, {opacity: ONBOARD_ANIMATION_CONFIG.chat_room_fade}],
    source: '../assets/images/Chatrooms.png',
    type: 'Image'
  },
  {
    style: [ads_onboard.speaker_logo, ONBOARD_ANIMATION_POSITIONS.speaker_logo.getLayout()],
    source: require('../assets/images/Speaker.png'),
    type: 'Image'
  },
  {
    style: [ads_onboard.audio_waves, ONBOARD_ANIMATION_POSITIONS.audio_waves.getLayout()],
    source: require('../assets/images/AudioWaves.png'),
    type: 'Image'
  }
]

const circle_top_left_image_source = {
  circle_top_left: {
    source: require('../assets/images/circleTopLeft.png'),
  }
}


export default { ONBOARD_ANIMATION_POSITIONS, ONBOARD_ANIMATION_FADE_RESIZE, ICON_ANIMATIONS, circle_top_left_image_source }
