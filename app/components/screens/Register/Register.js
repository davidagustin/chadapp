/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { ImagePicker } from 'expo'

// atoms
import { Button, BASE } from '../../atoms'

// templates
import { Layout, Wrapper } from '../../templates'

// styles
import screen from '../base/Screen.style'
import ads_register from './Register.style'

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default: {
        first_name: 'First Name',
        last_name: 'Last Name',
        birthday: 'MM/DD/YYY',
        gender_identity: 'Gender',
        username: 'Username',
        password: 'Password',
        c_password: 'Confirm Password',
        bio: 'Bio'
      },
      user: {
        first_name: null,
        last_name: null,
        birthday: null,
        gender_identity: null,
        username: null,
        password: null,
        c_password: null,
        bio: null
      }
    }
  }

  static navigationOptions = {

  }

  render = () => {
    const {
      first_name, last_name, birthday, gender_identity, username, password, c_password, bio
    } = this.state

    return (
      <Layout gradient>
        <Wrapper keyboard style={[screen.wrapper]}>

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
        </Wrapper>
      </Layout>
    )
  }
}
