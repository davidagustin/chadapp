/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { 
  Text, View, Animated, TouchableOpacity, Image, Icon
} from 'react-native'

// atoms
// maybe change some animations into atoms?
import { } from '../../atoms'

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
    this.get_started_button = new Animated.ValueXY({ x: 12, y: -20 })
    this.chad_logo = new Animated.ValueXY({ x: 0, y: -150 }) 
    this.chad_heading = new Animated.ValueXY({ x: 8, y: -180 })
    this.progress_bar_wrapper = new Animated.ValueXY({ x: 12, y: 200 })
    this.progress_bar_inner = new Animated.ValueXY({ x: 0, y: 25 })
    this.location_logo = new Animated.ValueXY({x: 300, y: -190})
    this.next_screen_button = new Animated.ValueXY({x: 8, y: -100})
    // this.chatRoomLogo = new Animated.ValueXY({x: -600, y: 200})
    // this.speakerLogo = new Animated.ValueXY({x: 8, y: -100})
    // this.audioWaves = new Animated.ValueXY({x: 500, y: 200})
    // this.background_circle1 = new Animated.ValueXY({x: 100, y: 100})
    // this.background_cicle2 = new Animated.ValueXY({x: 100, y: 100})
    // this.background_circle3 = new Animated.ValueXY({x: 100, y: 100})

    // Starting Values for Items Receiving Fading/Resizing Animations
    this.heading_resize = new Animated.Value(72)
    this.center_circle_fade = this.state.fadeOutAnimation
    this.first_subheading_fade = this.state.fadeOutAnimation
    this.second_subheading_fade = this.state.fadeInAnimation
    this.third_subheading_fade = this.state.fadeInAnimation
    this.fourth_subheading_fade = this.state.fadeInAnimation
  }

  // static navigationOptions = {
  //   headerLeft: (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title="Info"
  //       color="#fff"
  //     />
  //   ),
  // }
  

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
      toValue: {x: -80, y: -70},
      duration: 800
    }).start()

    // Moving Location Logo Onto Screen
    Animated.timing(this.location_logo, {
      toValue: {x: 100, y: -190},
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
      useNativeDriver: true,
    }).start()

    //Fade Out First Subheading
    Animated.timing(this.first_subheading_fade, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start()

    //Fade In Second Subheading
    Animated.timing(this.second_subheading_fade, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()

    // Bringing In Progress Bar
    Animated.timing(this.progress_bar_wrapper, {
      toValue: { x: 12, y: -50 },
      duration: 800
    }).start()
  }

  secondForwardPressAnimations = () => {
    
  }

  thirdForwardPressAnimations = () => {

  }

  goBackToFirstScreen = () => {

  }

  goBackToSecondScreen = () => {

  }

  goBackToThirdScreen = () =>{

  }


  render () {
    let { fadeOutAnimation, fadeInAnimation } = this.state

    const textSize = this.heading_resize.interpolate({
      inputRange: [18, 72],
      outputRange: [72, 18]
    })

    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          <View style={screen.div}>

            {/* Icon and symbol animations */}
            <Animated.View style={[ads_onboard.circle_logo_surrounding, { opacity: this.center_circle_fade }]}></Animated.View>
            <Animated.Image
            style={[ads_onboard.chadLogo, this.chad_logo.getLayout()]}
            source={require('../../../assets/images/logoOnboard.png')}
            />
            <Animated.Image 
            style={[ads_onboard.location_logo, this.location_logo.getLayout()]}
            source={require('../../../assets/images/LocationSymbol.png')}
            />
            <Animated.Text style={[ads_onboard.heading, this.chad_heading.getLayout(), { fontSize: this.heading_resize }]}>CHAD</Animated.Text>

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
              <TouchableOpacity style={ads_onboard.btn} onPress={this.handleForwardPress}>
                <Text style={ads_onboard.btn_text}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[ads_onboard.progress_bar_wrapper, this.progress_bar_wrapper.getLayout()]}>
              <Animated.View style={[ads_onboard.progress_bar_inner, this.progress_bar_inner.getLayout()]}></Animated.View>
            </Animated.View>

            {/* <Animated.View style={this.next_screen_button.getLayout()}>
              <TouchableOpacity style={ads_onboard.circle_arrow_button_surrounding} onPress={this.handleForwardPress}>
                {this.state.click < 4 && <Icon></Icon>}
                {this.state.click === 4 && <Icon></Icon>}
              </TouchableOpacity>
            </Animated.View> */}
            
          </View>
        </Wrapper>
      </Layout>
    )
  }
}



