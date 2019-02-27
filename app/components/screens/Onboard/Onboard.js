/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { 
  Text, View, Animated, TouchableOpacity, Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

// atoms
// maybe change some animations into atoms?
import { Button } from '../../atoms'

// templates
import { Layout, Wrapper } from '../../templates'

// styles
import screen from '../base/Screen.style'
import ads_onboard from './Onboard.style'

export default class OnboardScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: 1,
      fadeOutAnimation: new Animated.Value(1),
      fadeInAnimation: new Animated.Value(0),
    }

    // all items that will have animations

    // Starting Positions for Items Receiving Translating Animations
    this.get_started_button = new Animated.ValueXY({ x: 6, y: -20 })
    this.chad_logo = new Animated.ValueXY({ x: 0, y: -150 }) 
    this.chad_heading = new Animated.ValueXY({ x: 0, y: -180 })
    this.progress_bar_wrapper = new Animated.ValueXY({ x: -270, y: 620 })
    this.progress_bar_inner = new Animated.ValueXY({ x: 0, y: 25 })
    this.location_logo = new Animated.ValueXY({ x: 70, y: -200 })
    this.next_screen_button = new Animated.ValueXY({x: 280, y: -30})
    this.speaker_logo = new Animated.ValueXY({x: 130, y: -150})
    this.audio_waves = new Animated.ValueXY({x: -285, y: 115})
    this.background_circle_top_left = new Animated.ValueXY({x: -240, y: -250})
    this.background_cicle_middle_right = new Animated.ValueXY({x: 380, y: 120})
    this.background_circle_center = new Animated.ValueXY({x: 20, y: 800})

    // Starting Values for Items Receiving Fading/Resizing Animations
    this.heading_resize = new Animated.Value(72)
    this.center_circle_fade = new Animated.Value(1)
    this.first_subheading_fade = new Animated.Value(1)
    this.second_subheading_fade = new Animated.Value(0)
    this.third_subheading_fade = new Animated.Value(0)
    this.fourth_subheading_fade = new Animated.Value(0)
    this.header_fade = new Animated.Value(0)
    this.plus_fade = new Animated.Value(0)
    this.location_logo_fade = new Animated.Value(0)
    this.chat_room_fade = new Animated.Value(0)
  }

  handleForwardPress = () => {
    // do animation based on click number
    if (this.state.click === 1) {
      this.goToSecondScreen('forward')
    } else if (this.state.click === 2) {
      this.goToThirdScreen('forward')
    } else if (this.state.click === 3) {
      this.goToFourthScreen()
    } else {
      console.log('Navigate to home page')
    }
    this.setState({
      click: this.state.click += 1
    })
  }

  handleBackPress = () => {
    console.log('yo')
    if (this.state.click === 2) {
      this.goBackToFirstScreen()
    } else if (this.state.click === 3) {
      this.goToSecondScreen('back')
    } else {
      this.goToThirdScreen('back')
    }
    this.setState({
      click: this.state.click -= 1
    })
  }

  // Can Reach This Page On Both and Backward Press
  goToSecondScreen = (direction) => {
    // Moving Get Started Button Off Screen
    Animated.timing(this.get_started_button, {
      toValue: {x: 12, y: 300},
      duration: 800
    }).start() 

    // Moving Chad Logo to New Position
    Animated.timing(this.chad_logo, {
      toValue: {x: -70, y: -80},
      duration: 800
    }).start()

    // Fading Location Logo In
    Animated.timing(this.location_logo_fade, {
      toValue: 1,
      duration: 800
    }).start()

    // Moving Chad Header and Resizing
    Animated.timing(this.chad_heading, {
      toValue: {x: 0, y: -450},
      duration: 800
    }).start()
    Animated.timing(this.heading_resize, {
      toValue: 20,
      duration: 800,
    }).start()

    //Fade Background Circle Away
    Animated.timing(this.center_circle_fade, {
      toValue: 0,
      duration: 1000,
    }).start()

    //Fade Out First Subheading
    Animated.timing(this.first_subheading_fade, {
      toValue: 0,
      duration: 1000,
    }).start()

    //Fade In Second Subheading
    Animated.timing(this.second_subheading_fade, {
      toValue: 1,
      duration: 1000,
    }).start()

    // Bringing In Progress Bar
    Animated.timing(this.progress_bar_wrapper, {
      toValue: { x: 58, y: 620 },
      duration: 600
    }).start()

    // Bring In Forward Arrow Button
    Animated.timing(this.next_screen_button, {
      toValue: {x: 80, y: 20},
      duraton: 800
    }).start()

    // Fade In Header Buttons
    Animated.timing(this.header_fade, {
      toValue: 1,
      duration: 800
    }).start()

    // Bring In Background Circles
    Animated.timing(this.background_circle_top_left, {
      toValue: {x: -240, y: -110},
      duration: 800
    }).start()

    Animated.timing(this.background_cicle_middle_right, {
      toValue: {x: 150, y: 120},
      duration: 800
    }).start()

    // Fade In + Symbol
    Animated.timing(this.plus_fade, {
      toValue: 1,
      duration: 800
    }).start()

    // Animations Needed To Move Back To Screen
    if (direction === 'back') {
      // Move Location Logo Back On Screen
      Animated.timing(this.location_logo, {
        toValue: { x: 70, y: -200 },
        duration: 800
      }).start()

      // Move progress bar back
      Animated.timing(this.progress_bar_inner, {
        toValue: { x: 0, y: 25 },
        duration: 800
      }).start()

      // Move Background Circle Off Screen
      Animated.timing(this.background_circle_center, {
        toValue: {x: 20, y: 800},
        duration: 800
      }).start()
    }
  }

  // For either on forward or back button press
  goToThirdScreen = (direction) => {
    // Remove Location Symbol
    Animated.timing(this.location_logo, {
      toValue: { x: 70, y: -550 },
      duration: 800
    }).start()

    // Move progress bar
    Animated.timing(this.progress_bar_inner, {
      toValue: { x: 90, y: 25 },
      duration: 800
    }).start()

    // Remove Background Circles
    Animated.timing(this.background_circle_top_left, {
      toValue: { x: -540, y: -110 },
      duration: 800
    }).start()

    Animated.timing(this.background_cicle_middle_right, {
      toValue: { x: 450, y: 120 },
      duration: 800
    }).start()

    // Bring In Background Circle
    Animated.timing(this.background_circle_center, {
      toValue: { x: 20, y: 100 },
      duration: 800
    }).start()

    // Fade In Chat Logo
    Animated.timing(this.chat_room_fade, {
      toValue: 1,
      duration: 800
    }).start()

    // Fade Out Text and Bring Next 
    Animated.timing(this.second_subheading_fade, {
      toValue: 0,
      duration: 800
    }).start()

    Animated.timing(this.third_subheading_fade, {
      toValue: 1,
      duration: 800
    }).start()

    if (direction === 'back') {
      // Bring Chad Logo Back
      Animated.timing(this.chad_logo, {
        toValue: {x: -70, y: -80},
        duration: 800
      }).start()

      // Remove Speaker Symbol
      Animated.timing(this.speaker_logo, {
        toValue: {x: 130, y: -150},
        duration: 800
      }).start()
    }
  }

  // Can Only Reach this Page on forward press
  goToFourthScreen = () => {
    // Move progress bar
    Animated.timing(this.progress_bar_inner,{
      toValue: { x: 180, y: 25 },
      duration: 800
    }).start()

    // Fade out Plus sign
    Animated.timing(this.plus_fade, {
      toValue: 0, 
      duration: 800
    }).start()

    // Move Chad Logo
    Animated.timing(this.chad_logo, {
      toValue: {x: -270, y: -80},
      duration: 800
    }).start() 

    // Remove Background Circle
    Animated.timing(this.background_circle_center, {
      toValue: { x: 20, y: -400 },
      duration: 800
    }).start()

    // Fade Out Texting and Fade In Next Text
    Animated.timing(this.third_subheading_fade, {
      toValue: 0,
      duration: 800
    }).start()
    
    Animated.timing(this.fourth_subheading_fade, {
      toValue: 1,
      duration: 800
    }).start()

    // Fade Out Chat Logo
    Animated.timing(this.chat_room_fade, {
      toValue: 0,
      duration: 800
    }).start()

    // Move In Speaker Logo
    Animated.timing(this.speaker_logo, {
      toValue: {x: 130, y: 200},
      duration: 800
    }).start()

    // Move In Audio Waves
    Animated.timing(this.audio_waves, {
      toValue: {x: 45, y: 115},
      duration: 800
    }).start()
  }

  // Can only return to this on back press
  goBackToFirstScreen = () => {
    // Moving Get Started Button Off Screen
    Animated.timing(this.get_started_button, {
      toValue: {x: 6, y: -20},
      duration: 800
    }).start() 

    // Moving Chad Logo to New Position
    Animated.timing(this.chad_logo, {
      toValue: {x: 0, y: -150},
      duration: 800
    }).start()

    // Fading Location Logo In
    Animated.timing(this.location_logo_fade, {
      toValue: 0,
      duration: 800
    }).start()

    // Moving Chad Header and Resizing
    Animated.timing(this.chad_heading, {
      toValue: {x: 0, y: -180},
      duration: 800
    }).start()
    Animated.timing(this.heading_resize, {
      toValue: 72,
      duration: 800,
    }).start()

    //Fade Background Circle Away
    Animated.timing(this.center_circle_fade, {
      toValue: 1,
      duration: 1000,
    }).start()

    //Fade Out First Subheading
    Animated.timing(this.first_subheading_fade, {
      toValue: 1,
      duration: 1000,
    }).start()

    //Fade In Second Subheading
    Animated.timing(this.second_subheading_fade, {
      toValue: 0,
      duration: 1000,
    }).start()

    // Bringing In Progress Bar
    Animated.timing(this.progress_bar_wrapper, {
      toValue: { x: -270, y: 620 },
      duration: 600
    }).start()

    // Bring In Forward Arrow Button
    Animated.timing(this.next_screen_button, {
      toValue: {x: 280, y: -30},
      duraton: 800
    }).start()

    // Fade In Header Buttons
    Animated.timing(this.header_fade, {
      toValue: 0,
      duration: 800
    }).start()

    // Bring In Background Circles
    Animated.timing(this.background_circle_top_left, {
      toValue: {x: -240, y: -250},
      duration: 800
    }).start()

    Animated.timing(this.background_cicle_middle_right, {
      toValue: {x: 380, y: 120},
      duration: 800
    }).start()

    // Fade In + Symbol
    Animated.timing(this.plus_fade, {
      toValue: 0,
      duration: 800
    }).start()
  }

  render () {
    let { fadeOutAnimation, fadeInAnimation } = this.state

    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          <View style={screen.div}>

          {/* Header to house back and skip buttons */}
          <Animated.View style={[ads_onboard.header, {opacity: this.header_fade}]}>
            <Animated.Image
            style={[ads_onboard.background_circle, this.background_circle_top_left.getLayout()]}
            source={require('../../../assets/images/circleTopLeft.png')}
            />
            <Button style={ads_onboard.back_button} onPress={this.handleBackPress}>
              <Image 
              source={require('../../../assets/images/Back.png')}
              />
            </Button>
            <Button style={ads_onboard.skip_button} onPress={()=> {console.log('Skip')}}>
              <Text style={ads_onboard.skip_button_text}>Skip</Text>
            </Button>
          </Animated.View>

            {/* Icon and symbol animations */}
            <Animated.Image 
            style={[ads_onboard.background_circle, this.background_circle_center.getLayout()]}
            source={require('../../../assets/images/centerCircle.png')}
            />
            <Animated.Image 
            style={[ads_onboard.background_circle, this.background_cicle_middle_right.getLayout()]}
            source={require('../../../assets/images/circleMiddleRight.png')}
            />
            <Animated.View style={[ads_onboard.circle_logo_surrounding, { opacity: this.center_circle_fade }]}></Animated.View>
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
            />

           {/* Text animations */}
            <Animated.View style={{opacity: this.first_subheading_fade}}>
              <Text style={ads_onboard.first_subheading}>Connect with others through{"\n"} location based chatrooms.</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.second_subheading_fade}}>
              <Text style={ads_onboard.thicker_subheading}>Location Focused</Text>
              <Text style={ads_onboard.following_subheading}>Join chatrooms all over the map</Text>
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
            
              
            {/* Buttons and progress bar animations*/}
            <Animated.View style={[ads_onboard.btn_wrapper, this.get_started_button.getLayout()]}>
              <Button style={ads_onboard.btn} onPress={this.handleForwardPress}>
                <Text style={ads_onboard.btn_text}>
                  Get Started
                </Text>
              </Button>
            </Animated.View>

            <Animated.View style={[ads_onboard.progress_bar_wrapper, this.progress_bar_wrapper.getLayout()]}>
              <Animated.View style={[ads_onboard.progress_bar_inner, this.progress_bar_inner.getLayout()]}></Animated.View>
            </Animated.View>

            <Animated.View style={this.next_screen_button.getLayout()}>
              <Button style={ads_onboard.forward_button_surrounding} onPress={this.handleForwardPress}>
                {this.state.click < 4 ? 
                <Image 
                style={ads_onboard.forward_button_content} 
                source={require('../../../assets/images/forward.png')}/>
                : <Image 
                style={ads_onboard.forward_button_content}
                source={require('../../../assets/images/Check.png')}
                />}
              </Button>
            </Animated.View>
            
          </View>
        </Wrapper>
      </Layout>
    )
  }
}



