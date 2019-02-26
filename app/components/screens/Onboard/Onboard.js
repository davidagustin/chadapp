/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Text, View, Animated, TouchableOpacity, Image } from 'react-native'

// atoms
import { Button } from '../../atoms'

// templates
import { Layout, Wrapper } from '../../templates'

// modules
import { size } from '../../../utilities'

// styles
import screen from '../base/Screen.style'
import ads_onboard from './Onboard.style'

export default class OnboardScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: 1
    }

    // all items that will have animations

    // Starting Positions for Translating Animations
    this.getStartedButton = new Animated.ValueXY({ x: 12, y: 280 })
    this.chadLogo = new Animated.ValueXY({x: 8, y: 135}) 
    this.chadHeading = new Animated.ValueXY({x: 8, y: 150})


    // Starting Values for Fading/Resizing Animations

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
      toValue: {x: 12, y: 500},
      duration: 800
    }).start() 

    // Moving Chad Logo to New Position
    Animated.timing(this.chadLogo, {
      toValue: {x: -50, y: 200},
      duration: 800
    }).start()

    // Moving Chad Header and Resizing
    Animated.timing(this.chadHeading, {
      toValue: {x: 8, y: 50},
      duration: 800
    }).start()
  }

  secondForwardPressAnimations = () => {

  }

  thirdForwardPressAnimations = () => {

  }



  render () {
    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          <View style={screen.div}>
          <Animated.Image
          style={[ads_onboard.chadLogo, this.chadLogo.getLayout()]}
          source={require('../../../assets/images/Speaker.png')}
          />
            <Animated.Text style={[ads_onboard.heading, this.chadHeading.getLayout()]}>CHAD</Animated.Text>
            <Text style={ads_onboard.subheading}>Connect with others through</Text>
            <Text style={ads_onboard.subheading}>location based chatrooms.</Text>
            <Animated.View style={[ads_onboard.btn_wrapper, this.getStartedButton.getLayout()]}>
              <TouchableOpacity style={ads_onboard.btn} onPress={this.handleForwardPress}>
                <Text style={ads_onboard.btn_text}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </Animated.View>
            
          </View>
        </Wrapper>
      </Layout>
    )
  }
}



