/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { 
  Text, View, Animated
} from 'react-native'


// atoms
// maybe change some animations into atoms?
import { Button, Icon } from '../../atoms'


// templates
import { Layout, Wrapper } from '../../templates'

// styles
import screen from '../base/Screen.style'
import ads_onboard from './Onboard.style'

// config
import { ICON_ANIMATIONS } from '../../../config/onboard.config'
import { circle_top_left_image_source } from '../../../config/onboard.config'

// animtions
import OnboardAnimation from './OnboardAnimations'

export default class OnboardScreen extends React.Component {
  state = { click: 1 }
  animation = new OnboardAnimation()

  // all items that will have animations
  // Brainstorming a way to store these animation values in an array or object 

  // Starting Positions for Items Receiving Translating Animations
  get_started_button = new Animated.ValueXY({ x: 6, y: 260 })
  chad_logo = new Animated.ValueXY({ x: 0, y: 110 }) 
  chad_heading = new Animated.ValueXY({ x: 0, y: 40 })
  progress_bar_wrapper = new Animated.ValueXY({ x: -270, y: 550 })
  progress_bar_inner = new Animated.ValueXY({ x: 0, y: 25 })
  location_logo = new Animated.ValueXY({ x: 70, y: 3 })
  next_screen_button = new Animated.ValueXY({x: 280, y: -30})
  speaker_logo = new Animated.ValueXY({x: 140, y: -150})
  audio_waves = new Animated.ValueXY({x: -285, y: 65})
  background_circle_top_left = new Animated.ValueXY({x: -240, y: -250})
  background_cicle_middle_right = new Animated.ValueXY({x: 380, y: 120})
  background_circle_center = new Animated.ValueXY({x: 20, y: 800})

  // Starting Values for Items Receiving Fading/Resizing Animations
  heading_resize = new Animated.Value(ads_onboard.heading.fontSize)
  center_circle_fade = new Animated.Value(1)
  first_subheading_fade = new Animated.Value(1)
  second_subheading_fade = new Animated.Value(0)
  third_subheading_fade = new Animated.Value(0)
  fourth_subheading_fade = new Animated.Value(0)
  header_fade = new Animated.Value(0)
  plus_fade = new Animated.Value(0)
  location_logo_fade = new Animated.Value(0)
  chat_room_fade = new Animated.Value(0)
  

  handleForwardPress = () => {
    const { click } = this.state
    const animation  = this.animation

    // do animation based on click number
    if (click < 4) {
      if (click === 1) {
        animation.goToSecondScreen('forward')
      } else if (click === 2) {
        this.goToThirdScreen('forward')
      } else if (click === 3) {
        this.goToFourthScreen()
      } else {
        console.log('Navigate to home page')
      }
      this.setState({
        click: this.state.click += 1
      })
    }
  }

  handleBackPress = () => {
    const { click } = this.state
    const { animation } = this.animation
    console.log('Back Button Pressed')
    if (click > 1 ) {
      if (click === 2) {
        this.goBackToFirstScreen()
      } else if (click === 3) {
        this.goToSecondScreen('back')
      } else {
        this.goToThirdScreen('back')
      }
      this.setState({
        click: this.state.click -= 1
      })
    }
  }

  // Can Reach This Page On Both and Backward Press
  goToSecondScreen = (direction) => {
    // Moving Get Started Button Off Screen
    translate(this.get_started_button, 12, 580, 800)

    // Moving Chad Logo to New Position
    translate(this.chad_logo, -80, 150, 800)

    // Fading Location Logo In
    changeAppearance(this.location_logo_fade, 1, 800)

    // Moving Chad Header and Resizing
    translate(this.chad_heading, 0, -250, 800)
    changeAppearance(this.heading_resize, 20, 800)

    //Fade Background Circle Away
    changeAppearance(this.center_circle_fade, 0, 1000)

    //Fade Out First Subheading
    changeAppearance(this.first_subheading_fade, 0, 1000)

    //Fade In Second Subheading
    changeAppearance(this.second_subheading_fade, 1, 1000)

    // Bringing In Progress Bar
    translate(this.progress_bar_wrapper, 58, 550, 800)

    // Bring In Forward Arrow Button
    translate(this.next_screen_button, 80, -20, 800)

    // Fade In Header Buttons
    changeAppearance(this.header_fade, 1, 1000)

    // Bring In Background Circles
    translate(this.background_circle_top_left, -240, -140, 800)
    translate(this.background_cicle_middle_right, 150, 90, 800)

    // Fade In + Symbol
    changeAppearance(this.plus_fade, 1, 800)

    // Animations Needed To Move Back To Screen
    if (direction === 'back') {
      // Move Location Logo Back On Screen
      translate(this.location_logo, 80, 80, 800)

      // Move progress bar back
      translate(this.progress_bar_inner, 0, 25, 800)

      // Move Background Circle Off Screen
      translate(this.background_circle_center, 20, 800, 800)
    }
  }

  // For either on forward or back button press
  goToThirdScreen = (direction) => {
    // Remove Location Symbol
    translate(this.location_logo, 70, -550, 800)

    // Move progress bar
    translate(this.progress_bar_inner, 90, 25, 800)

    // Remove Background Circles
    translate(this.background_circle_top_left, -540, -110, 800)
    translate(this.background_cicle_middle_right, 450, 120, 800)

    // Bring In Background Circle
    translate(this.background_circle_center, 20, 80, 800)

    // Fade In Chat Logo
    changeAppearance(this.chat_room_fade, 1, 800)

    // Fade Out Text and Bring Next 
    changeAppearance(this.second_subheading_fade, 0, 800)
    changeAppearance(this.third_subheading_fade, 1, 800)

    if (direction === 'back') {
      // Bring Chad Logo Back
      translate(this.chad_logo, -70, 180, 800)

      // Remove Speaker Symbol
      translate(this.speaker_logo, 130, -150, 800)

      // Remove Audio Waves
      translate(this.audio_waves, -285, 115)
    }
  }

  // Can Only Reach this Page on forward press
  goToFourthScreen = () => {
    // Move progress bar
    translate(this.progress_bar_inner, 180, 25, 800)

    // Fade out Plus sign
    changeAppearance(this.plus_fade, 0, 800)

    // Move Chad Logo
    translate(this.chad_logo, -270, 150, 800)

    // Remove Background Circle
    translate(this.background_circle_center, 20, -400, 800)

    // Fade Out Texting and Fade In Next Text
    changeAppearance(this.third_subheading_fade, 0, 800)
    changeAppearance(this.fourth_subheading_fade, 1, 800)
    
    // Fade Out Chat Logo
    changeAppearance(this.chat_room_fade, 0, 800)

    // Move In Speaker Logo
    translate(this.speaker_logo, 140, 140, 800)

    // Move In Audio Waves
    translate(this.audio_waves, 40, 65, 800)
  }

  // Can only return to this on back press
  goBackToFirstScreen = () => {
    // Moving Get Started Button Off Screen
    translate(this.get_started_button_button, 6, -20, 800)

    // Moving Chad Logo to New Position
    translate(this.chad_logo, 0, 110, 800)

    // Fading Location Logo In
    changeAppearance(this.location_logo_fade, 0, 800)

    // Moving Chad Header and Resizing
    translate(this.chad_heading, 0, 120, 800)
    changeAppearance(this.heading_resize, 72, 800)

    //Fade Background Circle Away
    changeAppearance(this.center_circle_fade, 1, 1000)

    //Fade Out First Subheading
    changeAppearance(this.first_subheading_fade, 1, 1000)

    //Fade In Second Subheading
    changeAppearance(this.second_subheading_fade, 0, 1000)

    // Bringing In Progress Bar
    translate(this.progress_bar_wrapper, -270, 620, 800)

    // Bring In Forward Arrow Button
    translate(this.next_screen_button, 280, -30, 800)

    // Fade In Header Buttons
    changeAppearance(this.header_fade, 0, 800)

    // Bring In Background Circles
    translate(this.background_circle_top_left, -240, -250, 800)
    translate(this.background_cicle_middle_right, 380, 120, 800)

    // Fade In + Symbol
    changeAppearance(this.plus_fade, 0, 800)
  }

  render () {
    const icons = ICON_ANIMATIONS

    // const animation = this.animation.animations
    
    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          <View style={screen.div}>

            {/* Header to house back and skip buttons */}
            <Animated.View style={[ads_onboard.header, {opacity: this.header_fade}]}>
              <Animated.Image
              style={[ads_onboard.background_circle, this.background_circle_top_left.getLayout()]}
              source={circle_top_left_image_source}
              />
              <View>
                {/* Not clickable for some reason, can't figure out why */}
                <Button style={ads_onboard.back_button} onPress={this.handleBackPress}>
                    <Icon
                    name={'arrow-back'}
                    size={30}
                    color={'white'}
                    />
                </Button>
              </View>
              <View>
                {/* Not clickable for some reason, can't figure out why */}
                <Button style={ads_onboard.skip_button} onPress={() => {console.log('Skip')}}>
                  <Text style={ads_onboard.skip_button_text}>
                    Skip
                  </Text>
                </Button>
              </View>
            </Animated.View>

            {/* Icon and symbol animations */}
            {icons.map((element) => {
              {element.type === 'text' && <Animated.Text style={element.style}>{element.text}</Animated.Text>}
              {element.type === 'image' && <Animated.Image style={element.style} source={element.source} />}}
            )}
            {/* <Animated.Image 
            style={[ads_onboard.background_circle, this.background_circle_center.getLayout()]}
            source={require('../../../assets/images/centerCircle.png')}
            />
            <Animated.Image 
            style={[ads_onboard.background_circle, this.background_cicle_middle_right.getLayout()]}
            source={require('../../../assets/images/circleMiddleRight.png')}
            />
            <Animated.Image 
            style={[ads_onboard.circle_logo_surrounding, { opacity: this.center_circle_fade }]}
            source={require('../../../assets/images/Oval.png')}
            />
            <Animated.Image
            style={[ads_onboard.chadLogo, this.chad_logo.getLayout()]}
            source={require('../../../assets/images/logoOnboard.png')}
            />
            <Animated.Image 
            style={[ads_onboard.location_logo, this.location_logo.getLayout(), { opacity: this.location_logo_fade }]}
            source={require('../../../assets/images/LocationSymbol.png')}
            />
            <Animated.Text style={[ads_onboard.heading, this.chad_heading.getLayout(), { fontSize: this.heading_resize }]}>CHAD</Animated.Text>
            <Animated.Image 
            style={[ads_onboard.plus_symbol, { opacity: this.plus_fade }]}
            source={require('../../../assets/images/plus.png')}
            />
            <Animated.Image 
            style={[ads_onboard.chatroom_logo, { opacity: this.chat_room_fade }]}
            source={require('../../../assets/images/Chatrooms.png')}
            />
            <Animated.Image 
            style= {[ads_onboard.speaker_logo, this.speaker_logo.getLayout()]}
            source={require('../../../assets/images/Speaker.png')}
            />
            <Animated.Image 
            style= {[ads_onboard.audio_waves, this.audio_waves.getLayout()]}
            source={require('../../../assets/images/AudioWaves.png')}
            /> */}

            {/* Text animations */}
            <Animated.View style={{opacity: this.first_subheading_fade}}>
              <Text style={ads_onboard.first_subheading}>
                Connect with others through{"\n"} location based chatrooms.
              </Text>
            </Animated.View>
            <View style={ads_onboard.text_container}>
              <Animated.View style={{opacity: this.second_subheading_fade}}>
                <Text style={[ads_onboard.thicker_subheading, {left: -116}]}>Location Focused</Text>
                <Text style={ads_onboard.following_subheading}>
                  Join chatrooms located all over the map
                </Text>
              </Animated.View>    
              <Animated.View style={{opacity: this.third_subheading_fade}}>
                <Text style={ads_onboard.thicker_subheading}>Chatroom Tags</Text>
                <Text style={ads_onboard.following_subheading}>
                  Join chatrooms related to a specific topic{"\n"} of interest
                </Text>
              </Animated.View>  
              <Animated.View style={{opacity: this.fourth_subheading_fade}}>
                <Text style={ads_onboard.thicker_subheading}>Say Something</Text>
                <Text style={ads_onboard.following_subheading}>
                  Ex: Chad take me to chatrooms located{"\n"} in San Francisco, CA.
                </Text>
              </Animated.View>    
            </View>
              
                
            {/* Progress bar animations*/}
            <Animated.View style={[ads_onboard.progress_bar_wrapper, this.progress_bar_wrapper.getLayout()]}>
              <Animated.View style={[ads_onboard.progress_bar_inner, this.progress_bar_inner.getLayout()]}></Animated.View>
            </Animated.View>

            {/* Get started Button */}
            <Animated.View style={[ads_onboard.btn_wrapper, this.get_started_button.getLayout()]}>
              <Button style={ads_onboard.btn} onPress={this.handleForwardPress}>
                <Text style={ads_onboard.btn_text}>
                  Get Started
                </Text>
              </Button>
            </Animated.View>

            {/* Forward Button */}
            <Animated.View style={this.next_screen_button.getLayout()}>
              <Button style={ads_onboard.forward_button_surrounding} onPress={this.handleForwardPress}>
                {this.state.click < 4 ? 
                <Icon
                style={ads_onboard.forward_button_content}
                name={'arrow-forward'}
                size={40}
                color={'white'}
                />
                : <Icon 
                style={ads_onboard.forward_button_content}
                name={'checkmark'}
                size={70}
                color={'white'}
                />}
              </Button>
            </Animated.View>
          
            
          </View>
        </Wrapper>
      </Layout>
    )
  }
}



