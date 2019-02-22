/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Text, View } from 'react-native'

// atoms


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
    this.state = {}

  }

  render = () => {
    return (
      <Layout gradient>
        <Wrapper keykeyboard style={[screen.wrapper]}>
          <View >
            <Text >
              Onboard Screen
            </Text>
          </View>
        </Wrapper>
      </Layout>
    )
  }
}

