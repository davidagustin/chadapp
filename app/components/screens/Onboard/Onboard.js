/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Text, View, Animated, TouchableOpacity, Image } from 'react-native'

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
      fadeInAnimation: new Animated.Value(0)
    }

    // all items that will have animations

    // Starting Positions for Items Receiving Translating Animations
    this.getStartedButton = new Animated.ValueXY({ x: 12, y: 0 })
    this.chadLogo = new Animated.ValueXY({ x: 0, y: -150 }) 
    this.chadHeading = new Animated.ValueXY({ x: 8, y: -130 })
    this.progress_bar_wrapper = new Animated.ValueXY({ x: 12, y: 240 })
    this.progress_bar_inner = new Animated.ValueXY({ x: -20, y: 240 })
    this.locationLogo = new Animated.ValueXY({x: 300, y: -190})
    //this.chatRoomLogo = new Animated.ValueXY({x: -600, y: 200})
    //this.speakerLogo = new Animated.ValueXY({x: 8, y: -100})
    //this.audioWaves = new Animated.ValueXY({x: 500, y: 200})


    // Starting Values for Items Receiving Fading/Resizing Animations
    
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
    } else {
      this.thirdForwardPressAnimations()
    }
    this.setState({
      click: this.state.click += 1
    })
  }

  firstForwardPressAnimations = () => {
    // Moving Get Started Button Off Screen
    Animated.timing(this.getStartedButton, {
      toValue: {x: 12, y: 800},
      duration: 800
    }).start() 

    // Moving Chad Logo to New Position
    Animated.timing(this.chadLogo, {
      toValue: {x: -80, y: -70},
      duration: 800
    }).start()

    // Moving Location Logo Onto Screen
    Animated.timing(this.locationLogo, {
      toValue: {x: 100, y: -190},
      duration: 800
    }).start()

    // Moving Chad Header and Resizing
    Animated.timing(this.chadHeading, {
      toValue: {x: 8, y: -480},
      duration: 800
    }).start()

    //Fade Background Circle Away
    Animated.timing(this.state.fadeAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }

  secondForwardPressAnimations = () => {

  }

  thirdForwardPressAnimations = () => {

  }



  render () {
    let { fadeOutAnimation, fadeInAnimation } = this.state

    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          <View style={screen.div}>
            <Animated.View style={[ads_onboard.circle_logo_surrounding, { opacity: fadeOutAnimation}]}></Animated.View>
            <Animated.Image
            style={[ads_onboard.chadLogo, this.chadLogo.getLayout()]}
            source={require('../../../assets/images/logoOnboard.png')}
            />
            <Animated.Image 
            style={[ads_onboard.location_logo, this.locationLogo.getLayout()]}
            source={require('../../../assets/images/LocationSymbol.png')}
            />
            <Animated.Text style={[ads_onboard.heading, this.chadHeading.getLayout()]}>CHAD</Animated.Text>
            <Animated.View style={{opacity: fadeOutAnimation}}>
              <Text style={ads_onboard.subheading}>Connect with others through</Text>
              <Text style={ads_onboard.subheading}>location based chatrooms.</Text>
            </Animated.View>
            <Animated.View style={[ads_onboard.btn_wrapper, this.getStartedButton.getLayout()]}>
              <TouchableOpacity style={ads_onboard.btn} onPress={this.handleForwardPress}>
                <Text style={ads_onboard.btn_text}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </Animated.View>
            <View style={ads_onboard.progress_bar_wrapper}></View>
            <View style={ads_onboard.progress_bar_inner}></View>
            
          </View>
        </Wrapper>
      </Layout>
    )
  }
}



