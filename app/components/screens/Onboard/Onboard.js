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
    this.chad_heading = new Animated.ValueXY({ x: 8, y: -180 })
    this.progress_bar_wrapper = new Animated.ValueXY({ x: -300, y: 620 })
    this.progress_bar_inner = new Animated.ValueXY({ x: 0, y: 25 })
    this.location_logo = new Animated.ValueXY({ x: 70, y: -200 })
    this.next_screen_button = new Animated.ValueXY({x: 280, y: -30})
    // this.chatRoomLogo = new Animated.ValueXY({x: -600, y: 200})
    // this.speakerLogo = new Animated.ValueXY({x: 8, y: -100})
    // this.audioWaves = new Animated.ValueXY({x: 500, y: 200})
    this.background_circle_top_left = new Animated.ValueXY({x: -240, y: -250})
    this.background_cicle_middle_right = new Animated.ValueXY({x: 380, y: 120})
    // this.background_circle_center = new Animated.ValueXY({x: 100, y: 100})

    // Starting Values for Items Receiving Fading/Resizing Animations
    this.heading_resize = new Animated.Value(72)
    this.center_circle_fade = this.state.fadeOutAnimation
    this.first_subheading_fade = this.state.fadeOutAnimation
    this.second_subheading_fade = this.state.fadeInAnimation
    this.third_subheading_fade = this.state.fadeInAnimation
    this.fourth_subheading_fade = this.state.fadeInAnimation
    this.header_fade = this.state.fadeInAnimation
    this.plus_fade = this.state.fadeInAnimation
    this.location_logo_fade = this.state.fadeInAnimation
  }

  handleForwardPress = () => {
    // do animation based on click number
    if (this.state.click === 1) {
      this.firstForwardPressAnimations()
    } else if (this.state.click === 2) {
      this.secondForwardPressAnimations()
    } else if (this.state.click === 3) {
      this.thirdForwardPressAnimations()
    } else {
      console.log('Navigate to home page')
    }
    this.setState({
      click: this.state.click += 1
    })
  }

  handleBackPress = () => {
    console.log('yo')
    if (this.state.click === 4) {
      this.goBackToThirdScreen()
    } else if (this.state.click === 3) {
      this.goBackToSecondScreen()
    } else if (this.state.click === 2) {
      this.goBackToFirstScreen()
    }
    this.setState({
      click: this.state.click -= 1
    })
  }

  firstForwardPressAnimations = () => {
    // Moving Get Started Button Off Screen
    Animated.timing(this.get_started_button, {
      toValue: {x: 12, y: 800},
      duration: 800
    }).start() 

    // Moving Chad Logo to New Position
    Animated.timing(this.chad_logo, {
      toValue: {x: -70, y: -80},
      duration: 800
    }).start()

    // Moving Location Logo Onto Screen
    Animated.timing(this.location_logo, {
      toValue: { x: 70, y: -200 },
      duration: 800
    }).start()

    // Moving Chad Header and Resizing
      Animated.timing(this.chad_heading, {
        toValue: {x: 8, y: -450},
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

  }

  secondForwardPressAnimations = () => {
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
      toValue: {x: -540, y: -110},
      duration: 800
    }).start()

    Animated.timing(this.background_cicle_middle_right, {
      toValue: {x: 450, y: 120},
      duration: 800
    }).start()
  }

  thirdForwardPressAnimations = () => {
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

  }

  goBackToFirstScreen = () => {
    console.log('back')
  }

  goBackToSecondScreen = () => {
    
  }

  goBackToThirdScreen = () =>{

  }


  render () {
    let { fadeOutAnimation, fadeInAnimation } = this.state

    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          <View style={screen.div}>

          {/* Header to house back and skip buttons */}
          <Animated.View style={[ads_onboard.header, {opacity: fadeInAnimation}]}>
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
            <Animated.Image />
            {/* <Animated.Image /> */}
            {/* <Animated.Image /> */}
            {/* <Animated.Image /> */}

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



