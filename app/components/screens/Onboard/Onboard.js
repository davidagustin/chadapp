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
    this.getStartedButtonAnimation = new Animated.ValueXY({ x: 12, y: -250 })
  }

  handlePress = click => {
    // do animation based on click number
    console.log('click')
    if (click === 1) {
      this.firstPressAnimations()
    } else if (click === 2) {
      this.secondPressAnimations()
    } else {
      this.thirdPressAnimations()
    }
    // this.setState({
    //   click: this.state.click += 1
    // })
  }

  firstPressAnimations = () => {
    // Button Animation
    Animated.spring(this.getStartedButtonAnimation, {
      toValue: {x: 50, y: -10},
    }).start() 
  }

  secondPressAnimations = () => {

  }

  thirdPressAnimations = () => {

  }

  render () {
    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          <View style={screen.div}>
          <Image
          style={ads_onboard.chadLogo}
          source={require('../../../assets/images/smallerLogo.png')}
        />
            <Text style={ads_onboard.heading}>CHAD</Text>
            <Text style={ads_onboard.subheading}>Connect with others through</Text>
            <Text style={ads_onboard.subheading}>location based chatrooms.</Text>
            <Animated.View style={[ads_onboard.btn_wrapper, this.getStartedButtonAnimation.getLayout()]}>
              <TouchableOpacity style={ads_onboard.btn} onPress={this.handlePress()}>
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



