/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { ScrollView, KeyboardAvoidingView, Text } from 'react-native'
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen'

// atoms
import { Button, Input } from '../../atoms'

// templates
import { Layout, Wrapper } from '../../templates'

import { ProfileImage, Terms } from '../../molecules'

// styles
import { BASE } from '../../../config/style'
import ada_input from '../../atoms/Input/Input.style'

import screen from '../base/Screen.style'
import ads_register from './Register.style'

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: null,
      last_name: null,
      birthday: null,
      gender: null,
      email: null,
      username: null,
      password: null,
      c_password: null,
      bio: null,
      submitted: false
    }
  }

  static navigationOptions = {
    title: null
  }

  render = () => {
    const {
      first_name, last_name, birthday, gender, email, username, password, c_password, bio, submitted
    } = this.state

    return (
      <Layout gradient>
        <ScrollView contentContainerStyle={ads_register.wrapper}>
          <KeyboardAvoidingView
            behavior='position'
            contentContainerStyle={screen.div}
            keyboardVerticalOffset={5}
          >
            <Text style={[screen.title, { color: BASE.light }]}>Profile</Text>
            <ProfileImage
              button_style={ads_register.image_btn}
              image_style={ads_register.image}
            />

            <Input
              placeholder='First Name' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ first_name: text })}
              value={first_name} textContentType='givenName' editable={!submitted}
            />
            <Input
              placeholder='Last Name' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ last_name: text })}
              value={last_name} textContentType='familyName' editable={!submitted}
            />
            <Input
              placeholder='Birthday' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ birthday: text })}
              value={birthday} textContentType='familyName' editable={!submitted}
            />
            <Input
              placeholder='Gender' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ gender: text })}
              value={gender} textContentType='none' editable={!submitted}
            />
            <Input
              placeholder='Email' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ email: text })}
              value={email} textContentType='emailAddress' editable={!submitted}
            />
            <Input
              placeholder='Username' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ username: text })}
              value={username} maxLength={30} editable={!submitted}
            />
            <Input
              placeholder='Password' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ password: text })}
              value={password} textContentType='password' editable={!submitted}
            />
            <Input
              placeholder='Confirm Password' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ c_password: text })}
              value={c_password} editable={!submitted}
            />
            <Input
              placeholder='Bio' placeholderTextColor={BASE.light}
              onChangeText={(text) => this.setState({ bio: text })}
              value={bio} maxLength={150} multiline numberOfLines={5}
              editable={!submitted}
            />
            <Button style={ads_register.btn}>
              <Text style={ads_register.btn_text}>Create Account</Text>
            </Button>
          </KeyboardAvoidingView>

          <Terms />
        </ScrollView>
      </Layout>
    )
  }
}
