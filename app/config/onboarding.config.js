import { Animated } from 'react-native'
import { ads_onboard } from '../components/screens/Onboard/Onboard.style'
import OnboardAnimation from '../components/screens/Onboard/OnboardAnimations'

const ONBOARD_ANIMATION_CONFIG = {
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
  heading_resize: new Animated.Value(ads_onboard.heading.fontSize),
  center_circle_fade: new Animated.Value(1),
  first_subheading_fade: new Animated.Value(1), 
  second_subheading_fade: new Animated.Value(0),
  third_subheading_fade: new Animated.Value(0),
  fourth_subheading_fade: new Animated.Value(0),
  header_fade: new Animated.Value(0),
  plus_fade: new Animated.Value(0),
  location_logo_fade: new Animated.Value(0),
  chat_room_fade: new Animated.Value(0)
}

const ANIMATIONS = [
	{
		style: (this) => {
			return [ads_onboard.chad_logo, this.chad_logo.getLayout()]
		},
		source: require('../assets/images/chad-logo-trans-04.png'),
		type: 'image'
  },
  {
    style: (this) => {
      return [ads_onboard.btn_wrapper, this.get_started_button.getLayout()]
    },
    type:'view'
  },
  {
    style: (this) => {
      return [ads_onboard.heading, this.chad_heading.getLayout(), { fontSize: this.heading_resize }]
    },
    type: 'text'
  }, 
  {
    style: (this) => {
      return [ads_onboard.progress_bar_wrapper, this.progress_bar_wrapper.getLayout()]
    },
    type: 'view'
  },
  {
    style: (this) => {
      return [ads_onboard.progress_bar_inner, this.progress_bar_inner.getLayout()]
    },
    type: 'view'
  }, 
  {
    style: (this) => {
      return [ads_onboard.location_logo, this.location_logo.getLayout()]
    },
    soure: require('../assets/images/LocationSymbol.png'),
    type: 'image'
  },
  {
    style: (this) => {
      return this.next_screen_button.getLayout()
    },
    type: 'view'
  },
  {
    style: (this) => {
      return [ads_onboard.speaker_logo, this.speaker_logo.getLayout()]
    },
    source: require('../assets/images/Speaker.png'),
    type: 'image'
  },
  {
    style: (this) => {
      return [ads_onboard.audio_waves, this.audio_waves.getLayout()]
    },
    source: require('../assets/images/AudioWaves.png'),
    type: 'image'
  },
  {
    style: (this) => {
      return [ads_onboard.background_cirlce, this.background_circle_top_left.getLayout()]
    },
    source: require('../assets/images/circleTopLeft.png'),
    type: 'image'
  }, 
  
]

