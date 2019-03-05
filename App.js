/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'

// navigation
import AppNavigator from './app/Navigator'

// styles
import { BASE, helpers } from './app/config/style'

export default class App extends React.Component {
  state = {
    loading_complete: false
  }

  render() {
    const { loading_complete } = this.state
    const { skipLoadingScreen } = this.props

    if (!loading_complete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      let view = [helpers.ada_container, { backgroundColor: BASE.light }]
      return (
        <View style={view}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppNavigator />
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.error(error)
  }

  _handleFinishLoading = () => this.setState({ loading_complete: true })
}
