/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

//controllers
import { Animation } from '../../../controllers' 

// config
import { ONBOARD_ANIMATION_POSITIONS, ONBOARD_ANIMATION_FADE_RESIZE } from '../../../config/onboard.config'

const CONFIG = Object.assign({}, {...ONBOARD_ANIMATION_POSITIONS, ...ONBOARD_ANIMATION_FADE_RESIZE})
export default class OnboardAnimation extends Animation {
	constructor(config) {
		super()
		this.animations = Object.assign({}, CONFIG)
	}
	
	// Can Reach this Page On Both and Backward Press
  goToSecondScreen = (direction) => {
		// const { translate, changeAppearance } = super
		const { animations } = this

    // Moving Get Started Button Off Screen
    super.translate(animations.get_started_button, 12, 580, 800)

    // Moving Chad Logo to New Position
    super.translate(animations.chad_logo, -80, 150, 800)

    // Fading Location Logo In
    super.changeAppearance(animations.location_logo_fade, 1, 800)

    // Moving Chad Header and Resizing
    super.translate(animations.chad_heading, 0, -250, 800)
    super.changeAppearance(animations.heading_resize, 20, 800)

    //Fade Background Circle Away
    super.changeAppearance(animations.center_circle_fade, 0, 1000)

    //Fade Out First Subheading
    super.changeAppearance(animations.first_subheading_fade, 0, 1000)

    //Fade In Second Subheading
    super.changeAppearance(animations.second_subheading_fade, 1, 1000)

    // Bringing In Progress Bar
    super.translate(animations.progress_bar_wrapper, 58, 550, 800)

    // Bring In Forward Arrow Button
    super.translate(animations.next_screen_button, 80, -20, 800)

    // Fade In Header Buttons
    super.changeAppearance(animations.header_fade, 1, 1000)

    // Bring In Background Circles
    super.translate(animations.background_circle_top_left, -240, -140, 800)
    super.translate(animations.background_cicle_middle_right, 150, 90, 800)

    // Fade In + Symbol
    super.changeAppearance(animations.plus_fade, 1, 800)

    // Animations Needed To Move Back To Screen
    if (direction === 'back') {
      // Move Location Logo Back On Screen
      super.translate(animations.location_logo, 80, 80, 800)

      // Move progress bar back
      super.translate(animations.progress_bar_inner, 0, 25, 800)

      // Move Background Circle Off Screen
      super.translate(animations.background_circle_center, 20, 800, 800)
    }
  }

  // For either on forward or back button press
  goToThirdScreen = (direction) => {
		const { animations } = this
    // Remove Location Symbol
    super.translate(animations.location_logo, 70, -550, 800)

    // Move progress bar
    super.translate(animations.progress_bar_inner, 90, 25, 800)

    // Remove Background Circles
    super.translate(animations.background_circle_top_left, -540, -110, 800)
    super.translate(animations.background_cicle_middle_right, 450, 120, 800)

    // Bring In Background Circle
    super.translate(animations.background_circle_center, 20, 80, 800)

    // Fade In Chat Logo
    super.changeAppearance(animations.chat_room_fade, 1, 800)

    // Fade Out Text and Bring Next 
    super.changeAppearance(animations.second_subheading_fade, 0, 800)
    super.changeAppearance(animations.third_subheading_fade, 1, 800)

    if (direction === 'back') {
      // Bring Chad Logo Back
      super.translate(animations.chad_logo, -70, 180, 800)

      // Remove Speaker Symbol
      super.translate(animations.speaker_logo, 130, -150, 800)

      // Remove Audio Waves
      super.translate(animations.audio_waves, -285, 115)
    }
  }

  // Can Only Reach animations Page on forward press
  goToFourthScreen = () => {
		const { animations } = this

    // Move progress bar
    super.translate(animations.progress_bar_inner, 180, 25, 800)

    // Fade out Plus sign
    super.changeAppearance(animations.plus_fade, 0, 800)

    // Move Chad Logo
    super.translate(animations.chad_logo, -270, 150, 800)

    // Remove Background Circle
    super.translate(animations.background_circle_center, 20, -400, 800)

    // Fade Out Texting and Fade In Next Text
    super.changeAppearance(animations.third_subheading_fade, 0, 800)
    super.changeAppearance(animations.fourth_subheading_fade, 1, 800)
    
    // Fade Out Chat Logo
    super.changeAppearance(animations.chat_room_fade, 0, 800)

    // Move In Speaker Logo
    super.translate(animations.speaker_logo, 140, 140, 800)

    // Move In Audio Waves
    super.translate(animations.audio_waves, 40, 65, 800)
  }

  // Can only return to animations on back press
  goBackToFirstScreen = () => {
		const { animations } = this

    // Moving Get Started Button Off Screen
    super.translate(animations.get_started_button_button, 6, -20, 800)

    // Moving Chad Logo to New Position
    super.translate(animations.chad_logo, 0, 110, 800)

    // Fading Location Logo In
    super.changeAppearance(animations.location_logo_fade, 0, 800)

    // Moving Chad Header and Resizing
    super.translate(animations.chad_heading, 0, 120, 800)
    super.changeAppearance(animations.heading_resize, 72, 800)

    //Fade Background Circle Away
    super.changeAppearance(animations.center_circle_fade, 1, 1000)

    //Fade Out First Subheading
    super.changeAppearance(animations.first_subheading_fade, 1, 1000)

    //Fade In Second Subheading
    super.changeAppearance(animations.second_subheading_fade, 0, 1000)

    // Bringing In Progress Bar
    super.translate(animations.progress_bar_wrapper, -270, 620, 800)

    // Bring In Forward Arrow Button
    super.translate(animations.next_screen_button, 280, -30, 800)

    // Fade In Header Buttons
    super.changeAppearance(animations.header_fade, 0, 800)

    // Bring In Background Circles
    super.translate(animations.background_circle_top_left, -240, -250, 800)
    super.translate(animations.background_cicle_middle_right, 380, 120, 800)

    // Fade In + Symbol
    super.changeAppearance(animations.plus_fade, 0, 800)
  }
}