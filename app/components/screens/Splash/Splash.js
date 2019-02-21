/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Text, View } from 'react-native'

// atoms
import { Button, Icon } from '../../atoms'

// templates
import { Layout, Wrapper } from '../../templates'

// modules
import { size } from '../../../utilities'

// styles
import screen from '../base/Screen.style'
import ads_splash from './Splash.style'

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  get_button = name => {
    const { navigate } = this.props.navigation

    // render email / password button by default
    let button = {
      icon: { name: 'mail', size: size(40) },
      text: 'Sign up with email',
      onPress: () => navigate('Register')
    }

    if (name === 'google') {
      // render google button
      button.icon.name = 'logo-google'
      button.text = 'Sign up with Google'
      button.onPress = () => console.log('Button pressed.')
    } else if (name === 'facebook') {
      // render facebook button
      button.icon.name = 'logo-facebook'
      button.text = 'Sign up with Facebook'
      button.onPress = () => console.log('Button pressed.')
    }

    return (
      <Button style={ads_splash.btn} onPress={button.onPress}>
        <View style={[ads_splash.btn_wrapper]}>
          <Icon {...button.icon} />
          <Text style={[ads_splash.btn_text]}>{button.text}</Text>
        </View>
      </Button>
    )
  }

  render = () => {
    const { navigate } = this.props.navigation

    return (
      <Layout gradient>
        <Wrapper style={[screen.wrapper]}>
          {/* logo text and tagline */}
          <View style={screen.div}>
            <Text style={ads_splash.heading}>Chad</Text>
            <Text style={ads_splash.subheading}>
              Message anyone in world, through location based chatrooms.
            </Text>

            {this.get_button('google')}
            {this.get_button('facebook')}
            {this.get_button()}

            <View style={ads_splash.login}>
              <Text style={screen.light_text}>
                Already have an account?
              </Text>

              <Button onPress={() => navigate('Login')}>
                <Text style={[screen.light_text, screen.span]}>
                  Sign in.
                </Text>
              </Button>
            </View>

            <View style={screen.terms}>
              <Text style={screen.light_text}>
                By creating an account, I accept
              </Text>

              <Button>
                <Text style={[screen.light_text, screen.span]}>
                  Chad's Terms of Service
                </Text>
              </Button>
            </View>
          </View>
        </Wrapper>
      </Layout>
    )
  }
}
