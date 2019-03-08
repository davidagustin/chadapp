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

  handleForwardPress = () => {
    const { click } = this.state
    const animation  = this.animation

    // do animation based on click number
    if (click < 4) {
      if (click === 1) {
        animation.goToSecondScreen('forward')
      } else if (click === 2) {
        animation.goToThirdScreen('forward')
      } else if (click === 3) {
        animation.goToFourthScreen()
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
        animation.goBackToFirstScreen()
      } else if (click === 3) {
        animation.goToSecondScreen('back')
      } else {
        animation.goToThirdScreen('back')
      }
      this.setState({
        click: this.state.click -= 1
      })
    }
  }

  render () {
    const icons = ICON_ANIMATIONS
    const animation = this.animation.animations

    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          <View style={screen.div}>

            {/* Header to house back and skip buttons */}
            <Animated.View style={[ads_onboard.header, {opacity: animation.header_fade}]}>
              <Animated.Image
              style={[ads_onboard.background_circle, animation.background_circle_top_left.getLayout()]}
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
            {icons.map((icon) => {
              console.log('icon: ', icon)
              {icon.type === 'Text' && <Animated.Text style={icon.style}>{icon.text}</Animated.Text>}
              {icon.type === 'Image' && <Animated.Image style={icon.style} source={icon.source} />}
            })}
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
            <Animated.View style={{opacity: animation.first_subheading_fade}}>
              <Text style={ads_onboard.first_subheading}>
                Connect with others through{"\n"} location based chatrooms.
              </Text>
            </Animated.View>
            <View style={ads_onboard.text_container}>
              <Animated.View style={{opacity: animation.second_subheading_fade}}>
                <Text style={[ads_onboard.thicker_subheading, {left: -116}]}>Location Focused</Text>
                <Text style={ads_onboard.following_subheading}>
                  Join chatrooms located all over the map
                </Text>
              </Animated.View>    
              <Animated.View style={{opacity: animation.third_subheading_fade}}>
                <Text style={ads_onboard.thicker_subheading}>Chatroom Tags</Text>
                <Text style={ads_onboard.following_subheading}>
                  Join chatrooms related to a specific topic{"\n"} of interest
                </Text>
              </Animated.View>  
              <Animated.View style={{opacity: animation.fourth_subheading_fade}}>
                <Text style={ads_onboard.thicker_subheading}>Say Something</Text>
                <Text style={ads_onboard.following_subheading}>
                  Ex: Chad take me to chatrooms located{"\n"} in San Francisco, CA.
                </Text>
              </Animated.View>    
            </View>
              
                
            {/* Progress bar animations*/}
            <Animated.View style={[ads_onboard.progress_bar_wrapper, animation.progress_bar_wrapper.getLayout()]}>
              <Animated.View style={[ads_onboard.progress_bar_inner, animation.progress_bar_inner.getLayout()]}></Animated.View>
            </Animated.View>

            {/* Get started Button */}
            <Animated.View style={[ads_onboard.btn_wrapper, animation.get_started_button.getLayout()]}>
              <Button style={ads_onboard.btn} onPress={this.handleForwardPress}>
                <Text style={ads_onboard.btn_text}>
                  Get Started
                </Text>
              </Button>
            </Animated.View>

            {/* Forward Button */}
            <Animated.View style={animation.next_screen_button.getLayout()}>
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



